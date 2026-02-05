import { motion } from 'motion/react';

interface FloatingBadgeProps {
  title: string;
  subtitle: string;
}

export function FloatingBadge({ title, subtitle }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ 
        scale: 1, 
        rotate: 0,
        y: [0, -6, 0]
      }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: 0.8
        },
        rotate: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: 0.8
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.3
        }
      }}
      className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-xl text-white p-6 rounded-2xl border border-blue-400/30"
      style={{ boxShadow: '0 20px 50px rgba(59, 130, 246, 0.4)' }}
    >
      <div className="font-bold text-3xl">{title}</div>
      <div className="text-sm text-blue-100">{subtitle}</div>
    </motion.div>
  );
}