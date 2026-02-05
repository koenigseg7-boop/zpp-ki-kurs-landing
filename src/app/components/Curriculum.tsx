import { Brain, MessageSquare, Target, Lightbulb, TrendingUp, Shield, Rocket, Zap, FileCheck, Clock, Book, Layers, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from '@/app/components/ScrollReveal';
import { PremiumCard } from '@/app/components/premium/PremiumCard';
import { Badge } from '@/app/components/premium/Badge';
import { WaveDivider } from '@/app/components/WaveDivider';

const modules = [
  {
    icon: Brain,
    title: 'Grundlagen & Einordnung',
    duration: '30 Min',
    topics: [
      'Was generative KI ist und was nicht',
      'Unterschied: KI, Machine Learning, Deep Learning, LLMs',
      'Stärken und Grenzen von KI-Systemen',
      'Warum KI ein Werkzeug ist, kein Selbstzweck'
    ]
  },
  {
    icon: Zap,
    title: 'Generative KI & LLMs',
    duration: '45 Min',
    topics: [
      'Funktionsweise von Sprachmodellen (ChatGPT)',
      'Training, Wahrscheinlichkeiten, Kontextverständnis',
      'Warum der Prompt entscheidend ist',
      'Typische Fehler: Halluzinationen, Bias, Mittelmaß'
    ]
  },
  {
    icon: MessageSquare,
    title: 'ChatGPT in der Praxis',
    duration: '40 Min',
    topics: [
      'Konten und Pläne (Free, Plus, Pro/Team)',
      'Oberfläche, Projekte, Dateien und Tools',
      'Custom Instructions und Personalisierung',
      'Voice, Vision, Browsing und Data Analysis'
    ]
  },
  {
    icon: Target,
    title: 'Prompt-Design',
    duration: '50 Min',
    topics: [
      'Aufbau: Instruktion, Kontext, Ziel, Format',
      'Prinzipien: Klarheit, Struktur, Iteration',
      'Arbeiten mit Feedback und Nachschärfen',
      'Typische Prompt-Fehler vermeiden'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Einsatzfelder & Use Cases',
    duration: '45 Min',
    topics: [
      'Text & Kommunikation (E-Mails, Social Media)',
      'Bildgenerierung und Bildanalyse',
      'Datenanalyse mit Excel/CSV',
      'Automatisierung von Prozessen und Workflows'
    ]
  },
  {
    icon: Shield,
    title: 'Risiken & Herausforderungen',
    duration: '30 Min',
    topics: [
      'Content-Flut und Vertrauensverlust',
      'Bias und Qualitätsprobleme',
      'Digitale Spaltung im Unternehmen',
      'Bedeutung von Human-in-the-Loop'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Trends & Zukunft',
    duration: '35 Min',
    topics: [
      'Multimodale KI (Text, Bild, Audio, Video)',
      'KI-Search und Zero-Click-Ergebnisse',
      'Autonome Agenten und agentische Systeme',
      'Tool-Use, Function Calling, Automatisierung'
    ]
  },
  {
    icon: Rocket,
    title: 'Strategie & KI-Roadmap',
    duration: '40 Min',
    topics: [
      'KI als Teil der Unternehmensstrategie',
      'Mensch, Prozess, Technologie und Daten',
      '12-Monats-Roadmap: Enablement bis Review',
      'Messbarkeit durch KPIs und klare Ziele'
    ]
  },
  {
    icon: FileCheck,
    title: 'Governance & Compliance',
    duration: '35 Min',
    topics: [
      'Überblick EU AI Act',
      'Risikoklassen von KI-Systemen',
      'Transparenz- und Kennzeichnungspflichten',
      'KI-Inventar, Dokumentation und Logging'
    ]
  }
];

const curriculumStats = [
  { icon: Layers, label: '9 Module' },
  { icon: Clock, label: '6 Stunden' },
  { icon: Target, label: '100% Praxis' },
  { icon: FileText, label: 'Vorlagen inklusive' }
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 lg:py-32 relative">
      {/* Wave Divider - Top */}
      <WaveDivider 
        position="top" 
        variant="wave3" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.6}
      />

      {/* Wave Divider - Bottom */}
      <WaveDivider 
        position="bottom" 
        variant="wave1" 
        color="rgba(255, 255, 255, 0.03)"
        opacity={0.7}
        flip
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title */}
        <ScrollReveal variant="title" className="text-center mb-12">
          <h2 className="mb-6" style={{ 
            color: 'var(--text-main)',
            lineHeight: '1.1'
          }}>
            ZPP – Zwischen Prompt & Panik
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-sub)' }}>
            9 intensive Module für Ihren KI-Durchblick
          </p>
        </ScrollReveal>

        {/* Claim über den Modulen */}
        <ScrollReveal variant="content" delay={0.05}>
          <div className="text-center mb-10">
            <p className="text-lg lg:text-xl font-semibold" style={{ color: 'var(--text-main)' }}>
              Alle Module basieren auf echten Business-Use-Cases und sind sofort im Arbeitsalltag anwendbar.
            </p>
          </div>
        </ScrollReveal>

        {/* Curriculum Summary Bar */}
        <ScrollReveal variant="content" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-16">
            <div 
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-6 rounded-3xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
              }}
            >
              {curriculumStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <stat.icon 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: 'var(--primary)' }}
                    strokeWidth={2}
                  />
                  <span 
                    className="font-semibold text-sm sm:text-base whitespace-nowrap"
                    style={{ color: 'var(--text-main)' }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Module Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => (
            <ScrollReveal key={index} variant="content" delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="h-full group"
              >
                <div
                  className="relative h-full p-8 rounded-3xl transition-all duration-300"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.12)';
                  }}
                >
                  {/* Time Badge - Top Right */}
                  <div className="absolute top-6 right-6">
                    <div 
                      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                      style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        color: 'var(--primary)'
                      }}
                    >
                      {module.duration}
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all"
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <module.icon 
                      className="w-7 h-7" 
                      style={{ color: 'var(--primary)' }}
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-5"
                    style={{ 
                      color: 'var(--text-main)',
                      lineHeight: '1.3'
                    }}
                  >
                    {module.title}
                  </h3>

                  {/* Topics/Bullets */}
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li 
                        key={topicIndex} 
                        className="flex items-start gap-3"
                      >
                        <span 
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--primary)' }}
                        />
                        <span 
                          className="text-[15px] leading-relaxed"
                          style={{ 
                            color: 'var(--text-sub)',
                            lineHeight: '1.6'
                          }}
                        >
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Highlight Card */}
        <ScrollReveal variant="content" delay={0.5}>
          <div className="mt-16 lg:mt-20 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-8 lg:p-10 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <span className="text-4xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h4 
                    className="text-xl lg:text-2xl font-bold mb-5"
                    style={{ color: 'var(--text-main)' }}
                  >
                    Praxis & Live-Demos inklusive
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'E-Mail-Feedback mit KI',
                      'Datenanalyse mit Beispielen',
                      'Bildgenerierung & Editing',
                      'Anwendungsfälle aus der Praxis'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span 
                          className="text-lg flex-shrink-0 mt-0.5"
                          style={{ color: 'rgb(34, 197, 94)' }}
                        >
                          ✓
                        </span>
                        <span 
                          className="text-base leading-relaxed"
                          style={{ color: 'var(--text-sub)' }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}