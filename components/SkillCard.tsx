'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      }
    );

    // Progress bar animation
    gsap.to(bar, {
      width: `${skill.proficiency}%`,
      duration: 1.5,
      delay: delay + 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [skill.proficiency, delay]);

  return (
    <Card ref={cardRef} className="h-full border-white/10 hover:border-accent-red/30 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-text-primary font-semibold text-lg">{skill.name}</span>
          <span className="text-text-secondary text-sm font-medium">{skill.proficiency}%</span>
        </div>
        <div className="w-full h-2 bg-background-tertiary rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-accent-red to-accent-gold rounded-full"
            style={{ width: 0 }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
