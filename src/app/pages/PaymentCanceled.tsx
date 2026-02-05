import { motion } from 'motion/react';
import { XCircle, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router';
const logoImage = "";
import { PremiumBackground } from '@/app/components/PremiumBackground';

export function PaymentCanceled() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Premium Background with Spotlights & Grain */}
      <PremiumBackground />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <img 
            src={logoImage} 
            alt="ZPP Logo" 
            className="h-16 w-auto"
          />
        </motion.div>

        {/* Cancel Icon */}
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
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl">
            <XCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Zahlung abgebrochen
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            Kein Problem! Ihre Buchung wurde nicht abgeschlossen. Sie können jederzeit erneut buchen.
          </p>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Was ist passiert?</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Der Zahlungsvorgang wurde abgebrochen oder unterbrochen. Es wurden keine Gebühren berechnet.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Ihre Daten sind bei uns gespeichert – beim nächsten Versuch müssen Sie nichts erneut eingeben
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Der Frühbucher-Preis von €299 ist weiterhin für Sie reserviert
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-4">Brauchen Sie Hilfe?</h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Falls Sie technische Probleme hatten oder Fragen zur Zahlung haben, kontaktieren Sie uns gerne:
          </p>
          
          <div className="space-y-3">
            <a 
              href="mailto:info@zwischenpromptundpanik.de"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@zwischenpromptundpanik.de</span>
            </a>
            <a 
              href="tel:+4915226396902"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">01522 6396902</span>
            </a>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
            >
              Erneut buchen
            </motion.button>
          </Link>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück zur Startseite
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
