import { motion } from 'motion/react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { CheckCircle2, Zap, Target, Users, TrendingUp, Shield, Sparkles, Lightbulb } from 'lucide-react';
import { WaveDivider } from '@/app/components/WaveDivider';
import { IconContainer } from './IconContainer';

const benefits = [
  {
    icon: Target,
    variant: 'blue' as const,
    title: 'Praxisnah & sofort umsetzbar',
    description: 'Keine Theorie-Schlachten. Sie arbeiten mit echten Tools, echten Beispielen aus Ihrem Alltag – und gehen mit konkreten Lösungen nach Hause.'
  },
  {
    icon: Zap,
    variant: 'amber' as const,
    title: 'Für Einsteiger konzipiert',
    description: 'Kein Vorwissen nötig. Wir starten bei Null und bringen Sie Schritt für Schritt dorthin, KI selbstständig im Arbeitsalltag einzusetzen.'
  },
  {
    icon: Lightbulb,
    variant: 'cyan' as const,
    title: 'Strategisch statt planlos',
    description: 'Sie lernen nicht nur Tools, sondern wie KI sinnvoll in Prozesse, Teams und Ihre Unternehmensstrategie integriert wird – mit klarer Priorisierung statt blindem Aktionismus.'
  },
  {
    icon: TrendingUp,
    variant: 'blue' as const,
    title: 'Nachhaltige Unterstützung',
    description: 'Sie erhalten nicht nur Unterlagen und Vorlagen – sondern auch 4 Wochen Support nach dem Kurs, damit Sie sicher durchstarten.'
  }
];

export function BenefitsNew() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 px-4">
      {/* Wave Divider - Bottom */}
      <WaveDivider 
        position="bottom" 
        variant="wave1" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.8}
      />

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-15 blur-[260px]"
          style={{
            background: 'radial-gradient(circle, rgba(46, 242, 216, 0.5) 0%, transparent 70%)',
            transform: 'translate(40%, -40%)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[240px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 184, 107, 0.5) 0%, transparent 70%)',
            transform: 'translate(-40%, 40%)'
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-[56px] font-black tracking-tight mb-6" style={{ color: 'var(--text-main)' }}>
            Warum dieser KI-Kurs?
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-sub)' }}>
            Vier entscheidende Gründe für Ihren Erfolg.
          </p>
        </motion.div>

        {/* Benefits Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface border border-border rounded-[28px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
        >
          {/* Top shine line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="group flex items-start gap-6 p-8 lg:p-10 border-b border-border last:border-b-0 transition-all duration-300"
            >
              {/* Icon */}
              <IconContainer variant={benefit.variant}>
                <benefit.icon className="w-6 h-6" />
              </IconContainer>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-main)' }}>
                  {benefit.title}
                </h3>
                <p className="text-lg leading-[1.6]" style={{ color: 'var(--text-sub)' }}>
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}