import { motion } from 'motion/react';
import { PremiumTestimonialCarousel } from '@/app/components/PremiumTestimonialCarousel';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { StaggerGroup } from '@/app/components/StaggerGroup';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal variant="title" className="text-center mb-16 lg:mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Das sagen unsere Teilnehmer
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Über 200 zufriedene Unternehmer haben bereits profitiert.
          </p>
        </ScrollReveal>

        {/* Apple-Style Testimonial Highlight Quote - before carousel */}
        <ScrollReveal variant="content" delay={0.2}>
          <div className="mb-20 lg:mb-24 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl rounded-3xl p-10 lg:p-14 border border-white/10 overflow-hidden">
              {/* Subtle glow behind quote */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative">
                {/* Large Quote Text with Gradient */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="text-3xl lg:text-4xl font-semibold text-center mb-8 leading-relaxed"
                  style={{
                    background: 'linear-gradient(to bottom, #ffffff 30%, #9ca3af 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  „Der beste KI-Kurs, den ich als Unternehmer besucht habe!"
                </motion.p>
                
                {/* Author - Minimal */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <p className="text-gray-400 text-lg">
                    Michael S. • Geschäftsführer, Düren
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <ScrollReveal variant="content" delay={0.4}>
          <PremiumTestimonialCarousel />
        </ScrollReveal>

        {/* Stats Section - Minimal Apple Style */}
        <ScrollReveal variant="content" delay={0.6}>
          <div className="mt-24 lg:mt-32">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 lg:p-14 border border-white/10 relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-50" />
              
              <StaggerGroup 
                staggerDelay={0.1}
                baseDelay={0.1}
                className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center"
              >
                {[
                  { value: '4.9/5', label: 'Bewertung' },
                  { value: '200+', label: 'Teilnehmer' },
                  { value: '98%', label: 'Weiterempfehlung' },
                  { value: '15+', label: 'Kurse' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="group"
                  >
                    <div className="text-5xl lg:text-6xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}