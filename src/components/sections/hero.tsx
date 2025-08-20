'use client';

import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  CalendarDaysIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { HeartbeatLine } from '../ui/heartbeat-line';

export function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  // Helper function to generate correct URLs for default locale
  const getLocalizedHref = (path: string) => {
    if (locale === 'de') {
      // German is default, no prefix needed
      return path;
    }
    return `/${locale}${path}`;
  };

  const floatingIcons = [
    { Icon: HeartIcon, delay: 0, x: '10%', y: '20%' },
    { Icon: ShieldCheckIcon, delay: 0.5, x: '80%', y: '30%' },
    { Icon: UserGroupIcon, delay: 1, x: '15%', y: '70%' },
    { Icon: CalendarDaysIcon, delay: 1.5, x: '85%', y: '75%' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30"></div>
      

      

      

      
      {/* Heartbeat Line - Top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2, ease: 'easeOut' }}
        className="absolute top-16 lg:top-20 left-0 w-full h-32 z-0"
      >
        <HeartbeatLine className="w-full h-full" color="#ef4444" lineColor="#ef4444" strokeWidth={1.5} />
      </motion.div>
      
      {/* Heartbeat Line - Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 2, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 w-full h-32 z-0 rotate-180"
      >
        <HeartbeatLine className="w-full h-full" color="#ef4444" lineColor="#3b82f6" strokeWidth={1.5} />
      </motion.div>
      
      {/* Floating Medical Icons with Heart Theme */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: index === 0 ? 0.25 : 0.15, 
            scale: 1,
            rotate: 0
          }}
          transition={{ 
            delay: delay + 2, 
            duration: 1.5, 
            ease: 'easeOut',
            type: "spring",
            stiffness: 100
          }}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
        >
          <motion.div 
            className="animate-float"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className={`w-16 h-16 text-blue-300`} />
          </motion.div>
        </motion.div>
      ))}

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl"
        />
        
        {/* Subtle glow effects */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.25, 0.05],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-300/15 to-blue-300/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.3, 0.08],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.1, 
              delay: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 120
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-8"
          >
            {t('hero.subtitle')}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* Doctolib CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.9, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80
            }}
            className="flex justify-center items-center mb-16"
          >
            <a
              href="https://www.doctolib.de/praxisgemeinschaft/speyer/kardiologische-praxis-speyer-dr-farmahini"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <CalendarDaysIcon className="w-6 h-6 mr-3" />
                {t('hero.cta_doctolib')}
              </span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.2
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <HeartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('hero.trust_indicators.modern_diagnostics')}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t('hero.trust_indicators.modern_diagnostics_desc')}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('hero.trust_indicators.experienced_care')}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t('hero.trust_indicators.experienced_care_desc')}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('hero.trust_indicators.personal_care')}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t('hero.trust_indicators.personal_care_desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2, 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <motion.span 
            className="text-sm text-gray-500 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t('hero.scroll_down')}
          </motion.span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-blue-300 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}