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
import Shuffle from '@/components/Shuffle';
import DecryptedText from '@/components/DecryptedText';
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
    router.push('/work#projects');
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
          <MorphingBlob color="#3B82F6" size={400} />
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <MorphingBlob color="#60A5FA" size={350} />
        </div>
      </div>


      {/* Content */}
      <div className="relative z-[10] max-w-7xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Shuffle
            text="JAY GURI"
            tag="h1"
            className="text-9xl md:text-[12rem] font-black text-white mb-6 tracking-tighter"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <DecryptedText
              text="Full-Stack Developer"
              className="text-4xl md:text-6xl font-bold mb-4 text-white block"
              animateOn="view"
              revealDirection="center"
              speed={50}
              maxIterations={20}
            />
            <DecryptedText
              text="Building intelligent, user-centric digital experiences"
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto block"
              animateOn="view"
              revealDirection="center"
              speed={50}
              maxIterations={20}
            />
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
            className="w-1 h-3 bg-accent-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
