import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  x: number;
  y: number;
  id: number;
  size: number;
  opacity: number;
}

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let idCounter = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const delta = now - lastTime;
      
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Only create particles every 30ms for performance
      if (delta > 30) {
        const newParticle: Particle = {
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          id: idCounter++,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.5 + 0.3
        };
        
        setParticles((prev) => [...prev.slice(-15), newParticle]);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.slice(1));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom Cursor Dot */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.4))',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Particle Trail */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            initial={{
              opacity: particle.opacity,
              scale: 1,
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(99, 102, 241, 0.3))',
            }}
            animate={{
              opacity: 0,
              scale: 0.5,
              y: particle.y - 20,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>
    </>
  );
}
