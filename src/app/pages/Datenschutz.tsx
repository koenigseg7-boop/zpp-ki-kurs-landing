import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database, FileText } from 'lucide-react';
import { Link } from 'react-router';
import logoImage from 'figma:asset/18d3f0e8c8313ef5fb34d938a8b809662e720ef5.png';
import { PremiumBackground } from '@/app/components/PremiumBackground';

export function Datenschutz() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Premium Background with Spotlights & Grain */}
      <PremiumBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück zur Startseite
            </motion.button>
          </Link>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
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
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              Datenschutz­erklärung
            </h1>
          </div>

          {/* Quick Overview */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-400" />
              Überblick
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten 
              vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            
            {/* Section 1 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                1. Verantwortliche Stelle
              </h2>
              <div className="space-y-2 text-gray-300 pl-13">
                <p className="font-semibold text-white">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="font-semibold text-white mt-4">ZPP - Zwischen Prompt und Panik</p>
                <p>Alexander George & Raoul Heidkamp</p>
                <p>Zülpicher Str. 221</p>
                <p>52349 Düren</p>
                <p className="mt-4">
                  Telefon: <a href="tel:+4915226396902" className="text-blue-400 hover:text-blue-300">01522 6396902</a><br />
                  E-Mail: <a href="mailto:info@zwischenpromptundpanik.de" className="text-blue-400 hover:text-blue-300">info@zwischenpromptundpanik.de</a>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <h3 className="font-semibold text-white text-lg">2.1 Beim Besuch der Website</h3>
                <p className="leading-relaxed">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser 
                  automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden 
                  temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei erfasst:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                  <li>Name Ihres Access-Providers</li>
                </ul>

                <h3 className="font-semibold text-white text-lg mt-6">2.2 Bei Buchung eines Kurses</h3>
                <p className="leading-relaxed">
                  Wenn Sie einen Kurs bei uns buchen, erheben wir folgende personenbezogene Daten:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vor- und Nachname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Unternehmensname (optional)</li>
                  <li>Zahlungsinformationen</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                3. Zweck der Datenverarbeitung
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu folgenden Zwecken:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Bereitstellung der Website und Gewährleistung der Systemsicherheit</li>
                  <li>Durchführung und Verwaltung Ihrer Kursbuchung</li>
                  <li>Kommunikation mit Ihnen bezüglich der Kurse</li>
                  <li>Rechnungsstellung und Zahlungsabwicklung</li>
                  <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                4. Rechtsgrundlage der Datenverarbeitung
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
                  <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)</li>
                  <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
                  <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">5. Weitergabe von Daten</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten 
                  Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben</li>
                  <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
                  <li>für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">6. Dauer der Speicherung</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Wir speichern personenbezogene Daten nur so lange, wie dies für die Erfüllung der verfolgten Zwecke 
                  notwendig ist oder gesetzliche Aufbewahrungsfristen dies erfordern. Nach Ablauf der jeweiligen Frist 
                  werden die entsprechenden Daten routinemäßig gelöscht.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">7. Ihre Rechte</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">Sie haben das Recht:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                  <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                  <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
                  <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
                  <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">8. Widerspruchsrecht</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO 
                  verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen 
                  Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">9. SSL-Verschlüsselung</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine 
                  SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
                  "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">10. Cookies</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. 
                  Sie dienen dazu, unser Angebot nutzerfreundlicher zu machen. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, 
                  bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                </p>
                <p className="leading-relaxed">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im 
                  Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
                  Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">11. Kontakt</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, 
                  Sperrung oder Löschung von Daten wenden Sie sich bitte an:
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 mt-4">
                  <p className="font-semibold text-white">ZPP - Zwischen Prompt und Panik</p>
                  <p>Zülpicher Str. 221, 52349 Düren</p>
                  <p className="mt-2">
                    E-Mail: <a href="mailto:info@zwischenpromptundpanik.de" className="text-blue-400 hover:text-blue-300">info@zwischenpromptundpanik.de</a><br />
                    Telefon: <a href="tel:+4915226396902" className="text-blue-400 hover:text-blue-300">01522 6396902</a>
                  </p>
                </div>
              </div>
            </section>

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