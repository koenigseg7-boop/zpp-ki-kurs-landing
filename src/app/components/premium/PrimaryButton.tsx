import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface PrimaryButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  size?: 'md' | 'lg';
}

export function PrimaryButton({ children, size = 'lg', className = '', ...props }: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden
        ${size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'}
        font-semibold
        rounded-[16px]
        bg-accent-blue
        text-white
        border border-white/10
        shadow-[0_8px_32px_rgba(47,137,255,0.3)]
        transition-all duration-300
        hover:shadow-[0_12px_48px_rgba(47,137,255,0.4)]
        hover:border-white/20
        ${className}
      `}
      {...props}
    >
      {/* Subtle shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
