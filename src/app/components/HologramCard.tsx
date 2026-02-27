import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface HologramCardProps {
  src: string;
  alt: string;
}

export function HologramCard({ src, alt }: HologramCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt - even more subtle
  const springConfig = { stiffness: 120, damping: 25 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-3, 3]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      {/* Enhanced shadow that increases on hover */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl"
        animate={{
          opacity: isHovered ? 0.4 : 0.2,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <div className="relative rounded-3xl overflow-hidden border border-white/20" style={{ boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)' }}>
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent mix-blend-multiply" />
        
        {/* Very subtle scan lines */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(96, 165, 250, 0.2) 2px, rgba(96, 165, 250, 0.2) 3px)',
          }}
          animate={{
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Continuous Reflective Light Sweep - Very Subtle */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, transparent 45%, rgba(255, 255, 255, 0.03) 48%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 52%, transparent 55%, transparent 100%)',
            backgroundSize: '200% 200%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Minimal corner accents - very subtle */}
        <motion.div 
          className="absolute top-6 left-6 w-10 h-10 border-l border-t border-white/20 rounded-tl-lg"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-white/20 rounded-br-lg"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Subtle border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          animate={{
            borderColor: isHovered 
              ? 'rgba(59, 130, 246, 0.3)' 
              : 'rgba(255, 255, 255, 0.1)'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}