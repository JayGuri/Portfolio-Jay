'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/types';
import { MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isEven: boolean;
}

export function ExperienceCard({ experience, index, isEven }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'leadership':
        return 'border-accent-secondary text-accent-secondary';
      case 'work':
        return 'border-accent-primary text-accent-primary';
      case 'technical':
        return 'border-accent-spotify text-accent-spotify';
      default:
        return 'border-text-muted text-text-muted';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        'relative',
        'lg:flex lg:items-center',
        isEven ? 'lg:justify-start' : 'lg:justify-end'
      )}
    >
      <div className={cn('lg:w-1/2', isEven ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto')}>
        <Card className={cn('border-2', getTypeColor(experience.type))}>
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <CardTitle className="text-xl">{experience.title}</CardTitle>
            </div>
            <div className="text-lg font-semibold text-text-primary mb-2">
              {experience.organization}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {experience.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {experience.description.length > 0 && (
              <ul className="space-y-2 mb-4">
                {experience.description.map((desc, i) => (
                  <li key={i} className="text-text-secondary flex items-start gap-2">
                    <span className="text-accent-primary mt-1.5">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            )}
            {experience.degree && (
              <div className="text-text-secondary mb-2">
                <span className="font-medium">{experience.degree}</span>
                {experience.cgpa && (
                  <span className="ml-2">- CGPA: {experience.cgpa}</span>
                )}
                {experience.percentage && (
                  <span className="ml-2">- {experience.percentage}</span>
                )}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

