'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <ScrollReveal>
        <motion.h2
          className="text-5xl md:text-7xl font-black text-white mb-4"
          style={{
            textShadow: '0 0 40px rgba(201, 122, 95, 0.2)',
          }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/80">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
}

