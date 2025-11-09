'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 16; // ~60fps
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500); // Fade out duration
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const focusVariants = {
    initial: {
      filter: 'blur(20px)',
      scale: 0.5,
      opacity: 0.3,
    },
    animate: {
      filter: 'blur(0px)',
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-background-primary to-background-secondary"
        >
          {/* Aperture frame effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border-4 border-accent-primary/20" />
              <div className="absolute inset-4 rounded-full border-2 border-accent-secondary/20" />
            </div>
          </div>

          {/* Main content */}
          <motion.div
            variants={focusVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4">
              Jay Guri
            </h1>
            <p className="text-lg md:text-xl text-text-secondary">
              Full-Stack Developer • Data Science Enthusiast • Photographer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 md:w-96 h-1 bg-background-tertiary rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

