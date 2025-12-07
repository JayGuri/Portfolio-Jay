'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(
  () => import('@/components/ThreeScene').then((mod) => ({ default: mod.ThreeScene })),
  {
    ssr: false,
    loading: () => null,
  }
);

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

import { MorphingBlob } from '@/components/animations/MorphingBlob';
import { FluidText } from '@/components/animations/FluidText';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

export function Hero() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const goToProjects = () => {
    router.push('/projects');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jay_Guri_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* DarkVeil Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <DarkVeil 
          hueShift={15}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0.3}
          resolutionScale={1}
        />
      </div>

      {/* Three.js Background */}
      <div className="absolute inset-0 z-[1]">
        <ThreeScene />
      </div>

      {/* Morphing Blobs - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2] opacity-30">
        <div className="absolute top-1/4 left-1/4">
          <MorphingBlob color="#C97A5F" size={400} />
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <MorphingBlob color="#D4A574" size={350} />
        </div>
      </div>


      {/* Content */}
      <div className="relative z-[10] max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FluidText
            text="JAY GURI"
            className="text-9xl md:text-[12rem] font-black text-white mb-6 tracking-tighter"
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
            >
              Full-Stack Developer
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Building intelligent, user-centric digital experiences
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={goToProjects}
                size="lg"
                className="text-lg px-10 py-6"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={downloadResume}
                variant="secondary"
                size="lg"
                className="text-lg px-10 py-6"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[10]"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent-secondary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
