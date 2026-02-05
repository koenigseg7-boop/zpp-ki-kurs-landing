import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
const logoImage = "";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Start' },
    { id: 'benefits', label: 'Vorteile' },
    { id: 'details', label: 'Details' },
    { id: 'curriculum', label: 'Programm' },
    { id: 'trainers', label: 'Trainer' },
    { id: 'pricing', label: 'Preise' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'benefits', 'details', 'curriculum', 'trainers', 'pricing'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrollProgress(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5"
    >
      {/* Progress bar */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            <img 
              src={logoImage} 
              alt="ZPP Logo" 
              className="h-12 w-auto relative z-10"
            />
          </motion.div>
          
          <nav className="hidden md:flex gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? 'text-white bg-blue-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('pricing')}
            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            Buchen
          </button>
        </div>
      </div>
    </motion.div>
  );
}