import { useEffect } from "react";
import { motion } from 'motion/react';
import { CheckCircle2, Download, Calendar, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";
import { PremiumBackground } from '@/app/components/PremiumBackground';

const logoImage = '/images/logo.png';

export function PaymentSuccess() {
 useEffect(() => {
  // Meta Purchase Event (nur wenn fbq verfügbar ist)
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Purchase", {
      value: 299,
      currency: "EUR",
    });
  }
}, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Premium Background with Spotlights & Grain */}
      <PremiumBackground />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              opacity: 0 
            }}
            animate={{ 
              y: -100, 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            <img 
              src={logoImage} 
              alt="ZPP Logo" 
              className="h-16 w-auto relative z-10"
            />
          </div>
        </motion.div>

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Pulsing rings */}
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-green-500/30 blur-xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute inset-0 rounded-full bg-green-500/20 blur-2xl"
            />
            
            {/* Icon */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-20 h-20 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Buchung erfolgreich!
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Willkommen bei ZPP! Ihr Platz ist reserviert und Sie sind bereit für Ihren KI-Intensivkurs.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Course Details Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Ihr Kurs</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Kurs</div>
                  <div className="text-white font-semibold">ZPP – Zwischen Prompt & Panik</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Datum & Zeit</div>
                  <div className="text-white font-semibold">4. April 2026 • 09:00 - 15:00 Uhr</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-white font-semibold">Teuterhof Düren</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nächste Schritte</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  'Bestätigungs-E-Mail wurde versendet',
                  'Rechnung folgt in separater E-Mail',
                  'Kursunterlagen erhalten Sie am Kurstag',
                  'Erinnerung 3 Tage vor dem Termin'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                      </div>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Vorbereitung</h3>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Um das Beste aus Ihrem KI-Kurs herauszuholen, empfehlen wir:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Vorbereitungs-Checkliste</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Zum Kalender hinzufügen</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </motion.button>
          </div>
        </motion.div>

        {/* Contact & Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center space-y-6"
        >
          <p className="text-gray-400">
            Fragen? Kontaktieren Sie uns unter{' '}
            <a href="mailto:info@zwischenpromptundpanik.de" className="text-blue-400 hover:text-blue-300 transition-colors">
              info@zwischenpromptundpanik.de
            </a>
            {' '}oder{' '}
            <a href="tel:+4915226396902" className="text-blue-400 hover:text-blue-300 transition-colors">
              01522 6396902
            </a>
          </p>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Zurück zur Startseite
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );