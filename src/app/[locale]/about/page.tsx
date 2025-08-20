'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('personalDescription');

  const journeyPoints = [
    t('detailed_journey.point1'),
    t('detailed_journey.point2'),
    t('detailed_journey.point3'),
    t('detailed_journey.point4'),
    t('detailed_journey.point5'),
    t('detailed_journey.point6'),
    t('detailed_journey.point7'),
    t('detailed_journey.point8'),
    t('detailed_journey.point9'),
    t('detailed_journey.point10'),
    t('detailed_journey.point11'),
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
            {t('back_to_home')}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('page_title')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('subtitle')}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-8"></div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Photo Section */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* Main Image */}
                  <div className="relative">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src="/faraz1.jpg"
                        alt="Dr. Faraz Farmahini"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Secondary Image */}
                  <div className="relative mt-12">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src="/faraz2.jpg"
                        alt="Dr. Faraz Farmahini - Professional"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 -z-10"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-40 -z-10"></div>
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                {/* Journey Points */}
                <div className="space-y-6">
                  {journeyPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-blue-600 group-hover:text-cyan-600 transition-colors" />
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Signature Section */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mt-12">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-2">{t('signature.title')}</p>
                    <p className="text-2xl font-bold text-gray-900 font-serif">
                      {t('signature.name')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vereinbaren Sie einen Termin
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Profitieren Sie von meiner langjährigen Erfahrung in der Kardiologie und vereinbaren Sie noch heute einen Termin.
          </p>
          <a
            href="https://www.doctolib.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Termin buchen mit Doctolib
          </a>
        </div>
      </section>
    </main>
  );
}
