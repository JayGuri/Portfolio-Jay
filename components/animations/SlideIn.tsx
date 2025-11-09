'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export function SlideIn({ children, direction = 'left', delay = 0, className }: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
  };

  const animate = {
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? animate[direction] : variants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

