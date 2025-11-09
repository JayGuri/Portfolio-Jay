'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  delay?: number;
}

export function ProjectCard({ project, onViewDetails, delay = 0 }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden group cursor-pointer">
        <div className="relative w-full h-48 overflow-hidden bg-background-tertiary">
          <motion.div
            className="w-full h-full"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
              <div className="text-4xl font-bold text-text-muted">{project.title[0]}</div>
            </div>
            {/* Placeholder - replace with actual image */}
          </motion.div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <Button
              size="sm"
              onClick={() => onViewDetails(project)}
              variant="default"
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(project.github!, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            )}
            {project.liveDemo && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(project.liveDemo!, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
            <Badge variant="outline">{project.category}</Badge>
          </div>
          <p className="text-text-secondary mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          <div className="text-sm text-text-muted">{project.date}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

