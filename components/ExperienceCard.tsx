'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/types';
import { MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isEven: boolean;
}

export function ExperienceCard({ experience, index, isEven }: ExperienceCardProps) {
  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'leadership':
        return {
          border: 'border-accent-secondary',
          text: 'text-accent-secondary',
          bg: 'bg-accent-secondary/10',
        };
      case 'work':
        return {
          border: 'border-accent-primary',
          text: 'text-accent-primary',
          bg: 'bg-accent-primary/10',
        };
      case 'technical':
        return {
          border: 'border-accent-secondary',
          text: 'text-accent-secondary',
          bg: 'bg-accent-secondary/10',
        };
      default:
        return {
          border: 'border-white/20',
          text: 'text-white/60',
          bg: 'bg-white/5',
        };
    }
  };

  const colors = getTypeColor(experience.type);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={cn(
          'relative',
          'lg:flex lg:items-center',
          isEven ? 'lg:justify-start' : 'lg:justify-end'
        )}
      >
        <div className={cn('lg:w-1/2', isEven ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto')}>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className={cn(
                'border-2 bg-black/50 backdrop-blur-sm',
                colors.border,
                'hover:shadow-[0_0_40px_rgba(201,122,95,0.3)] transition-all duration-300'
              )}
            >
              <CardHeader className={colors.bg}>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className={cn('text-2xl font-black', colors.text)}>
                    {experience.title}
                  </CardTitle>
                </div>
                <div className="text-xl font-bold text-white mb-3">
                  {experience.organization}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent-secondary" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent-primary" />
                    {experience.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {experience.description.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {experience.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-white/90 flex items-start gap-3"
                      >
                        <span className={cn('text-xl mt-1', colors.text)}>▸</span>
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
                {experience.degree && (
                  <div className="text-white/80 mb-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="font-bold text-accent-secondary">{experience.degree}</span>
                    {experience.cgpa && (
                      <span className="ml-2 text-accent-primary">- CGPA: {experience.cgpa}</span>
                    )}
                    {experience.percentage && (
                      <span className="ml-2 text-accent-secondary">- {experience.percentage}</span>
                    )}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-accent-primary/20 text-accent-primary border border-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </ScrollReveal>
  );
}
