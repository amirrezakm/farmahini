'use client';

import { motion } from 'framer-motion';
import { 
  UserIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { translations } from '@/lib/translations';

const teamMembers = [
  {
    key: 'dr_farmahini',
    specialties: ['Interventionelle Kardiologie', 'Echokardiographie', 'Herzschrittmacher'],
    color: 'blue'
  },
  {
    key: 'yeliz_guenes',
    specialties: ['Patientenkoordination', 'EKG-Diagnostik', 'Terminplanung'],
    color: 'green'
  },
  {
    key: 'aaliyah_eichberger',
    specialties: ['Medizinische Assistenz', 'Ultraschall', 'Patientenbetreuung'],
    color: 'purple'
  }
];

const colorSchemes = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200'
  },
  green: {
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200'
  },
  purple: {
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200'
  }
};

export function TeamSection() {
  const t = translations;

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.team.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const colors = colorSchemes[member.color as keyof typeof colorSchemes];
            const memberData = t.team[member.key as keyof typeof t.team] as { name: string; role: string; description: string };
            
            return (
              <motion.div
                key={member.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${colors.gradient} rounded-full transform translate-x-16 -translate-y-16`}></div>
                </div>

                <div className="relative p-8">
                  {/* Photo Placeholder */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <UserIcon className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Professional Badge */}
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center border-2 ${colors.border}`}>
                      {member.key === 'dr_farmahini' ? (
                        <AcademicCapIcon className={`w-4 h-4 ${colors.text}`} />
                      ) : (
                        <HeartIcon className={`w-4 h-4 ${colors.text}`} />
                      )}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {memberData.name}
                  </h3>

                  {/* Role */}
                  <p className={`${colors.text} font-semibold text-center mb-4`}>
                    {memberData.role}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-center text-sm mb-6 leading-relaxed">
                    {memberData.description}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center justify-center">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Schwerpunkte
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium border ${colors.border}`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <HeartIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unser Versprechen an Sie
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jeder Patient steht bei uns im Mittelpunkt. Unser erfahrenes Team arbeitet 
              Hand in Hand, um Ihnen die bestmögliche kardiologische Betreuung zu bieten. 
              Mit modernster Technik, fundiertem Fachwissen und viel Einfühlungsvermögen 
              sorgen wir für Ihre Herzgesundheit.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Zufriedene Patienten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Notfall-Beratung</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}