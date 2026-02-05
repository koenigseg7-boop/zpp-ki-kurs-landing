import { motion } from 'motion/react';
import { XCircle, RefreshCw, Mail, Phone, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
const logoImage = "";
import { PremiumBackground } from '@/app/components/PremiumBackground';

export function PaymentDenied() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Premium Background with Spotlights & Grain */}
      <PremiumBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
            <img 
              src={logoImage} 
              alt="ZPP Logo" 
              className="h-16 w-auto relative z-10"
            />
          </div>
        </motion.div>

        {/* Error Icon */}
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
              className="absolute inset-0 rounded-full bg-red-500/30 blur-xl"
            />
            
            {/* Icon */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-2xl">
              <XCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Zahlung fehlgeschlagen
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Leider konnte die Zahlung nicht abgeschlossen werden. Keine Sorge – Ihr Platz ist noch verfügbar!
          </p>
        </motion.div>

        {/* Reason Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Mögliche Gründe</h3>
          </div>
          
          <ul className="space-y-4">
            {[
              'Unzureichende Deckung auf Ihrem Konto',
              'Falsche Zahlungsinformationen eingegeben',
              'Ihre Bank hat die Zahlung abgelehnt',
              'Zeitüberschreitung während der Transaktion',
              'Technische Probleme bei der Zahlungsabwicklung'
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
                </div>
                <span className="text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Retry Payment */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 relative overflow-hidden group cursor-pointer h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                  <RefreshCw className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Erneut versuchen</h3>
                <p className="text-gray-400 leading-relaxed">
                  Zurück zur Buchungsseite und den Zahlungsvorgang wiederholen.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Contact Support */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Unterstützung anfordern</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Wir helfen Ihnen gerne weiter. Kontaktieren Sie uns:
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:info@zwischenpromptundpanik.de"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@zwischenpromptundpanik.de</span>
                </a>
                <a 
                  href="tel:+4915226396902"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">01522 6396902</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Alternative Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Alternative Zahlungsmethoden</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Falls die Online-Zahlung weiterhin nicht funktioniert, können Sie auch:
          </p>
          <ul className="space-y-3">
            {[
              'Per Überweisung bezahlen (Rechnung wird per E-Mail zugesandt)',
              'Telefonisch buchen unter 01522 6396902',
              'Uns eine E-Mail mit Ihrer Buchungsanfrage senden'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex justify-center gap-4"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück zur Startseite
            </motion.button>
          </Link>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Jetzt erneut buchen
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}