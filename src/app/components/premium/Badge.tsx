import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'blue' | 'amber' | 'cyan' | 'success';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-surface border-border text-text-sub',
    blue: 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue',
    amber: 'bg-accent-amber/10 border-accent-amber/20 text-accent-amber',
    cyan: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan',
    success: 'bg-[#36D399]/10 border-[#36D399]/20 text-[#36D399]'
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-3 py-1.5
        text-sm font-medium
        border
        rounded-full
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
