import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface GlitchPriceProps {
  price: string;
}

export function GlitchPrice({ price }: GlitchPriceProps) {
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative inline-block">
      {isGlitching ? (
        <>
          {/* Glitch layers */}
          <motion.div
            className="absolute inset-0 text-5xl font-bold"
            animate={{
              x: [-2, 2, -2, 0],
              opacity: [0.7, 0.5, 0.7, 0]
            }}
            transition={{
              duration: 0.4,
              times: [0, 0.3, 0.6, 1]
            }}
            style={{ color: '#ff00ff', mixBlendMode: 'screen' }}
          >
            {price}
          </motion.div>
          <motion.div
            className="absolute inset-0 text-5xl font-bold"
            animate={{
              x: [2, -2, 2, 0],
              opacity: [0.7, 0.5, 0.7, 0]
            }}
            transition={{
              duration: 0.4,
              times: [0, 0.3, 0.6, 1],
              delay: 0.1
            }}
            style={{ color: '#00ffff', mixBlendMode: 'screen' }}
          >
            {price}
          </motion.div>
          <motion.div
            className="relative text-5xl font-bold text-blue-900"
            animate={{
              opacity: [0.5, 0.8, 1]
            }}
            transition={{
              duration: 0.6
            }}
          >
            {price}
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-5xl font-bold text-blue-900"
        >
          {price}
        </motion.div>
      )}
    </div>
  );
}
