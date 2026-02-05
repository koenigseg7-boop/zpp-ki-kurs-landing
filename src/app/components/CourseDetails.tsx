import { motion } from 'motion/react';
import { CheckCircle2, Zap, FileText, Shield, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { PrimaryButton } from '@/app/components/premium/PrimaryButton';
import { SecondaryButton } from '@/app/components/premium/SecondaryButton';
import { WaveDivider } from '@/app/components/WaveDivider';

interface CourseDetailsProps {
  onBookClick: () => void;
}

const outcomes = [
  {
    icon: Zap,
    title: 'Sofort einsetzbare Prompts',
    description: 'Sie wissen nicht nur, wie gute Prompts aussehen, sondern auch warum sie funktionieren – damit Sie diese selbst weiterentwickeln und anpassen können.'
  },
  {
    icon: MessageSquare,
    title: 'Texte, E-Mails & Social Media',
    description: 'Sie erstellen professionelle Inhalte in Minuten – passend für Ihr Business, ohne Agentur oder Copywriter.'
  },
  {
    icon: FileText,
    title: 'Automatisierung für Ihren Alltag',
    description: 'Sie automatisieren wiederkehrende Aufgaben und lernen, welche Prozesse sich wirklich lohnen zu automatisieren – und welche nicht.'
  },
  {
    icon: Shield,
    title: 'Sicher & richtig nutzen',
    description: 'Sie lernen klare Regeln für Datenschutz, Risiken, EU AI Act und den sicheren, verantwortungsvollen Einsatz von KI im Unternehmen.'
  }
];

const trustItems = [
  'Kursunterlagen & Checklisten',
  'Verpflegung inklusive',
  '4 Wochen Support',
  'Praxis-Demos & Use Cases'
];

export function CourseDetails({ onBookClick }: CourseDetailsProps) {
  const scrollToCurriculum = () => {
    const element = document.getElementById('curriculum');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="details" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Wave Divider - Top */}
      <WaveDivider 
        position="top" 
        variant="wave2" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.6}
      />

      {/* Wave Divider - Bottom */}
      <WaveDivider 
        position="bottom" 
        variant="wave3" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.7}
      />

      {/* Warm Premium Background with Glows */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg-deep) 0%, var(--bg-base) 50%, var(--bg-deep) 100%)' }} />
      
      {/* Cyan Glow - Top Right */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'var(--accent-cyan)' }}
      />
      
      {/* Amber Glow - Bottom Left */}
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: 'var(--accent-amber)' }}
      />

      {/* Optional Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title */}
        <ScrollReveal variant="title" className="text-center mb-12 lg:mb-16">
          <h2 className="mb-6" style={{ 
            color: 'var(--text-main)',
            lineHeight: '1.1'
          }}>
            Das nehmen Sie mit
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-sub)' }}>
            Keine Theorie. Sie gehen mit Vorlagen, Workflows und Klarheit nach Hause – sofort einsetzbar am Montag.
          </p>
        </ScrollReveal>

        {/* Outcome Grid (2x2) */}
        <ScrollReveal variant="content" delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 lg:mb-16">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="group"
              >
                <div
                  className="h-full p-8 lg:p-10 rounded-3xl transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.10)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.12)';
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all"
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <outcome.icon 
                      className="w-8 h-8" 
                      style={{ color: 'var(--primary)' }}
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold mb-4"
                    style={{ 
                      color: 'var(--text-main)',
                      lineHeight: '1.3'
                    }}
                  >
                    {outcome.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-base leading-relaxed"
                    style={{ 
                      color: 'var(--text-sub)',
                      lineHeight: '1.6'
                    }}
                  >
                    {outcome.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Trust Bar */}
        <ScrollReveal variant="content" delay={0.3}>
          <div className="max-w-5xl mx-auto mb-12 lg:mb-16">
            <div 
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-6 lg:p-8 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
              }}
            >
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl transition-all"
                  style={{
                    background: 'rgba(34, 197, 94, 0.08)',
                    border: '1px solid rgba(34, 197, 94, 0.15)'
                  }}
                >
                  <CheckCircle2 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: 'rgb(34, 197, 94)' }}
                    strokeWidth={2}
                  />
                  <span 
                    className="font-semibold text-sm sm:text-base whitespace-nowrap"
                    style={{ color: 'var(--text-main)' }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal variant="content" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton 
              onClick={onBookClick} 
              size="lg"
              className="w-full sm:w-auto"
            >
              Jetzt Platz sichern
            </PrimaryButton>
            
            <SecondaryButton 
              onClick={scrollToCurriculum}
              size="lg"
              className="w-full sm:w-auto"
            >
              Programm ansehen →
            </SecondaryButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}