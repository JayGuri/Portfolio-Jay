'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MorphingBlob } from '@/components/animations/MorphingBlob';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences, education } from '@/lib/data';

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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4">
          <MorphingBlob color="#DA020E" size={450} />
        </div>
        <div className="absolute bottom-0 right-1/4">
          <MorphingBlob color="#FFD700" size={400} />
        </div>
      </div>

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#DA020E 1px, transparent 1px),
            linear-gradient(90deg, #DA020E 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <motion.h2
            className="text-7xl md:text-9xl font-black text-white mb-8"
            style={{
              textShadow: '0 0 80px rgba(255, 215, 0, 0.5)',
            }}
          >
            EXPERIENCE
          </motion.h2>
          <p className="text-2xl text-white/80 mb-12">
            My professional journey and academic background
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(180deg, #DA020E 0%, #FFD700 50%, #DA020E 100%)',
              boxShadow: '0 0 20px rgba(218, 2, 14, 0.5)',
            }}
          />

          {/* Timeline items */}
          <div className="space-y-16">
            {allExperiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Animated Timeline dot */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 rounded-full bg-[#DA020E] border-4 border-black -translate-x-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(218, 2, 14, 0.5)',
                      '0 0 20px rgba(218, 2, 14, 0.8)',
                      '0 0 0px rgba(218, 2, 14, 0.5)',
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
