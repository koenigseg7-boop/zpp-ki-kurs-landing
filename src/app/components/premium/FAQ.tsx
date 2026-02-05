import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { WaveDivider } from '@/app/components/WaveDivider';

const faqs = [
  {
    question: 'Brauche ich Vorkenntnisse?',
    answer: 'Nein, absolut nicht. Der Kurs ist speziell für Einsteiger konzipiert. Wir starten bei den Grundlagen und führen Sie Schritt für Schritt an die praktische Anwendung heran.'
  },
  {
    question: 'Für wen ist der Kurs geeignet?',
    answer: 'Für Selbstständige, Unternehmer und Fachkräfte, die KI im Arbeitsalltag einsetzen möchten – ohne technischen Hintergrund. Wenn Sie effizienter arbeiten und Prozesse automatisieren wollen, sind Sie hier richtig.'
  },
  {
    question: 'Was muss ich mitbringen?',
    answer: 'Bringen Sie Ihren Laptop mit (Windows oder Mac). Alle Tools, die wir nutzen, sind webbasiert und kostenlos verfügbar. WLAN und Verpflegung sind vor Ort vorhanden.'
  },
  {
    question: 'Welche Tools nutzen wir?',
    answer: 'Wir arbeiten mit ChatGPT, Claude, Midjourney und weiteren praxisnahen KI-Tools. Sie erhalten Zugang zu allen relevanten Plattformen und lernen, diese effektiv einzusetzen.'
  },
  {
    question: 'Gibt es Unterlagen & Vorlagen?',
    answer: 'Ja! Sie erhalten ein umfangreiches Workbook, Prompt-Vorlagen, Checklisten und Best Practices – alles digital und sofort einsetzbar.'
  },
  {
    question: 'Ist der Kurs rechtlich & datenschutzseitig relevant?',
    answer: 'Ja. Sie lernen, wie Sie KI datenschutzkonform und im Rahmen des EU AI Acts einsetzen – inklusive klarer Do\'s & Don\'ts für den Unternehmensalltag.'
  },
  {
    question: 'Kann ich den Kurs steuerlich absetzen?',
    answer: 'Als berufliche Weiterbildung ist der Kurs in der Regel steuerlich absetzbar. Sie erhalten eine ordnungsgemäße Rechnung mit ausgewiesener MwSt.'
  },
  {
    question: 'Was ist, wenn ich doch nicht teilnehmen kann?',
    answer: 'Kein Problem. Bis 14 Tage vor Kursbeginn erstatten wir Ihnen den vollen Betrag zurück. Danach können Sie Ihren Platz auf einen Folgetermin übertragen.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 relative px-4">
      {/* Wave Divider - Top */}
      <WaveDivider 
        position="top" 
        variant="wave1" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.5}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-[240px]"
          style={{
            background: 'radial-gradient(circle, rgba(47, 137, 255, 0.5) 0%, transparent 70%)',
            transform: 'translate(-40%, -50%)'
          }}
        />
      </div>

      <div className="relative max-w-[900px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-[56px] font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
            FAQ
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-surface border border-border rounded-[24px] p-6 lg:p-8 text-left transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-main)' }}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? <Minus className="w-5 h-5 text-text-muted flex-shrink-0" /> : <Plus className="w-5 h-5 text-text-muted flex-shrink-0" />}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-lg leading-[1.6]" style={{ color: 'var(--text-sub)' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}