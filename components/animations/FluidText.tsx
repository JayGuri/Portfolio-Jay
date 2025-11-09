'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FluidTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function FluidText({ text, className, delay = 0 }: FluidTextProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{
            y: [
              0,
              Math.sin((mousePosition.x + i * 10) / 100) * 5,
              0,
            ],
            rotateX: [
              0,
              Math.cos((mousePosition.y + i * 10) / 100) * 5,
              0,
            ],
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.02,
            ease: 'easeOut',
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

