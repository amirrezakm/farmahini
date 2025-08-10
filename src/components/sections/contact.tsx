'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { translations } from '@/lib/translations';

export function ContactSection() {
  const t = translations;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Nachricht erfolgreich gesendet! Wir melden uns zeitnah bei Ihnen.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-blue-600 mr-3" />
                  <span>+49 6232 123456</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-green-600 mr-3" />
                  <span>praxis@farmahini-kardiologie.de</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Maximilianstraße 42, 67346 Speyer</span>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Notfälle</h3>
                  <p className="text-red-700 text-sm">
                    Bei akuten Herznotfällen wählen Sie bitte sofort den Notruf{' '}
                    <a href="tel:112" className="font-bold underline">112</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Termin anfragen</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="E-Mail"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Nachricht"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}