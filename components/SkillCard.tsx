'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Skill } from '@/types';
import { getTechIcon } from '@/lib/techStackIcons';

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
        bar.style.boxShadow = `0 0 ${20 * glowIntensity}px rgba(59, 130, 246, ${glowIntensity})`;
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
      <Card className="h-full bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-accent-primary transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {(() => {
                const techIcon = getTechIcon(skill.name);
                if (techIcon?.icon) {
                  const IconComponent = techIcon.icon;
                  // Render the icon component if it exists
                  return (
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10">
                      {React.createElement(IconComponent, { className: 'w-6 h-6 text-white' })}
                    </div>
                  );
                }
                // Fallback: show a generic icon placeholder
                return (
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-6 h-6 rounded bg-accent-primary/30" />
                  </div>
                );
              })()}
              <span className="text-white font-bold text-lg">{skill.name}</span>
            </div>
            <motion.span
              className="text-accent-secondary text-sm font-bold"
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
              className="h-full rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary"
              style={{ width: 0 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
