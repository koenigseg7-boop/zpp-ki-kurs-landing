import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Michael Schneider',
    role: 'Geschäftsführer',
    company: 'MS Consulting GmbH',
    text: 'Der KI-Kurs hat mein Unternehmen transformiert. Wir konnten unsere Prozesse um 40% beschleunigen und die Kundenzufriedenheit deutlich steigern. Absolute Empfehlung!',
    rating: 5
  },
  {
    name: 'Sarah Klein',
    role: 'Marketing-Leiterin',
    company: 'Digital Solutions AG',
    text: 'Endlich ein KI-Kurs, der wirklich praxisnah ist! Die Tools und Strategien konnte ich sofort umsetzen. Innerhalb von 2 Wochen hatten wir messbare Erfolge.',
    rating: 5
  },
  {
    name: 'Thomas Weber',
    role: 'Selbständiger Berater',
    company: 'Weber & Partner',
    text: 'Beste Investition für mein Business! Die kompakte Vermittlung und direkten Anwendungsbeispiele haben mir geholfen, KI effektiv in meinen Arbeitsalltag zu integrieren.',
    rating: 5
  },
  {
    name: 'Julia Hoffmann',
    role: 'E-Commerce Unternehmerin',
    company: 'StyleShop Online',
    text: 'Der Kurs hat meine Erwartungen übertroffen. Besonders wertvoll waren die konkreten KI-Tools für Marketing und Kundenservice. ROI nach nur einem Monat!',
    rating: 5
  }
];

export function PremiumTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const getVisibleTestimonials = () => {
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    return [prev, currentIndex, next];
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const visibleIndices = getVisibleTestimonials();

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Soft Gradient Glow Background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative flex items-center justify-center gap-6 lg:gap-12 py-16">
        {/* Navigation Buttons - Dark Style */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className="z-20 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2} />
        </motion.button>

        {/* Testimonial Cards Container */}
        <div className="relative flex items-center justify-center w-full max-w-5xl h-[450px] lg:h-[400px]">
          <AnimatePresence mode="popLayout">
            {visibleIndices.map((index, position) => {
              const isCenter = position === 1;
              const testimonial = testimonials[index];

              return (
                <motion.div
                  key={`testimonial-${index}-${currentIndex}`}
                  layout
                  initial={{ 
                    opacity: 0, 
                    scale: 0.7,
                    filter: 'blur(20px)'
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.3,
                    scale: isCenter ? 1 : 0.8,
                    filter: isCenter ? 'blur(0px)' : 'blur(8px)',
                    x: isCenter ? 0 : position === 0 ? -120 : 120,
                    zIndex: isCenter ? 10 : 1,
                    rotateY: isCenter ? 0 : position === 0 ? 15 : -15
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.7,
                    filter: 'blur(20px)'
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="absolute w-full max-w-3xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow effect for center card */}
                  {isCenter && (
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-3xl blur-2xl"
                      animate={{
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 lg:p-10" style={{ boxShadow: isCenter ? '0 30px 90px rgba(0, 0, 0, 0.6)' : 'none' }}>
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-3xl pointer-events-none" />
                    
                    <div className="relative">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <p className="text-white text-lg lg:text-xl mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/20">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-400">
                            {testimonial.role} • {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="z-20 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2} />
        </motion.button>
      </div>

      {/* Dots Indicator - Dark Style */}
      <div className="flex justify-center gap-2.5 mt-6">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-blue-500 w-8' 
                : 'bg-white/30 w-2'
            }`}
            whileHover={{ scale: 1.2, backgroundColor: 'rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}