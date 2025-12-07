'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MorphingBlob } from '@/components/animations/MorphingBlob';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { stats } from '@/lib/data';
import { GraduationCap, Code, Users, Layers } from 'lucide-react';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  Code,
  Users,
  Layers,
};

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jay_Guri_Resume.pdf';
    link.click();
  };

  return (
    <section
      ref={sectionRef}
      id="about"
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
        <div className="absolute top-0 right-0">
          <MorphingBlob color="#DA020E" size={500} />
        </div>
        <div className="absolute bottom-0 left-0">
          <MorphingBlob color="#FFD700" size={450} />
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
            ABOUT
          </motion.h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl text-white/90 leading-relaxed">
              I'm <span className="text-[#DA020E] font-bold">Jay Guri</span>, a third-year Computer Science (Data Science) student
              at Dwarkadas J. Sanghvi College of Engineering, Mumbai, with a CGPA
              of <span className="text-[#FFD700] font-bold">9.56</span>.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              As the <span className="text-[#DA020E] font-bold">Chairperson of DJS S4DS</span>, I lead a multidisciplinary team
              driving innovation in AI, machine learning, and web development.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              With hands-on experience as a Full-Stack Developer Intern at
              Realatte Ventures, I've worked on real-estate platforms using
              React, Node.js, and TailwindCSS, optimizing performance and
              building production-grade features.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={downloadResume}
                  size="lg"
                  className="bg-[#DA020E] hover:bg-[#A0000A] text-white border-2 border-[#DA020E] shadow-[0_0_40px_rgba(218,2,14,0.5)]"
                >
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                >
                  Let's Connect
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || GraduationCap;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Card className="bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-[#DA020E] transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <Icon className="h-12 w-12 mx-auto mb-4 text-[#FFD700]" />
                      </motion.div>
                      <motion.div
                        className="text-5xl font-black mb-2"
                        style={{
                          background: 'linear-gradient(135deg, #DA020E 0%, #FFD700 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
