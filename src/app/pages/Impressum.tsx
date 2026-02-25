import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { PremiumBackground } from '@/app/components/PremiumBackground';

const logoImage = '/images/logo.png';

export function Impressum() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Premium Background with Spotlights & Grain */}
      <PremiumBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        
        {/* Back Button */}
        <Link to="/">
          <button
            className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zur Startseite
          </button>
        </Link>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            <img 
              src={logoImage} 
              alt="ZPP Logo" 
              className="h-16 w-auto relative z-10"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Impressum
          </h1>

          {/* Company Information */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold text-white text-xl">ZPP - Zwischen Prompt und Panik</p>
                <p>Zülpicher Str. 221</p>
                <p>52349 Düren</p>
              </div>
            </section>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Telefon</div>
                    <a href="tel:+4915226396902" className="text-blue-400 hover:text-blue-300 transition-colors">
                      01522 6396902
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">E-Mail</div>
                    <a href="mailto:info@zwischenpromptundpanik.de" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@zwischenpromptundpanik.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Vertreten durch</h3>
              <p className="text-gray-300">Alexander George & Raoul Heidkamp</p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Umsatzsteuer-ID</h3>
              <p className="text-gray-300">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <span className="text-white font-mono">DE123456789</span> (Beispiel - bitte durch echte ID ersetzen)
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <div className="text-gray-300">
                <p>Alexander George & Raoul Heidkamp</p>
                <p className="mt-2">
                  Zülpicher Str. 221<br />
                  52349 Düren
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">EU-Streitschlichtung</h3>
              <p className="text-gray-300 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
              <p className="text-gray-300 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Haftung für Inhalte</h3>
              <p className="text-gray-300 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Haftung für Links</h3>
              <p className="text-gray-300 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Urheberrecht</h3>
              <p className="text-gray-300 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-gray-500">
              Stand: Februar 2026
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}