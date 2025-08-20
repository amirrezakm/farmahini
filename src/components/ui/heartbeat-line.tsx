'use client';

import { motion } from 'framer-motion';

interface HeartbeatLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export function HeartbeatLine({ 
  className = "", 
  color = "#ef4444",
  strokeWidth = 3 
}: HeartbeatLineProps) {
  // Smooth continuous ECG with curved heartbeat variations
  const createSmoothECGPath = () => {
    const path = ['M0,50']; // Start from left at baseline
    let currentX = 0;
    const totalWidth = 1600;
    
    while (currentX < totalWidth) {
      // Random spacing between heartbeats (50-120px)
      const spacing = Math.random() * 70 + 50;
      
      // Smooth flat line before heartbeat
      currentX += spacing;
      if (currentX > totalWidth) break;
      path.push(`L${currentX},50`);
      
      // Random heartbeat height and shape
      const peakHeight = Math.random() * 35 + 20; // Random height between 20-55
      const beatWidth = Math.random() * 25 + 20; // Random width between 20-45
      const dipDepth = peakHeight * 0.4; // Proportional dip depth
      
      // Smooth curved heartbeat using quadratic curves
      const x1 = currentX + beatWidth * 0.2;
      const x2 = currentX + beatWidth * 0.4;
      const x3 = currentX + beatWidth * 0.6;
      const x4 = currentX + beatWidth * 0.8;
      const x5 = currentX + beatWidth;
      
      // Smooth approach with curve
      path.push(`Q${x1},48 ${x2},50`);
      
      // Smooth upward curve to peak
      path.push(`Q${currentX + beatWidth * 0.45},${50 - peakHeight * 0.7} ${currentX + beatWidth * 0.5},${50 - peakHeight}`);
      
      // Smooth downward curve to dip
      path.push(`Q${currentX + beatWidth * 0.55},${50 + dipDepth * 0.8} ${x3},${50 + dipDepth}`);
      
      // Smooth return to baseline
      path.push(`Q${x4},48 ${x5},50`);
      
      currentX += beatWidth;
    }
    
    // Smooth end at right edge
    path.push(`L${totalWidth},50`);
    return path.join(' ');
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="100"
        viewBox="0 0 1600 100"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        {/* Very subtle grid background */}
        <defs>
          <pattern id={`ecg-grid-${color.replace('#', '')}`} width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke={color} strokeWidth="0.2" opacity="0.05"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ecg-grid-${color.replace('#', '')})`} />
        
        {/* Simple continuous ECG line - flows from left to right */}
        <motion.path
          d={createSmoothECGPath()}
          stroke={color}
          strokeWidth={strokeWidth * 0.8}
          fill="none"
          strokeDasharray="3200"
          strokeDashoffset="3200"
          animate={{
            strokeDashoffset: [3200, -3200]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            filter: `drop-shadow(0 0 6px ${color}40)`,
          }}
        />
      </svg>
    </div>
  );
}

// Floating heart particles component
export function FloatingHearts({ className = "" }: { className?: string }) {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 1.2,
    x: (i * 8.33) % 100, // More evenly distributed
    y: 100 + (i * 10), // Start from bottom
    size: Math.random() * 15 + 12,
    duration: 15 + Math.random() * 5, // Longer, varied durations
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-red-400/40 heart-beat-rhythm"
          style={{
            left: `${heart.x}%`,
            bottom: `-50px`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0, 0.7, 0.5, 0.8, 0],
            y: [-heart.y * 2, -heart.y * 4, -heart.y * 6],
            rotate: [0, 15, -10, 5, 0],
            scale: [0.5, 1.2, 0.8, 1.1, 0.3],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeOut"
          }}
        >
          ♥
        </motion.div>
      ))}
      
      {/* Additional smaller hearts for density */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute text-pink-300/30"
          style={{
            left: `${(i * 12.5) % 100}%`,
            bottom: `-30px`,
            fontSize: `${8 + Math.random() * 6}px`,
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: [-200, -400, -600],
            x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "linear"
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

// Animated heart icon component
export function AnimatedHeart({ 
  className = "",
  size = 60,
  color = "#ef4444"
}: { 
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Main heart */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className="heart-pulse"
        animate={{
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </motion.svg>
      
      {/* Multiple pulsing ring effects for smoother animation */}
      {[0, 0.3, 0.6].map((delay, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: `${color}${Math.floor((1 - index * 0.2) * 255).toString(16).padStart(2, '0')}`,
          }}
          animate={{
            scale: [1, 2.5, 3.5],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Heartbeat sparkles */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-300 rounded-full"
          style={{
            left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
            top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
}
