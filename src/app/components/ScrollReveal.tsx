import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'title' | 'content' | 'fade';
  delay?: number;
  className?: string;
}

// Premium easing curve like Stripe
const STRIPE_EASE = [0.23, 1, 0.32, 1];

export function ScrollReveal({ 
  children, 
  variant = 'content', 
  delay = 0,
  className = ''
}: ScrollRevealProps) {
  
  const variants = {
    title: {
      initial: { 
        opacity: 0, 
        y: 30, 
        filter: 'blur(10px)' 
      },
      whileInView: { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)' 
      },
      transition: {
        duration: 0.8,
        delay,
        ease: STRIPE_EASE
      }
    },
    content: {
      initial: { 
        opacity: 0, 
        y: 20,
        scale: 0.98
      },
      whileInView: { 
        opacity: 1, 
        y: 0,
        scale: 1
      },
      transition: {
        duration: 0.6,
        delay,
        ease: STRIPE_EASE
      }
    },
    fade: {
      initial: { 
        opacity: 0
      },
      whileInView: { 
        opacity: 1
      },
      transition: {
        duration: 0.5,
        delay,
        ease: STRIPE_EASE
      }
    }
  };

  const config = variants[variant];

  return (
    <motion.div
      initial={config.initial}
      whileInView={config.whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={config.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
