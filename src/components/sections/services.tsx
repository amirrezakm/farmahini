'use client';

import { 
  HeartIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const serviceImages = {
  ekg: '/ecg.webp',
  echo: '/Echocardiography.webp',
  holter: '/Holter ECG.webp',
  abpm: '/24-Hour Blood Pressure Monitoring.webp',
  ergometry: '/Exercise ECG.webp',
  lufo: '/ecg.webp', // Using ECG as fallback for pulmonary function
  abi: '/Ankle-Brachial Index.webp',
  stress_echo: '/Stress Echocardiography.webp',
  device_control: '/Pacemaker and ICD Control.webp',
  cardio_mrt: '/Cardiac MRI.webp',
};

const serviceKeys = [
  'ekg', 'echo', 'holter', 'abpm', 'ergometry', 
  'lufo', 'abi', 'stress_echo', 'device_control', 'cardio_mrt'
];

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceKeys.map((serviceKey) => {
            const imageSrc = serviceImages[serviceKey as keyof typeof serviceImages];
            const service = {
              title: t(`services.${serviceKey}.title`),
              description: t(`services.${serviceKey}.description`)
            };
            
            return (
              <Link
                key={serviceKey}
                href="/services"
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer block"
              >
                {/* Full Image Background */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Text Overlay with Semi-transparent Background */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-4 group-hover:bg-black/50 transition-colors duration-200">
                    <h3 className="text-base font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>


      </div>
    </section>
  );
}