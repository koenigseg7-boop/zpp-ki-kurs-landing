import { motion } from 'motion/react';
import { MapPin, Clock, Users, CheckCircle2 } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { Badge } from './Badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroNewProps {
  onBookClick: () => void;
}

export function HeroNew({ onBookClick }: HeroNewProps) {
  const proofItems = [
    { icon: MapPin, text: 'Düren (Teuterhof)' },
    { icon: Clock, text: '1 Tag (9–15 Uhr)' },
    { icon: Users, text: 'Max. 30 Plätze' },
    { icon: CheckCircle2, text: 'Unterlagen + 4 Wochen Support' }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyan glow - top right */}
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-[280px]"
          style={{
            background: 'radial-gradient(circle, rgba(46, 242, 216, 0.6) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}
        />
        
        {/* Amber glow - bottom left */}
        <div 
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-25 blur-[240px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 184, 107, 0.6) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)'
          }}
        />
        
        {/* Blue glow - center */}
        <div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-[220px]"
          style={{
            background: 'radial-gradient(circle, rgba(47, 137, 255, 0.5) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text */}
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[56px] lg:text-[80px] font-black leading-[1.05] tracking-tight mb-6"
              style={{ color: 'var(--text-main)' }}
            >
              KI im Business:<br />
              verstehen,<br />
              anwenden,<br />
              automatisieren.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl lg:text-2xl leading-[1.6] mb-3"
              style={{ color: 'var(--text-sub)' }}
            >
              1-Tages-Intensivkurs für Selbstständige & Unternehmer – vom ersten Prompt zur KI-Roadmap, rechtssicher nach EU AI Act.
            </motion.p>

            {/* Optional zweite Zeile */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg mb-8"
              style={{ color: 'var(--text-muted)' }}
            >
              Keine Buzzwords. Keine Theorie. Sondern echte Business-Anwendungen.
            </motion.p>

            {/* Proof Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {proofItems.map((item, index) => (
                <Badge key={index} variant="blue">
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </Badge>
              ))}
            </motion.div>

            {/* CTA Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <PrimaryButton onClick={onBookClick}>
                Jetzt Platz sichern
              </PrimaryButton>
              
              <SecondaryButton
                onClick={() => {
                  const programSection = document.getElementById('curriculum');
                  programSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Programm ansehen
              </SecondaryButton>
            </motion.div>

            {/* Trust Microline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              Einführungspreis: <span className="text-text-main font-semibold">299 € inkl. MwSt.</span> • 
              Rechnung möglich • 
              <span className="text-[#36D399]"> 14 Tage Geld-zurück</span>
            </motion.p>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-border shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
              {/* Subtle warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-amber/10 via-transparent to-accent-blue/10 z-10 pointer-events-none" />
              
              <ImageWithFallback
                src="/images/hero.png"
                alt="KI Workshop"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}