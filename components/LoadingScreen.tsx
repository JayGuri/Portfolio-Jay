'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [apertureSize, setApertureSize] = useState(600);

  useEffect(() => {
    const duration = 3000;
    const interval = 16;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        const newApertureSize = 600 - (newProgress / 100) * 200;
        setApertureSize(newApertureSize);

        if (newProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const blurAmount = 40 - (progress / 100) * 40;
  const scaleAmount = 0.5 + (progress / 100) * 0.5;
  const opacityAmount = 0.1 + (progress / 100) * 0.9;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(218, 2, 14, 0.3), transparent 50%)',
                'radial-gradient(circle at 70% 70%, rgba(255, 215, 0, 0.3), transparent 50%)',
                'radial-gradient(circle at 30% 30%, rgba(218, 2, 14, 0.3), transparent 50%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Aperture frame */}
          <motion.div
            animate={{
              width: apertureSize,
              height: apertureSize,
              opacity: 0.3 + (progress / 100) * 0.5,
            }}
            transition={{ duration: 0.1, ease: 'linear' }}
            className="absolute rounded-full border-4 border-[#DA020E]"
            style={{
              boxShadow: `0 0 ${100 + progress * 3}px rgba(218, 2, 14, ${0.3 + progress / 200})`,
            }}
          />

          {/* Inner aperture ring */}
          <motion.div
            animate={{
              width: apertureSize * 0.7,
              height: apertureSize * 0.7,
            }}
            transition={{ duration: 0.1, ease: 'linear' }}
            className="absolute rounded-full border-2 border-[#FFD700]"
            style={{
              boxShadow: `0 0 ${60 + progress * 2}px rgba(255, 215, 0, ${0.2 + progress / 300})`,
            }}
          />

          {/* Focus content */}
          <div className="relative z-10 text-center px-8">
            <motion.h1
              animate={{
                filter: `blur(${blurAmount}px)`,
                scale: scaleAmount,
                opacity: opacityAmount,
              }}
              transition={{ duration: 0.1, ease: 'linear' }}
              className="text-8xl md:text-[10rem] font-black text-white tracking-tighter"
              style={{
                textShadow: `0 0 ${30 + progress * 0.8}px rgba(218, 2, 14, ${0.5 + progress / 200})`,
              }}
            >
              JAY GURI
            </motion.h1>

            <motion.p
              animate={{
                filter: `blur(${Math.max(0, blurAmount - 15)}px)`,
                scale: scaleAmount * 0.9,
                opacity: Math.max(0, opacityAmount - 0.2),
              }}
              transition={{ duration: 0.1, delay: 0.3, ease: 'linear' }}
              className="mt-6 text-2xl md:text-3xl text-white/80 font-medium"
            >
              Full-Stack Developer • Data Science • Photographer
            </motion.p>

            {/* Progress bar */}
            <motion.div
              animate={{
                width: 150 + (progress / 100) * 100,
                opacity: 0.4 + (progress / 100) * 0.6,
              }}
              transition={{ duration: 0.1, ease: 'linear' }}
              className="mx-auto mt-12 h-1 rounded-full bg-gradient-to-r from-[#DA020E] via-[#FFD700] to-[#DA020E]"
            />
          </div>

          {/* Aperture blades */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: i * 30,
                  scale: 1 - (progress / 100) * 0.4,
                  opacity: 0.15 - (progress / 100) * 0.15,
                }}
                className="absolute w-1 h-40 bg-[#DA020E] origin-top"
                style={{
                  transformOrigin: 'top center',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
