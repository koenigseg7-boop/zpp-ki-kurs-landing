import { motion, useScroll, useTransform } from 'motion/react';

interface FloatingCTAProps {
  onBookClick: () => void;
}

export function FloatingCTA({ onBookClick }: FloatingCTAProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const y = useTransform(scrollY, [300, 500], [100, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        onClick={onBookClick}
        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/50 flex items-center gap-3 group relative overflow-hidden"
      >
        {/* Animated glow background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <span className="relative z-10">🚀 Jetzt Platz sichern</span>
        
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        />
      </motion.button>
    </motion.div>
  );
}
