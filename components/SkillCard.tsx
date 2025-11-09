'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

export function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-text-primary font-medium">{skill.name}</span>
            <span className="text-text-secondary text-sm">{skill.proficiency}%</span>
          </div>
          <div className="w-full h-2 bg-background-tertiary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
              transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

