import { motion, useScroll, useTransform } from 'motion/react';

export function PremiumHeroBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);

  return (
    <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
      {/* Deep Black-Blue Gradient Base */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, #0a1628 0%, #000000 50%, #000000 100%)'
        }}
      />
      
      {/* Slow Moving Gradient Blobs */}
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Film Grain / Noise Texture */}
      <motion.div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
        animate={{
          x: [0, -5, 0],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle Top-to-Bottom Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {/* Soft Light Sweep Behind Content - Very Slow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%]"
          style={{
            background: 'linear-gradient(125deg, transparent 0%, transparent 46%, rgba(59, 130, 246, 0.04) 48%, rgba(99, 102, 241, 0.06) 50%, rgba(59, 130, 246, 0.04) 52%, transparent 54%, transparent 100%)',
            filter: 'blur(40px)'
          }}
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Secondary Diagonal Light Sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-full h-[300%] -top-[100%]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, transparent 48%, rgba(255, 255, 255, 0.015) 49%, rgba(255, 255, 255, 0.025) 50%, rgba(255, 255, 255, 0.015) 51%, transparent 52%, transparent 100%)',
          }}
          animate={{
            y: ['0%', '100%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
}