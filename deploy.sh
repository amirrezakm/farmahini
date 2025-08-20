#!/bin/bash

# Farmahini.de Production Deployment Script
# This script sets up a complete production environment on Ubuntu server

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   warn "Running as root. Creating a regular user for deployment..."
   
   # Create deployment user if it doesn't exist
   if ! id "deploy" &>/dev/null; then
       log "Creating deployment user 'deploy'..."
       useradd -m -s /bin/bash deploy
       usermod -aG sudo deploy
       
       # Configure passwordless sudo for deploy user
       echo "deploy ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/deploy
       chmod 440 /etc/sudoers.d/deploy
       
       # Set up SSH key copying if available
       if [[ -d "/root/.ssh" ]]; then
           mkdir -p /home/deploy/.ssh
           cp /root/.ssh/authorized_keys /home/deploy/.ssh/ 2>/dev/null || true
           chown -R deploy:deploy /home/deploy/.ssh
           chmod 700 /home/deploy/.ssh
           chmod 600 /home/deploy/.ssh/authorized_keys 2>/dev/null || true
       fi
       
       log "User 'deploy' created successfully"
   else
       log "User 'deploy' already exists, ensuring sudo configuration..."
       # Ensure deploy user has passwordless sudo even if user already exists
       echo "deploy ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/deploy
       chmod 440 /etc/sudoers.d/deploy
   fi
   
   # Copy script to deploy user's home and run it
   cp "$0" /home/deploy/
   chown deploy:deploy /home/deploy/$(basename "$0")
   chmod +x /home/deploy/$(basename "$0")
   
   log "Switching to user 'deploy' to continue deployment..."
   exec sudo -u deploy /home/deploy/$(basename "$0") "$@"
fi

# Check if sudo is available
if ! command -v sudo &> /dev/null; then
    error "sudo is required but not installed. Please install sudo first."
fi

log "🚀 Starting Farmahini.de Production Deployment"

# Get domain name from user
echo -e "${BLUE}Please enter your domain name (e.g., farmahini.de):${NC}"
read -p "Domain: " DOMAIN

if [[ -z "$DOMAIN" ]]; then
    error "Domain name is required!"
fi

# Validate domain format
if ! [[ "$DOMAIN" =~ ^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$ ]]; then
    warn "Domain format might be invalid. Continuing anyway..."
fi

log "Domain set to: $DOMAIN"

# Get email for SSL certificate
echo -e "${BLUE}Please enter your email for SSL certificate (Let's Encrypt):${NC}"
read -p "Email: " EMAIL

if [[ -z "$EMAIL" ]]; then
    error "Email is required for SSL certificate!"
fi

# Confirm settings
echo -e "${BLUE}Deployment Configuration:${NC}"
echo "Domain: $DOMAIN"
echo "Email: $EMAIL"
echo "Project: Farmahini.de"
echo ""
read -p "Continue with deployment? (y/N): " CONFIRM

if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    log "Deployment cancelled by user"
    exit 0
fi

# Update system
log "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install essential packages
log "🔧 Installing essential packages..."
sudo apt install -y curl wget git unzip rsync software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Install Node.js (Latest LTS)
log "📦 Installing Node.js..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt install -y nodejs
fi

# Verify Node.js installation
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
log "Node.js version: $NODE_VERSION"
log "npm version: $NPM_VERSION"

# Install PM2 globally
log "🔄 Installing PM2 process manager..."
sudo npm install -g pm2

# Install Nginx
log "🌐 Installing Nginx..."
sudo apt install -y nginx

# Install Certbot for SSL
log "🔒 Installing Certbot for SSL certificates..."
sudo apt install -y certbot python3-certbot-nginx

# Configure firewall
log "🔥 Configuring UFW firewall..."
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 80
sudo ufw allow 443

# Create application directory
APP_DIR="/var/www/farmahini"
log "📁 Creating application directory: $APP_DIR"
sudo mkdir -p $APP_DIR
sudo chown -R $USER:$USER $APP_DIR

# Clone or copy project (assuming current directory contains the project)
log "📥 Setting up project files..."
if [[ -f "package.json" ]]; then
    log "Copying project files from current directory..."
    
    # Create a temporary exclusion list for rsync
    cat > /tmp/rsync_exclude << 'EOF'
.git/
node_modules/
.next/
.env.local
.env.*.local
*.log
.DS_Store
Thumbs.db
EOF
    
    # Use rsync to copy files excluding unnecessary directories
    rsync -av --exclude-from=/tmp/rsync_exclude . $APP_DIR/
    
    # Clean up temporary file
    rm -f /tmp/rsync_exclude
    
    cd $APP_DIR
else
    error "package.json not found in current directory. Please run this script from your project root."
fi

# Install dependencies
log "📦 Installing project dependencies..."
npm ci

# Build the project
log "🏗️ Building Next.js application..."
npm run build

# Create PM2 ecosystem file
log "⚙️ Creating PM2 configuration..."
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'farmahini',
    script: 'npm',
    args: 'start',
    cwd: '$APP_DIR',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/farmahini-error.log',
    out_file: '/var/log/pm2/farmahini-out.log',
    log_file: '/var/log/pm2/farmahini.log',
    time: true,
    max_restarts: 10,
    min_uptime: '10s',
    max_memory_restart: '1G'
  }]
}
EOF

# Create PM2 log directory
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# Start application with PM2
log "🚀 Starting application with PM2..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Configure Nginx
log "🌐 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    location /static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000";
    }
    
    # Favicon and robots.txt
    location = /favicon.ico {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=86400";
    }
    
    location = /robots.txt {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=86400";
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
log "🧪 Testing Nginx configuration..."
sudo nginx -t

# Restart Nginx
log "🔄 Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

# Wait for services to start
log "⏳ Waiting for services to start..."
sleep 10

# Check if application is running
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    log "✅ Application is running on port 3000"
else
    error "❌ Application is not responding on port 3000"
fi

# Obtain SSL certificate
log "🔒 Obtaining SSL certificate from Let's Encrypt..."
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL --redirect

# Set up automatic certificate renewal
log "🔄 Setting up automatic SSL certificate renewal..."
sudo systemctl enable certbot.timer

# Create deployment script for future updates
log "📝 Creating update script..."
cat > update.sh << 'EOF'
#!/bin/bash
set -e

log() {
    echo -e "\033[0;32m[$(date +'%Y-%m-%d %H:%M:%S')] $1\033[0m"
}

log "🔄 Starting application update..."

# Pull latest changes (if using git)
if [[ -d ".git" ]]; then
    log "📥 Pulling latest changes..."
    git pull origin main
fi

# Install dependencies
log "📦 Installing dependencies..."
npm ci

# Build application
log "🏗️ Building application..."
npm run build

# Restart PM2
log "🚀 Restarting application..."
pm2 restart farmahini

log "✅ Update completed successfully!"
EOF

chmod +x update.sh

# Create backup script
log "💾 Creating backup script..."
cat > backup.sh << EOF
#!/bin/bash
set -e

BACKUP_DIR="/var/backups/farmahini"
DATE=\$(date +%Y%m%d_%H%M%S)

log() {
    echo -e "\033[0;32m[$(date +'%Y-%m-%d %H:%M:%S')] \$1\033[0m"
}

log "💾 Starting backup..."

# Create backup directory
sudo mkdir -p \$BACKUP_DIR

# Backup application files
log "📁 Backing up application files..."
sudo tar -czf \$BACKUP_DIR/farmahini_\$DATE.tar.gz -C /var/www farmahini

# Backup Nginx configuration
log "🌐 Backing up Nginx configuration..."
sudo cp /etc/nginx/sites-available/$DOMAIN \$BACKUP_DIR/nginx_\$DATE.conf

# Keep only last 7 backups
log "🧹 Cleaning old backups..."
sudo find \$BACKUP_DIR -name "farmahini_*.tar.gz" -mtime +7 -delete
sudo find \$BACKUP_DIR -name "nginx_*.conf" -mtime +7 -delete

log "✅ Backup completed successfully!"
EOF

chmod +x backup.sh

# Set up log rotation
log "📋 Setting up log rotation..."
sudo tee /etc/logrotate.d/farmahini > /dev/null << EOF
/var/log/pm2/farmahini*.log {
    daily
    missingok
    rotate 14
    compress
    notifempty
    create 0640 $USER $USER
    postrotate
        pm2 reloadLogs
    endscript
}
EOF

# Create monitoring script
log "📊 Creating monitoring script..."
cat > monitor.sh << 'EOF'
#!/bin/bash

check_service() {
    local service=$1
    if systemctl is-active --quiet $service; then
        echo "✅ $service is running"
    else
        echo "❌ $service is not running"
        return 1
    fi
}

check_port() {
    local port=$1
    local service=$2
    if netstat -tuln | grep -q ":$port "; then
        echo "✅ $service is listening on port $port"
    else
        echo "❌ $service is not listening on port $port"
        return 1
    fi
}

echo "🔍 System Health Check"
echo "====================="

# Check system services
check_service nginx
check_service ufw

# Check ports
check_port 80 "HTTP"
check_port 443 "HTTPS"
check_port 3000 "Next.js App"

# Check PM2 processes
echo ""
echo "📊 PM2 Status:"
pm2 status

# Check disk space
echo ""
echo "💾 Disk Usage:"
df -h /

# Check memory usage
echo ""
echo "🧠 Memory Usage:"
free -h

# Check SSL certificate expiry
echo ""
echo "🔒 SSL Certificate Status:"
if command -v certbot &> /dev/null; then
    sudo certbot certificates
fi
EOF

chmod +x monitor.sh

# Final checks
log "🧪 Running final health checks..."

# Check if Nginx is running
if systemctl is-active --quiet nginx; then
    log "✅ Nginx is running"
else
    error "❌ Nginx is not running"
fi

# Check if PM2 is running the app
if pm2 list | grep -q "farmahini"; then
    log "✅ PM2 is managing the application"
else
    error "❌ PM2 is not managing the application"
fi

# Check if domain is accessible
log "🌐 Testing domain accessibility..."
if curl -f -s -o /dev/null "http://$DOMAIN"; then
    log "✅ Domain $DOMAIN is accessible via HTTP"
else
    warn "⚠️ Domain $DOMAIN might not be accessible yet (DNS propagation may take time)"
fi

# Display final information
echo ""
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo ""
echo -e "${BLUE}📋 Deployment Summary:${NC}"
echo "Domain: https://$DOMAIN"
echo "Application Directory: $APP_DIR"
echo "Nginx Config: /etc/nginx/sites-available/$DOMAIN"
echo "PM2 Process: farmahini"
echo "Logs: /var/log/pm2/"
echo ""
echo -e "${BLUE}🛠️ Management Commands:${NC}"
echo "Update application: ./update.sh"
echo "Backup application: ./backup.sh"
echo "Monitor system: ./monitor.sh"
echo "View PM2 logs: pm2 logs farmahini"
echo "Restart application: pm2 restart farmahini"
echo "Nginx status: sudo systemctl status nginx"
echo "SSL renewal test: sudo certbot renew --dry-run"
echo ""
echo -e "${BLUE}🔧 Next Steps:${NC}"
echo "1. Point your domain's DNS A record to this server's IP address"
echo "2. Wait for DNS propagation (can take up to 48 hours)"
echo "3. Test your website at https://$DOMAIN"
echo "4. Set up monitoring and alerting as needed"
echo "5. Configure regular backups with: crontab -e"
echo "   Add: 0 2 * * * /var/www/farmahini/backup.sh"
echo ""
echo -e "${GREEN}🚀 Your Farmahini.de website is now live!${NC}"
