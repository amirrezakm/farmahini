import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const serviceImages = {
  ekg: '/ecg.webp',
  echo: '/Echocardiography.webp',
  holter: '/Holter ECG.webp',
  abpm: '/24-Hour Blood Pressure Monitoring.webp',
  ergometry: '/Exercise ECG.webp',
  lufo: '/ecg.webp',
  abi: '/Ankle-Brachial Index.webp',
  stress_echo: '/Stress Echocardiography.webp',
  device_control: '/Pacemaker and ICD Control.webp',
  cardio_mrt: '/Cardiac MRI.webp',
};

const serviceKeys = [
  'ekg', 'echo', 'holter', 'abpm', 'ergometry', 
  'lufo', 'abi', 'stress_echo', 'device_control', 'cardio_mrt'
];

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            {t('services.back_to_home')}
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {t('services.page_description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12">
          {serviceKeys.map((serviceKey, index) => {
            const imageSrc = serviceImages[serviceKey as keyof typeof serviceImages];
            const service = {
              title: t(`services.${serviceKey}.title`),
              description: t(`services.${serviceKey}.description`),
              detailed_description: t(`services.${serviceKey}.detailed_description`)
            };
            
            return (
              <div
                key={serviceKey}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="prose prose-lg text-gray-700">
                      <p className="leading-relaxed">
                        {service.detailed_description}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('services.features_title')}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t(`services.${serviceKey}.feature_1`)}
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t(`services.${serviceKey}.feature_2`)}
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {t(`services.${serviceKey}.feature_3`)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {t('services.cta_title')}
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              {t('services.cta_description')}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('services.cta_button')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
