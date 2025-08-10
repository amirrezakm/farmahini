'use client';

// Animations removed for better compatibility
import { 
  HeartIcon,
  SignalIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { translations } from '@/lib/translations';

const serviceIcons = {
  ekg: SignalIcon,
  echo: HeartIcon,
  holter: ClockIcon,
  abpm: ArrowTrendingUpIcon,
  ergometry: BoltIcon,
  lufo: CloudIcon,
  abi: DocumentMagnifyingGlassIcon,
  stress_echo: HeartIcon,
  device_control: CpuChipIcon,
  cardio_mrt: MagnifyingGlassIcon,
};

const serviceKeys = [
  'ekg', 'echo', 'holter', 'abpm', 'ergometry', 
  'lufo', 'abi', 'stress_echo', 'device_control', 'cardio_mrt'
];

export function ServicesSection() {
  const t = translations;

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceKeys.map((serviceKey) => {
            const IconComponent = serviceIcons[serviceKey as keyof typeof serviceIcons];
            const service = t.services[serviceKey as keyof typeof t.services] as { title: string; description: string };
            
            return (
              <div
                key={serviceKey}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
              >
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-14 h-14 bg-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Modernste Ausstattung für Ihre Gesundheit
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Unsere Praxis verfügt über die neueste medizinische Technologie und 
              folgt den aktuellen Leitlinien der Deutschen Gesellschaft für Kardiologie. 
              Alle Untersuchungen werden von erfahrenen Fachkräften durchgeführt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center space-x-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                <span className="font-medium text-gray-800">Zertifizierte Qualität</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <HeartIcon className="w-6 h-6 text-red-500" />
                <span className="font-medium text-gray-800">Patientenorientiert</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <BoltIcon className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-800">Modernste Technik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}