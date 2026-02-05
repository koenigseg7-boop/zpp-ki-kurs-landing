import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface PremiumCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  withShine?: boolean;
  hoverLift?: boolean;
}

export function PremiumCard({ 
  children, 
  withShine = false, 
  hoverLift = true, 
  className = '', 
  ...props 
}: PremiumCardProps) {
  return (
    <motion.div
      whileHover={hoverLift ? { y: -6 } : undefined}
      className={`
        relative
        bg-surface
        border border-border
        rounded-[28px]
        shadow-[0_24px_80px_rgba(0,0,0,0.25)]
        transition-all duration-300
        ${hoverLift ? 'hover:border-white/20 hover:shadow-[0_32px_96px_rgba(0,0,0,0.3)]' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Optional top shine line */}
      {withShine && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-[28px]" />
      )}
      
      {children}
    </motion.div>
  );
}
