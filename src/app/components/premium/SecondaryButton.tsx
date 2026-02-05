import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface SecondaryButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  size?: 'md' | 'lg';
}

export function SecondaryButton({ children, size = 'lg', className = '', ...props }: SecondaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base'}
        font-semibold
        rounded-[16px]
        bg-transparent
        text-text-main
        border border-border
        transition-all duration-300
        hover:bg-surface-strong
        hover:border-white/20
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
