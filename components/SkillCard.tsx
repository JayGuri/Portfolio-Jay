'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Skill } from '@/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

export function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const bar = barRef.current;
    if (!card || !bar) return;

    // Card animation
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
        rotationX: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      }
    );

    // Progress bar animation with glow effect
    gsap.to(bar, {
      width: `${skill.proficiency}%`,
      duration: 1.5,
      delay: delay + 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
      },
      onUpdate: function() {
        const progress = this.progress();
        const glowIntensity = progress * 0.5;
        bar.style.boxShadow = `0 0 ${20 * glowIntensity}px rgba(218, 2, 14, ${glowIntensity})`;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [skill.proficiency, delay]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-[#DA020E] transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold text-lg">{skill.name}</span>
            <motion.span
              className="text-[#FFD700] text-sm font-bold"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: delay,
              }}
            >
              {skill.proficiency}%
            </motion.span>
          </div>
          <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden border border-white/10">
            <motion.div
              ref={barRef}
              className="h-full rounded-full bg-gradient-to-r from-[#DA020E] via-[#FFD700] to-[#DA020E]"
              style={{ width: 0 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
