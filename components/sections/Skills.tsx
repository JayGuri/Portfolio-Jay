'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { MorphingBlob } from '@/components/animations/MorphingBlob';
import { SkillCard } from '@/components/SkillCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const skillCategories = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'dataScience', label: 'Data Science' },
    { id: 'tools', label: 'Tools' },
    { id: 'softSkills', label: 'Soft Skills' },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
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
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-1/3 right-0">
          <MorphingBlob color="#FFD700" size={400} />
        </div>
        <div className="absolute bottom-1/3 left-0">
          <MorphingBlob color="#DA020E" size={350} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-[10]">
        <ScrollReveal>
          <motion.h2
            className="text-7xl md:text-9xl font-black text-white mb-8"
            style={{
              textShadow: '0 0 80px rgba(218, 2, 14, 0.5)',
            }}
          >
            SKILLS
          </motion.h2>
          <p className="text-2xl text-white/80 mb-12">
            Technologies and tools I work with
          </p>
        </ScrollReveal>

        <Tabs defaultValue="languages" className="w-full">
          <ScrollReveal delay={0.2}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-black/50 backdrop-blur-sm border-2 border-white/10">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-[#DA020E] data-[state=active]:text-white data-[state=active]:border-[#DA020E] border-2 border-transparent hover:border-[#FFD700] transition-all"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollReveal>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {category.id === 'softSkills' ? (
                <StaggerChildren stagger={0.1} selector=".skill-badge">
                  <div className="flex flex-wrap gap-4">
                    {skills.softSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="skill-badge"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          className="text-lg px-6 py-3 bg-[#DA020E]/20 text-[#DA020E] border-2 border-[#DA020E] hover:bg-[#DA020E] hover:text-white transition-all cursor-pointer"
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </StaggerChildren>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills[category.id as keyof typeof skills]?.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
