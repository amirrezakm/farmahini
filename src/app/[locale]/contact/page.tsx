'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Calendar,
  Globe
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [selectedImage, setSelectedImage] = useState(0);

  const teamImages = [
    { src: '/faraz1.jpg', alt: 'Dr. Faraz Farmahini - Portrait 1' },
    { src: '/faraz2.jpg', alt: 'Dr. Faraz Farmahini - Portrait 2' },
    { src: '/faraz3.jpg', alt: 'Dr. Faraz Farmahini - Portrait 3' },
    { src: '/faraz4.jpg', alt: 'Dr. Faraz Farmahini - Portrait 4' },
    { src: '/faraz5.jpg', alt: 'Dr. Faraz Farmahini - Portrait 5' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('page.back_to_home')}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('page.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {t('page.subtitle')}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t('page.description')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-8"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Practice Image */}
            <div className="mb-16">
              <div className="relative max-w-4xl mx-auto">
                <div className="aspect-[16/9] relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/center.webp"
                    alt="Kardiologische Schwerpunktpraxis Speyer - Praxisräume"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                </div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 -z-10"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-40 -z-10"></div>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              
              {/* Practice Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  {t('page.practice_info.title')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Adresse</p>
                    <p className="text-gray-900 whitespace-pre-line">{t('page.practice_info.address_full')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Telefon</p>
                    <p className="text-gray-900 font-semibold">{t('page.practice_info.phone_full')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">E-Mail</p>
                    <p className="text-gray-900 font-semibold">{t('page.practice_info.email_full')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Website</p>
                    <p className="text-gray-900 font-semibold">{t('page.practice_info.website')}</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-green-600 mr-3" />
                  {t('page.opening_hours.title')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montag</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dienstag</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mittwoch</span>
                    <span className="font-semibold">08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Donnerstag</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Freitag</span>
                    <span className="font-semibold">08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wochenende</span>
                    <span className="font-semibold text-red-600">Geschlossen</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">{t('page.opening_hours.note')}</p>
                  </div>
                </div>
              </div>

              {/* Emergency Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  {t('page.emergency_info.title')}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">{t('page.emergency_info.description')}</p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-800 font-bold text-lg">{t('page.emergency_info.emergency_number')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Krankenhaus</p>
                    <p className="text-gray-900 font-semibold">{t('page.emergency_info.hospital')}</p>
                    <p className="text-gray-600">{t('page.emergency_info.hospital_phone')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Booking Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 mb-16">
              <div className="text-center text-white">
                <Calendar className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">{t('page.appointment_booking.title')}</h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  {t('page.appointment_booking.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.doctolib.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    {t('page.appointment_booking.doctolib_button')}
                  </a>
                  <a
                    href="tel:+4962323669"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {t('page.appointment_booking.phone_button')}
                  </a>
                </div>
              </div>
            </div>

            {/* Team Gallery */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('page.gallery.title')}</h3>
                <p className="text-gray-600 text-lg">{t('page.gallery.description')}</p>
              </div>
              
              {/* Main Image Display */}
              <div className="mb-8">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl max-w-2xl mx-auto">
                  <Image
                    src={teamImages[selectedImage].src}
                    alt={teamImages[selectedImage].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
                {teamImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                      selectedImage === index 
                        ? 'ring-4 ring-blue-500 scale-110' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
