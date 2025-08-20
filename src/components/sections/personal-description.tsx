'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function PersonalDescriptionSection() {
  const t = useTranslations('personalDescription');

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('content')}
                </p>
              </div>
              
              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    <h3 className="font-semibold text-gray-900">{t('highlights.education')}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{t('highlights.educationDesc')}</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-cyan-600 rounded-full mr-3"></div>
                    <h3 className="font-semibold text-gray-900">{t('highlights.specialization')}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{t('highlights.specializationDesc')}</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('cta_button')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Image */}
                <div className="relative">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-2xl shadow-xl">
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
                <div className="relative mt-8">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-2xl shadow-xl">
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
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-40 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
