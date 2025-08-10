'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'team', href: '#team' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3">
            <div className="relative">
              <HeartIcon className="w-8 h-8 text-blue-600 pulse-heart" />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-30"></div>
            </div>
            <div className="text-lg font-bold text-gray-900">
              <span className="hidden sm:inline">Dr. Farmahini</span>
              <span className="sm:hidden">Praxis</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group"
              >
                {t.navigation[item.key as keyof typeof t.navigation]}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Emergency button */}
            <Link
              href="tel:112"
              className="hidden sm:flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <span className="text-sm">🚨</span>
              <span className="text-sm">{t.hero.emergency}</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  {t.navigation[item.key as keyof typeof t.navigation]}
                </Link>
              ))}
              
              {/* Mobile emergency button */}
              <Link
                href="tel:112"
                className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 mt-4"
              >
                <span>🚨</span>
                <span>{t.hero.emergency}</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}