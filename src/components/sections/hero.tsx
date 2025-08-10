'use client';

import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  CalendarDaysIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export function HeroSection() {
  const t = translations;

  const floatingIcons = [
    { Icon: HeartIcon, delay: 0, x: '10%', y: '20%' },
    { Icon: ShieldCheckIcon, delay: 0.5, x: '80%', y: '30%' },
    { Icon: UserGroupIcon, delay: 1, x: '15%', y: '70%' },
    { Icon: CalendarDaysIcon, delay: 1.5, x: '85%', y: '75%' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      
      {/* Floating Medical Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay, duration: 1, ease: 'easeOut' }}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
        >
          <div className="animate-float">
            <Icon className="w-16 h-16 text-blue-300" />
          </div>
        </motion.div>
      ))}

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-green-200/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-8"
          >
            {t.hero.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <CalendarDaysIcon className="w-5 h-5 mr-2" />
                {t.hero.cta_appointment}
              </span>
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 min-w-[200px]"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              {t.hero.cta_contact}
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <HeartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Modernste Diagnostik</h3>
              <p className="text-sm text-gray-600 text-center">
                Hochmoderne Geräte für präzise Herzuntersuchungen
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Erfahrene Betreuung</h3>
              <p className="text-sm text-gray-600 text-center">
                Langjährige Expertise in der Kardiologie
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Persönliche Betreuung</h3>
              <p className="text-sm text-gray-600 text-center">
                Individuelle Behandlung für jeden Patienten
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}