import { motion } from 'motion/react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';
import { WaveDivider } from '@/app/components/WaveDivider';
const raoulImage = "";
const alexanderImage = "";

const trainers = [
  {
    name: 'Alexander George',
    role: 'Studioinhaber & Ernährungsberater',
    positioning: 'Nutzt KI, um mehr Zeit für seine Kunden zu gewinnen. Setzt KI täglich produktiv im eigenen Unternehmen ein.',
    proofs: [
      'KI täglich im Arbeitsalltag',
      'Automatisierung von Terminverwaltung & Content',
      'Praxisfälle aus dem eigenen Studio'
    ],
    image: alexanderImage,
    imagePosition: 'object-center'
  },
  {
    name: 'Raoul Heidkamp',
    role: 'Selbstständiger Versicherungsvermittler',
    positioning: 'Setzt KI gezielt für effizientere Vertriebsprozesse ein. Setzt KI täglich produktiv im eigenen Unternehmen ein.',
    proofs: [
      'KI für Kundenanfragen & Prozessautomatisierung',
      'Moderne Arbeitsprozesse in der Versicherungsbranche',
      'Praxisfälle & Vorlagen aus echten Unternehmen'
    ],
    image: raoulImage,
    imagePosition: 'object-top'
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 lg:py-32 relative">
      {/* Wave Divider - Top */}
      <WaveDivider 
        position="top" 
        variant="wave1" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.7}
        flip
      />

      {/* Wave Divider - Bottom */}
      <WaveDivider 
        position="bottom" 
        variant="wave2" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.6}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title */}
        <ScrollReveal variant="title" className="text-center mb-16">
          <h2 className="mb-6" style={{ 
            color: 'var(--text-main)',
            lineHeight: '1.1'
          }}>
            Deine Trainer
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-sub)' }}>
            Keine Berater, keine Buzzwords – sondern Unternehmer, die KI täglich produktiv einsetzen.
          </p>
        </ScrollReveal>

        {/* Trainer Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={index} variant="content" delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="h-full group"
              >
                <div
                  className="relative h-full rounded-3xl overflow-hidden transition-all duration-300"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.12)';
                  }}
                >
                  {/* Image Container with Strong Overlay */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    {/* Strong Professional Overlay for Text Readability */}
                    <div 
                      className="absolute inset-0 z-10"
                      style={{
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)'
                      }}
                    />
                    
                    <ImageWithFallback
                      src={trainer.image}
                      alt={trainer.name}
                      className={`w-full h-full object-cover ${trainer.imagePosition}`}
                    />

                    {/* Name & Role - On Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl font-bold mb-2"
                        style={{ 
                          color: 'var(--text-main)',
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                        }}
                      >
                        {trainer.name}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base font-semibold"
                        style={{ 
                          color: 'var(--primary)',
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                        }}
                      >
                        {trainer.role}
                      </motion.p>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8">
                    {/* Positioning Statement */}
                    <p 
                      className="text-base leading-relaxed mb-6"
                      style={{ 
                        color: 'var(--text-sub)',
                        lineHeight: '1.6'
                      }}
                    >
                      {trainer.positioning}
                    </p>

                    {/* Bullet Proofs */}
                    <div className="space-y-3">
                      {trainer.proofs.map((proof, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 
                            className="w-5 h-5 flex-shrink-0 mt-0.5" 
                            style={{ color: 'var(--primary)' }}
                            strokeWidth={2}
                          />
                          <span 
                            className="text-[15px] leading-relaxed"
                            style={{ 
                              color: 'var(--text-sub)',
                              lineHeight: '1.6'
                            }}
                          >
                            {proof}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Banner - Premium Gradient Card */}
        <ScrollReveal variant="content" delay={0.4}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto p-8 lg:p-10 rounded-3xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
            }}
          >
            <div className="text-5xl mb-4">🎯</div>
            <h4 
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{ color: 'var(--text-main)' }}
            >
              Praxis statt Theorie
            </h4>
            <p 
              className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-sub)' }}
            >
              Beide Trainer nutzen KI täglich in Vertrieb, Backoffice, Kommunikation und Marketing und zeigen dir anhand echter Business-Use-Cases, wie KI im Alltag wirklich funktioniert.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}