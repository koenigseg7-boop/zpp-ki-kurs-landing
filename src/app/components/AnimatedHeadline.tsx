import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// Premium Stripe-style easing
const STRIPE_EASE = [0.23, 1, 0.32, 1];

export function AnimatedHeadline() {
  const [showCursor, setShowCursor] = useState(false);
  const [cursorBlinking, setCursorBlinking] = useState(true);

  const lines = [
    'KI-Kompetenz für Ihr',
    'Business in Düren'
  ];

  // Calculate total animation duration
  const lineDelay = 0.6; // Delay between lines
  const lineDuration = 0.9; // Duration for each line animation
  const totalAnimationTime = (lines.length * lineDelay) + lineDuration;

  useEffect(() => {
    // Show cursor after all lines are revealed
    const cursorTimer = setTimeout(() => {
      setShowCursor(true);
    }, totalAnimationTime * 1000);

    // Stop blinking after 1 second of showing
    const stopBlinkingTimer = setTimeout(() => {
      setCursorBlinking(false);
    }, (totalAnimationTime + 1) * 1000);

    // Fade out cursor completely
    const hideCursorTimer = setTimeout(() => {
      setShowCursor(false);
    }, (totalAnimationTime + 1.5) * 1000);

    return () => {
      clearTimeout(cursorTimer);
      clearTimeout(stopBlinkingTimer);
      clearTimeout(hideCursorTimer);
    };
  }, [totalAnimationTime]);

  return (
    <div className="relative">
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
        {lines.map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            initial={{ 
              opacity: 0, 
              y: 30, 
              filter: 'blur(12px)' 
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              filter: 'blur(0px)' 
            }}
            transition={{
              duration: lineDuration,
              delay: lineIndex * lineDelay,
              ease: STRIPE_EASE
            }}
            className="block"
          >
            {line}
            {/* Show cursor only after last line */}
            {lineIndex === lines.length - 1 && showCursor && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: cursorBlinking ? [0, 1, 0] : 1
                }}
                exit={{ opacity: 0 }}
                transition={
                  cursorBlinking 
                    ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.5, ease: "easeOut" }
                }
                className="inline-block w-1 h-12 lg:h-16 bg-yellow-400 ml-2 align-middle"
                style={{
                  boxShadow: '0 0 10px rgba(250, 204, 21, 0.6)'
                }}
              />
            )}
          </motion.div>
        ))}
      </h1>
    </div>
  );
}