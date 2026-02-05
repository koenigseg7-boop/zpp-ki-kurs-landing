import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface StaggerGroupProps {
  children: ReactNode[];
  staggerDelay?: number;
  baseDelay?: number;
  className?: string;
}

// Premium easing curve like Stripe
const STRIPE_EASE = [0.23, 1, 0.32, 1];

export function StaggerGroup({ 
  children, 
  staggerDelay = 0.1,
  baseDelay = 0,
  className = ''
}: StaggerGroupProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ 
            opacity: 0, 
            y: 20,
            scale: 0.98
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: baseDelay + (index * staggerDelay),
            ease: STRIPE_EASE
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
