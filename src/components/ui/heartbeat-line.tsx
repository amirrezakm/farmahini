'use client';

import { motion } from 'framer-motion';

interface HeartbeatLineProps {
  className?: string;
  color?: string;
  lineColor?: string;
  strokeWidth?: number;
}

export function HeartbeatLine({ 
  className = "", 
  color = "#ef4444",
  lineColor,
  strokeWidth = 3 
}: HeartbeatLineProps) {
  // Use lineColor for the ECG line, color for the grid background
  const actualLineColor = lineColor || color;
  // Realistic ECG pattern with P-QRS-T waves
  const createRealisticECGPath = () => {
    const path = ['M0,50']; // Start from left at baseline
    let currentX = 0;
    const totalWidth = 1600;
    const baseline = 50;
    
    while (currentX < totalWidth) {
      // Realistic spacing between heartbeats (80-120px for normal heart rate)
      const spacing = Math.random() * 40 + 80;
      
      // Flat baseline before heartbeat
      currentX += spacing;
      if (currentX > totalWidth) break;
      path.push(`L${currentX},${baseline}`);
      
      // P wave (small upward deflection)
      const pWaveStart = currentX;
      const pWaveWidth = 8;
      const pWaveHeight = 3;
      path.push(`Q${pWaveStart + pWaveWidth/2},${baseline - pWaveHeight} ${pWaveStart + pWaveWidth},${baseline}`);
      currentX += pWaveWidth;
      
      // PR segment (flat)
      const prSegment = 12;
      currentX += prSegment;
      path.push(`L${currentX},${baseline}`);
      
      // QRS Complex (main spike)
      const qrsStart = currentX;
      const qrsWidth = 16;
      const qHeight = 8; // Small Q wave
      const rHeight = 35 + Math.random() * 15; // Main R wave
      const sHeight = 12; // S wave
      
      // Q wave (small downward)
      path.push(`L${qrsStart + 3},${baseline + qHeight}`);
      
      // R wave (sharp upward spike)
      path.push(`L${qrsStart + qrsWidth * 0.4},${baseline - rHeight}`);
      
      // S wave (downward after R)
      path.push(`L${qrsStart + qrsWidth * 0.7},${baseline + sHeight}`);
      
      // Return to baseline
      path.push(`L${qrsStart + qrsWidth},${baseline}`);
      currentX += qrsWidth;
      
      // ST segment (flat)
      const stSegment = 15;
      currentX += stSegment;
      path.push(`L${currentX},${baseline}`);
      
      // T wave (rounded upward deflection)
      const tWaveStart = currentX;
      const tWaveWidth = 25;
      const tWaveHeight = 12 + Math.random() * 8;
      path.push(`Q${tWaveStart + tWaveWidth/3},${baseline - tWaveHeight * 0.7} ${tWaveStart + tWaveWidth/2},${baseline - tWaveHeight}`);
      path.push(`Q${tWaveStart + tWaveWidth * 2/3},${baseline - tWaveHeight * 0.7} ${tWaveStart + tWaveWidth},${baseline}`);
      currentX += tWaveWidth;
      
      // Small pause after T wave
      currentX += 10;
    }
    
    // End at right edge
    path.push(`L${totalWidth},${baseline}`);
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
        {/* Realistic ECG Grid Background */}
        <defs>
          {/* Major grid lines (every 5 small squares) */}
          <pattern id={`ecg-major-grid-${color.replace('#', '')}`} width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke={color} strokeWidth="1.2" opacity="0.35"/>
          </pattern>
          
          {/* Minor grid lines (small squares) */}
          <pattern id={`ecg-minor-grid-${color.replace('#', '')}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={color} strokeWidth="0.5" opacity="0.18"/>
          </pattern>
          
          {/* ECG paper background */}
          <linearGradient id={`ecg-paper-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#fef7f7', stopOpacity: 0.5}} />
            <stop offset="50%" style={{stopColor: '#ffffff', stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: '#f0f9ff', stopOpacity: 0.4}} />
          </linearGradient>
        </defs>
        
        {/* Paper background */}
        <rect width="100%" height="100%" fill={`url(#ecg-paper-${color.replace('#', '')})`} />
        
        {/* Minor grid */}
        <rect width="100%" height="100%" fill={`url(#ecg-minor-grid-${color.replace('#', '')})`} />
        
        {/* Major grid */}
        <rect width="100%" height="100%" fill={`url(#ecg-major-grid-${color.replace('#', '')})`} />
        
        {/* Realistic ECG line with medical accuracy */}
        <motion.path
          d={createRealisticECGPath()}
          stroke={actualLineColor}
          strokeWidth={strokeWidth * 0.9}
          fill="none"
          strokeDasharray="3200"
          strokeDashoffset="3200"
          animate={{
            strokeDashoffset: [3200, -3200]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            filter: `drop-shadow(0 0 4px ${actualLineColor}30)`,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
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
