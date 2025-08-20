# Kardiologische Schwerpunktpraxis Speyer Website

A modern, multilingual website for Dr. Faraz Farmahini's cardiology practice in Speyer, Germany.

## 🚀 Features

### Design & User Experience
- **Apple-inspired Design**: Clean, minimalist, premium feel with smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Modern Animations**: Framer Motion powered transitions and micro-interactions

### Multilingual Support
- **German** (Primary language)
- **English** (Secondary)
- **Farsi/Persian** (With RTL support)
- Seamless language switching with next-intl

### Key Sections
1. **Hero Section**: Welcoming introduction with call-to-action buttons
2. **Services**: Complete list of 10 medical services with descriptions
3. **Team**: Professional profiles of Dr. Farmahini and medical staff
4. **Contact & Booking**: Contact form and practice information
5. **Footer**: Quick links and emergency contact information

## 🏥 Medical Services

The website showcases all cardiology services offered:

1. **EKG** (Elektrokardiogramm)
2. **Echokardiographie** (Herzultraschall)
3. **Langzeit-EKG** (24-hour Holter monitoring)
4. **Langzeit-Blutdruckmessung** (24-hour blood pressure monitoring)
5. **Belastungs-EKG** (Exercise stress test)
6. **Lungenfunktionstest** (Pulmonary function test)
7. **Knöchel-Arm-Index** (Ankle-brachial index)
8. **Stress-Echokardiographie** (Stress echocardiography)
9. **Schrittmacher- und ICD-Kontrolle** (Pacemaker & ICD control)
10. **Cardio-MRT** (Cardiac MRI)

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Heroicons
- **Fonts**: Inter & Poppins (Google Fonts)

## 📱 Responsive Design

The website is optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎨 Design System

### Color Palette
- **Primary**: Medical Blue (#4A90E2)
- **Secondary**: Warm Coral (#FF6B6B)
- **Accent**: Fresh Green (#4ECDC4)
- **Neutral**: Warm grays with subtle gradients

### Animation Style
- Smooth, organic transitions (300-500ms)
- Micro-interactions on hover/click
- Entrance animations (fade-in, slide-up)
- Heart pulse animations for medical theme

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale-specific layout
│   │   └── page.tsx            # Main homepage
│   ├── globals.css             # Global styles and design system
│   └── page.tsx                # Root redirect
├── components/
│   ├── navigation/
│   │   └── header.tsx          # Header with navigation
│   ├── sections/
│   │   ├── hero.tsx            # Hero section
│   │   ├── services.tsx        # Services section
│   │   ├── team.tsx            # Team section
│   │   └── contact.tsx         # Contact section
│   ├── footer/
│   │   └── footer.tsx          # Footer component
│   └── ui/
│       └── language-switcher.tsx # Language switcher
├── i18n/
│   ├── config.ts               # Internationalization config
│   └── request.ts              # Request config for next-intl
├── messages/
│   ├── de.json                 # German translations
│   ├── en.json                 # English translations
│   └── fa.json                 # Farsi translations
└── lib/
    └── utils.ts                # Utility functions
```

## 🌐 Internationalization

The website supports three languages with complete translations:

- **German (de)**: Primary language with complete medical terminology
- **English (en)**: Full translation for international patients
- **Farsi (fa)**: Complete translation with RTL support

### Adding New Languages

1. Add locale to `src/i18n/config.ts`
2. Create translation file in `src/messages/[locale].json`
3. Update middleware configuration

## 🎭 Animations & Interactions

### Hero Section
- Floating medical icons with organic movement
- Animated background gradients
- Staggered text animations
- Interactive CTA buttons with hover effects

### Services Section
- Cards with hover animations and glowing effects
- Staggered entrance animations
- Icon transformations on hover

### Team Section
- Profile cards with lift animations
- Specialty tags with color coding
- Scale animations on hover

### Contact Section
- Form validation with smooth transitions
- Loading states for form submission
- Interactive contact information cards

## 📞 Contact Information

- **Phone**: +49 6232 123456
- **Email**: info@farmahini.de
- **Address**: Maximilianstraße 42, 67346 Speyer


## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```



## 📊 Performance Features

- Optimized images and fonts
- Code splitting with Next.js
- Lazy loading for sections
- Minimal JavaScript bundle
- Fast page transitions

## 🔒 Privacy & Security

- No tracking or analytics by default
- GDPR-compliant contact forms
- Secure form handling
- Privacy policy ready

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags for each language
- Open Graph tags
- Structured data for medical practice
- Sitemap generation

---

Built with ❤️ for the health and wellbeing of patients in Speyer and surrounding areas.