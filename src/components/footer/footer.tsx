'use client';

import { motion } from 'framer-motion';
import { 
  HeartIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { translations } from '@/lib/translations';
import Link from 'next/link';

export function Footer() {
  const t = translations;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-red-600 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
            <span className="font-medium">{t.footer.emergency_note}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <HeartIcon className="w-8 h-8 text-red-500 mr-3 pulse-heart" />
              <div>
                <h3 className="text-xl font-bold">{t.footer.practice_name}</h3>
                <p className="text-gray-300">{t.footer.doctor_name}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ihre Herzgesundheit liegt uns am Herzen. Mit modernster Diagnostik und 
              persönlicher Betreuung sorgen wir für Ihr Wohlbefinden in Speyer.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="w-4 h-4 mr-2 text-blue-400" />
                <span>Maximilianstraße 42, 67346 Speyer</span>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="w-4 h-4 mr-2 text-green-400" />
                <a href="tel:+496232123456" className="hover:text-white transition-colors">
                  +49 6232 123456
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-4 h-4 mr-2 text-purple-400" />
                <a href="mailto:praxis@farmahini-kardiologie.de" className="hover:text-white transition-colors">
                  praxis@farmahini-kardiologie.de
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-300 hover:text-white transition-colors">Unsere Leistungen</Link></li>
              <li><Link href="#team" className="text-gray-300 hover:text-white transition-colors">Unser Team</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontakt & Termine</Link></li>
              <li><a href="tel:112" className="text-red-400 hover:text-red-300 transition-colors font-medium">Notfall: 112</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Sprechzeiten</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Mo, Di, Do</span>
                <span className="text-white">08:00-18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Mittwoch</span>
                <span className="text-white">08:00-14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Freitag</span>
                <span className="text-white">08:00-16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sa, So</span>
                <span className="text-red-400">Geschlossen</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Kardiologische Schwerpunktpraxis Speyer - Dr. Faraz Farmahini. 
              Alle Rechte vorbehalten.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}