import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface IconContainerProps {
  children: ReactNode;
  variant?: 'blue' | 'amber' | 'cyan';
  className?: string;
}

export function IconContainer({ children, variant = 'blue', className = '' }: IconContainerProps) {
  const variants = {
    blue: 'bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 border-accent-blue/20 text-accent-blue',
    amber: 'bg-gradient-to-br from-accent-amber/20 to-accent-amber/5 border-accent-amber/20 text-accent-amber',
    cyan: 'bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 border-accent-cyan/20 text-accent-cyan'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`
        flex items-center justify-center
        w-12 h-12
        rounded-2xl
        border
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
