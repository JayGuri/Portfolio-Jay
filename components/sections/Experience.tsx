'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MorphingBlob } from '@/components/animations/MorphingBlob';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences, education } from '@/lib/data';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const allExperiences = [...experiences, ...education];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden bg-black"
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

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-[1] opacity-20">
        <div className="absolute top-0 left-1/4">
          <MorphingBlob color="#3B82F6" size={450} />
        </div>
        <div className="absolute bottom-0 right-1/4">
          <MorphingBlob color="#60A5FA" size={400} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-[10]">

        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--accent-primary) 100%)',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)',
            }}
          />

          {/* Timeline items */}
          <div className="space-y-16">
            {allExperiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Animated Timeline dot */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 rounded-full bg-accent-primary border-4 border-black -translate-x-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(59, 130, 246, 0.3)',
                      '0 0 15px rgba(59, 130, 246, 0.4)',
                      '0 0 0px rgba(59, 130, 246, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <ExperienceCard
                  experience={exp}
                  index={index}
                  isEven={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
