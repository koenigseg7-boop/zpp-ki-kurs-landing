import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { MagneticButton } from '@/app/components/MagneticButton';
import { TiltCard } from '@/app/components/TiltCard';
import { WaveDivider } from '@/app/components/WaveDivider';

interface PricingProps {
  onBookClick: () => void;
}

export function Pricing({ onBookClick }: PricingProps) {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      {/* Wave Divider - Top */}
      <WaveDivider 
        position="top" 
        variant="wave2" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.7}
      />

      {/* Wave Divider - Bottom */}
      <WaveDivider 
        position="bottom" 
        variant="curve" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.5}
      />

      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal variant="title" className="text-center mb-16 lg:mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Einführungspreis
            <br />
            Nur €299
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Spezieller Preis für unseren ersten Kurs – sichern Sie sich jetzt einen Platz!
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          {/* Single Premium Box */}
          <ScrollReveal variant="content" delay={0.2}>
            <TiltCard tiltAmount={8}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                {/* Animated cyan/blue glow border */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl opacity-60 blur-2xl"
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4))',
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(99, 102, 241, 0.4))',
                      'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4))',
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-10 lg:p-12 border border-cyan-400/30 overflow-hidden" style={{ boxShadow: '0 30px 90px rgba(6, 182, 212, 0.3)' }}>
                  {/* Light sweep animation */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(120deg, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 52%, transparent 55%, transparent 100%)',
                    }}
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2
                    }}
                  />

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
                    className="absolute top-6 right-6 bg-green-500/20 backdrop-blur-xl text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-400/30 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Einführungsangebot
                  </motion.div>

                  <div className="relative mb-10">
                    <h3 className="text-3xl font-bold text-white mb-6">
                      ZPP – Zwischen Prompt & Panik
                    </h3>
                    
                    {/* Premium Price Reveal Animation */}
                    <div className="mb-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="inline-block"
                      >
                        <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                          €299
                        </div>
                      </motion.div>
                      <p className="text-sm text-gray-400 mt-2">
                        inkl. MwSt.
                      </p>
                    </div>
                    
                    <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 mb-8">
                      <p className="text-green-200 text-base flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        🎉 Nur beim ersten Kurs! Danach regulär €499
                      </p>
                    </div>
                  </div>

                  {/* Features with highlights */}
                  <ul className="space-y-4 mb-10 relative">
                    {[
                      { text: '6 Stunden Intensiv-Training', bonus: false },
                      { text: '9 praxisnahe Themenblöcke', bonus: false },
                      { text: 'Umfangreiche Kursunterlagen', bonus: false },
                      { text: 'Verpflegung inklusive', bonus: false },
                      { text: 'Live-Demos & Praxisbeispiele', bonus: true },
                      { text: '4 Wochen E-Mail-Support', bonus: true },
                      { text: 'Klarer Fahrplan für die nächsten 12 Monate im KI-Einsatz', bonus: true }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                          item.bonus 
                            ? 'bg-cyan-500/20 border-cyan-400/40' 
                            : 'bg-green-500/20 border-green-400/30'
                        }`}>
                          <Check className={`w-3 h-3 ${item.bonus ? 'text-cyan-400' : 'text-green-400'}`} strokeWidth={2.5} />
                        </div>
                        <span className={item.bonus ? 'font-semibold text-white' : 'text-gray-200'}>
                          {item.bonus && <span className="text-cyan-400">BONUS: </span>}
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Premium CTA Button - Magnetic */}
                  <MagneticButton
                    onClick={onBookClick}
                    className="relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-6 rounded-2xl font-bold text-xl overflow-hidden group"
                    style={{ boxShadow: '0 15px 50px rgba(6, 182, 212, 0.5)' }}
                    strength={0.4}
                  >
                    {/* Button light sweep */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                      }}
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-3">
                      Jetzt Einführungspreis sichern
                      <ArrowRight className="w-6 h-6" />
                    </span>
                  </MagneticButton>

                  <p className="text-center text-cyan-200/80 text-sm mt-6">
                    ✓ 14 Tage Geld-zurück-Garantie
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Payment & Tax Info */}
        <ScrollReveal variant="content" delay={0.4}>
          <div className="mt-16 lg:mt-20 space-y-8">
            {/* Payment methods */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10">
              <h3 className="font-semibold text-white mb-8 text-center text-xl">Flexible Zahlungsmöglichkeiten</h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {[
                  { icon: '💳', title: 'Kreditkarte', desc: 'Visa, Mastercard' },
                  { icon: '🏦', title: 'Überweisung', desc: 'Rechnung per E-Mail' },
                  { icon: '📧', title: 'PayPal', desc: 'Schnell & sicher' }
                ].map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl mb-3">{method.icon}</div>
                    <div className="font-semibold text-white text-base mb-1">{method.title}</div>
                    <div className="text-sm text-gray-400">{method.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tax info */}
            <div className="text-center">
              <p className="text-gray-400 text-base">
                <span className="text-green-400 font-semibold">✓ Steuerlich absetzbar:</span> Als Fortbildungskosten voll absetzbar
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}