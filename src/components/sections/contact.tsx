'use client';

import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export function ContactSection() {
  const t = useTranslations();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Kontaktinformationen</h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Telefon</p>
                    <p className="text-xl font-semibold text-gray-900">+49 0623236691</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <EnvelopeIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">E-Mail</p>
                    <p className="text-xl font-semibold text-gray-900">info@faramahini.de</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Adresse</p>
                    <p className="text-xl font-semibold text-gray-900">Iggelheimer Straße 26<br />67346 Speyer</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <div className="text-center">
                  <a
                    href="https://www.doctolib.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Termin buchen mit Doctolib
                  </a>
                </div>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Vollständige Kontaktinformationen
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medical Center Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/center.webp"
                  alt="Kardiologische Schwerpunktpraxis Speyer - Praxisräume"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-40 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}