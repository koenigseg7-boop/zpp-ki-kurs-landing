import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

interface PremiumCTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function PremiumCTAButton({ onClick, children }: PremiumCTAButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        x: xSpring, 
        y: ySpring,
        boxShadow: '0 15px 40px rgba(59, 130, 246, 0.35)'
      }}
      className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2 overflow-hidden border border-blue-400/30 group"
      whileHover={{
        scale: 1.02,
        boxShadow: '0 25px 60px rgba(59, 130, 246, 0.5)'
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }}
      animate={{
        boxShadow: [
          '0 15px 40px rgba(59, 130, 246, 0.3)',
          '0 15px 50px rgba(59, 130, 246, 0.4)',
          '0 15px 40px rgba(59, 130, 246, 0.3)'
        ]
      }}
    >
      {/* Subtle shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
        }}
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Soft glow behind button */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity"
      />
      
      <span className="relative z-10">{children}</span>
      <motion.div
        className="relative z-10"
        animate={{
          x: [0, 4, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}