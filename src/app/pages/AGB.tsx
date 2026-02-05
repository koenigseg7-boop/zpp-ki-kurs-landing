import { motion } from 'motion/react';
import { ArrowLeft, FileText, CheckCircle2, XCircle, Euro, Calendar, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
const logoImage = "";
import { PremiumBackground } from '@/app/components/PremiumBackground';

export function AGB() {
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
            <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              AGB
            </h1>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            Allgemeine Geschäftsbedingungen für Kurse und Schulungen
          </p>

          {/* Main Content */}
          <div className="space-y-6">
            
            {/* Section 1 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                1. Geltungsbereich
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Teilnahme an Schulungen, 
                  Kursen, Seminaren und Workshops (nachfolgend „Kurse" genannt) von:
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white">ZPP - Zwischen Prompt und Panik</p>
                  <p>Alexander George & Raoul Heidkamp</p>
                  <p>Zülpicher Str. 221</p>
                  <p>52349 Düren</p>
                </div>
                <p className="leading-relaxed">
                  Die AGB gelten für alle Buchungen, unabhängig davon, ob die Anmeldung online, telefonisch, per E-Mail 
                  oder auf andere Weise erfolgt.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                2. Vertragsschluss und Anmeldung
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  2.1 Die Anmeldung zu einem Kurs erfolgt durch Ausfüllen und Absenden des Anmeldeformulars auf unserer 
                  Website, per E-Mail oder telefonisch. Die Anmeldung stellt ein verbindliches Angebot zum Abschluss 
                  eines Vertrages dar.
                </p>
                <p className="leading-relaxed">
                  2.2 Nach Eingang Ihrer Anmeldung erhalten Sie eine automatische Eingangsbestätigung per E-Mail. 
                  Diese stellt noch keine Vertragsannahme dar.
                </p>
                <p className="leading-relaxed">
                  2.3 Der Vertrag kommt erst mit der Zusendung der Anmeldebestätigung und Rechnung zustande. Wir behalten 
                  uns vor, Anmeldungen ohne Angabe von Gründen abzulehnen.
                </p>
                <p className="leading-relaxed">
                  2.4 Die Teilnehmerzahl ist auf maximal 30 Personen begrenzt. Die Anmeldungen werden in der Reihenfolge 
                  ihres Eingangs berücksichtigt.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                  <Euro className="w-5 h-5 text-white" />
                </div>
                3. Preise und Zahlungsbedingungen
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  3.1 Die Kursgebühren sind auf der Website ausgewiesen und verstehen sich inklusive der gesetzlichen 
                  Mehrwertsteuer.
                </p>
                <p className="leading-relaxed">
                  3.2 Die Kursgebühr ist mit Erhalt der Rechnung zur Zahlung fällig und spätestens 14 Tage vor 
                  Kursbeginn zu entrichten.
                </p>
                <p className="leading-relaxed">
                  3.3 Bei Nichtzahlung behalten wir uns vor, den Teilnehmer vom Kurs auszuschließen. Dies entbindet 
                  nicht von der Zahlungsverpflichtung.
                </p>
                <p className="leading-relaxed">
                  3.4 Ratenzahlung ist nach individueller Vereinbarung möglich.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                4. Rücktritt und Stornierung
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <h3 className="font-semibold text-white text-lg">4.1 Rücktritt durch den Teilnehmer</h3>
                <p className="leading-relaxed">
                  Der Teilnehmer kann jederzeit vom Vertrag zurücktreten. Der Rücktritt muss schriftlich (per E-Mail oder Brief) 
                  erklärt werden. Es gelten folgende Stornogebühren:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Bis 30 Tage vor Kursbeginn: kostenfrei</li>
                  <li>29 bis 15 Tage vor Kursbeginn: 50% der Kursgebühr</li>
                  <li>14 bis 7 Tage vor Kursbeginn: 75% der Kursgebühr</li>
                  <li>Weniger als 7 Tage vor Kursbeginn: 100% der Kursgebühr</li>
                  <li>Bei Nichterscheinen: 100% der Kursgebühr</li>
                </ul>

                <h3 className="font-semibold text-white text-lg mt-6">4.2 Ersatzteilnehmer</h3>
                <p className="leading-relaxed">
                  Der Teilnehmer kann jederzeit einen Ersatzteilnehmer benennen. In diesem Fall entfallen Stornogebühren.
                </p>

                <h3 className="font-semibold text-white text-lg mt-6">4.3 Absage durch den Veranstalter</h3>
                <p className="leading-relaxed">
                  Wir behalten uns vor, Kurse bei zu geringer Teilnehmerzahl (weniger als 8 Personen), Krankheit des 
                  Referenten oder aus anderen wichtigen Gründen bis zu 7 Tage vor Kursbeginn abzusagen. In diesem Fall 
                  werden bereits gezahlte Kursgebühren vollständig erstattet. Weitergehende Ansprüche bestehen nicht.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                5. Durchführung und Änderungen
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  5.1 Wir behalten uns vor, Änderungen am Kursprogramm, an den Referenten oder am Veranstaltungsort 
                  vorzunehmen, sofern dies aus wichtigem Grund erforderlich ist und die Änderungen dem Teilnehmer zumutbar sind.
                </p>
                <p className="leading-relaxed">
                  5.2 Sollte der Kurs aus wichtigem Grund verschoben werden müssen, werden wir uns bemühen, einen 
                  Ersatztermin anzubieten. Der Teilnehmer kann in diesem Fall kostenfrei vom Vertrag zurücktreten.
                </p>
                <p className="leading-relaxed">
                  5.3 Die Kurszeiten sind verbindlich. Ein verspätetes Erscheinen oder vorzeitiges Verlassen berechtigt 
                  nicht zur anteiligen Rückerstattung der Kursgebühr.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                6. Leistungsumfang
              </h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  6.1 Im Kurspreis sind folgende Leistungen enthalten:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Teilnahme am gebuchten Kurs</li>
                  <li>Umfangreiche Kursunterlagen und Checklisten</li>
                  <li>Verpflegung (Mittagessen, Getränke, Snacks)</li>
                  <li>Teilnahmezertifikat</li>
                  <li>4 Wochen Nachbetreuung</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  6.2 Nicht im Kurspreis enthalten sind Anreise, Übernachtung und persönliche Ausgaben.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">7. Urheberrecht und Nutzungsrechte</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  7.1 Alle Kursmaterialien, Präsentationen und Unterlagen sind urheberrechtlich geschützt.
                </p>
                <p className="leading-relaxed">
                  7.2 Die Teilnehmer erhalten ein nicht-übertragbares, nicht-ausschließliches Nutzungsrecht für den 
                  persönlichen Gebrauch.
                </p>
                <p className="leading-relaxed">
                  7.3 Die Vervielfältigung, Weitergabe oder kommerzielle Nutzung der Kursmaterialien ist ohne 
                  schriftliche Genehmigung untersagt.
                </p>
                <p className="leading-relaxed">
                  7.4 Ton-, Bild- und Videoaufnahmen während des Kurses sind ohne vorherige Genehmigung nicht gestattet.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">8. Haftung</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  8.1 Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, 
                  die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
                </p>
                <p className="leading-relaxed">
                  8.2 Für sonstige Schäden haften wir nur bei Vorsatz und grober Fahrlässigkeit.
                </p>
                <p className="leading-relaxed">
                  8.3 Die Teilnahme an praktischen Übungen erfolgt auf eigene Gefahr. Der Teilnehmer ist verpflichtet, 
                  die Sicherheitshinweise zu beachten.
                </p>
                <p className="leading-relaxed">
                  8.4 Für Verlust oder Beschädigung mitgebrachter Gegenstände übernehmen wir keine Haftung.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">9. Datenschutz</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
                  <Link to="/datenschutz" className="text-blue-400 hover:text-blue-300 underline">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">10. Widerrufsrecht für Verbraucher</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die Widerrufsfrist beträgt 14 Tage ab 
                  Vertragsschluss. Das Widerrufsrecht erlischt vorzeitig, wenn die Veranstaltung vor Ablauf der 
                  Widerrufsfrist mit ausdrücklicher Zustimmung des Verbrauchers beginnt.
                </p>
                <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 mt-4">
                  <p className="font-semibold text-white mb-2">Widerrufsbelehrung</p>
                  <p className="leading-relaxed text-sm">
                    Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. 
                    Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses. Um Ihr Widerrufsrecht 
                    auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. per E-Mail oder Brief) über 
                    Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section className="border-t border-white/10 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">11. Schlussbestimmungen</h2>
              <div className="space-y-4 text-gray-300 pl-13">
                <p className="leading-relaxed">
                  11.1 Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des 
                  UN-Kaufrechts.
                </p>
                <p className="leading-relaxed">
                  11.2 Erfüllungsort und Gerichtsstand ist bei Verträgen mit Kaufleuten, juristischen Personen des 
                  öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen Düren.
                </p>
                <p className="leading-relaxed">
                  11.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die 
                  Wirksamkeit der übrigen Bestimmungen nicht.
                </p>
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