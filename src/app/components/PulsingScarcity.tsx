import { motion } from 'motion/react';

interface PulsingScarcityProps {
  text: string;
}

export function PulsingScarcity({ text }: PulsingScarcityProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          '0 0 0 0 rgba(239, 68, 68, 0.5)',
          '0 0 0 8px rgba(239, 68, 68, 0)',
          '0 0 0 0 rgba(239, 68, 68, 0)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="inline-block bg-gradient-to-r from-red-500/90 to-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold border border-red-400/30"
      style={{ boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)' }}
    >
      ⚡ {text}
    </motion.div>
  );
}