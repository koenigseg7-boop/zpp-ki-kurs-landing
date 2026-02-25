import { motion, useScroll, useTransform } from 'motion/react';
import { PremiumHeroBackground } from '@/app/components/PremiumHeroBackground';
import { PremiumCTAButton } from '@/app/components/PremiumCTAButton';
import { HologramCard } from '@/app/components/HologramCard';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import { ScrollIndicator } from '@/app/components/ScrollIndicator';

const heroImage = '/images/hero.png';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="hero" className="relative text-white overflow-hidden h-screen flex items-center pt-48">
      {/* Premium Animated Background */}
      <PremiumHeroBackground />
      
      {/* Cinematic Content Container - Edge to Edge */}
      <motion.div 
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full"
      >
        
        {/* Center-Focused Product Launch Layout */}
        <div className="text-center mb-16 lg:mb-20">
          
          {/* Pre-headline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 lg:mb-10"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Teuterhof Düren • 7. März 2026 • 09:00 - 15:00
            </span>
          </motion.div>
          
          {/* Massive Headline - Apple Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 lg:mb-10 tracking-tight"
            style={{ 
              lineHeight: '1',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(to bottom, #ffffff 0%, #a0a0a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            KI für Ihr
            <br />
            Business
          </motion.h1>
          
          {/* Subheadline - Shorter, punchier */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl lg:text-3xl text-gray-400 max-w-3xl mx-auto mb-16 lg:mb-20"
            style={{ lineHeight: '1.4' }}
          >
            Ein Tag. Praxisnah. Sofort umsetzbar.
          </motion.p>

          {/* CTA - Centered, Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <PremiumCTAButton onClick={onBookClick}>
              Jetzt Platz sichern
            </PremiumCTAButton>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const benefitsSection = document.getElementById('benefits');
                if (benefitsSection) {
                  benefitsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-blue-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:text-blue-300 transition-colors"
            >
              Mehr erfahren →
            </motion.button>
          </motion.div>

          {/* Minimal Price Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-12 text-gray-500 text-sm"
          >
            Einführungspreis: <span className="text-white font-semibold">€299</span> <span className="text-green-400">• Nur beim ersten Kurs!</span>
          </motion.div>
        </div>

        {/* Product Showcase - Full Width, Cinematic */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-5xl mx-auto"
        >
          <HologramCard
            src={heroImage}
            alt="KI Training Workshop"
          />
        </motion.div>

        {/* Minimal Stats - Bottom with Animated Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-20 lg:mt-24 flex flex-wrap justify-center gap-12 lg:gap-20 text-center"
        >
          {[
            { value: 6, label: 'Stunden Intensiv', suffix: '' },
            { value: 9, label: 'Themenblöcke', suffix: '' },
            { value: 100, label: '% Praxisnah', suffix: '%' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}