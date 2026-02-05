import { TrendingUp, Zap, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { TiltCard } from '@/app/components/TiltCard';

const features = [
  {
    icon: TrendingUp,
    title: 'Wettbewerbsvorteil durch KI',
    description: 'Nutzen Sie künstliche Intelligenz strategisch und bleiben Sie der Konkurrenz voraus. Lernen Sie die wichtigsten KI-Tools für Ihren Unternehmensalltag kennen.'
  },
  {
    icon: Zap,
    title: 'Effizienz radikal steigern',
    description: 'Automatisieren Sie zeitraubende Aufgaben und gewinnen Sie wertvolle Stunden für strategische Arbeit. Praxiserprobte Methoden, sofort umsetzbar.'
  },
  {
    icon: Rocket,
    title: 'Praxisnah und sofort anwendbar',
    description: 'Keine trockene Theorie. Sie arbeiten an echten Business-Cases und nehmen konkrete KI-Strategien mit, die Sie am Montag einsetzen können.'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal variant="title" className="text-center mb-16 lg:mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Warum dieser KI-Kurs?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Drei entscheidende Gründe für Ihren Erfolg.
          </p>
        </ScrollReveal>

        {/* Premium Feature Rows with 3D Tilt */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index}
              variant="content" 
              delay={index * 0.15}
            >
              <TiltCard tiltAmount={5}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative"
                >
                  {/* Background glow effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Glass card */}
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                    
                    <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                      {/* Icon with animated glow */}
                      <div className="relative flex-shrink-0">
                        {/* Animated glow behind icon */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          animate={{
                            boxShadow: [
                              '0 0 20px rgba(59, 130, 246, 0.3)',
                              '0 0 40px rgba(59, 130, 246, 0.5)',
                              '0 0 20px rgba(59, 130, 246, 0.3)',
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="relative w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500/30 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-400/30"
                        >
                          <feature.icon className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400" strokeWidth={1.5} />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Subtle arrow indicator on hover */}
                      <motion.div
                        className="hidden lg:block flex-shrink-0"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                      >
                        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}