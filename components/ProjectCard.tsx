'use client';

import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      className="w-full h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full"
      >
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border-2 border-white/10 hover:border-[#DA020E] transition-all duration-300 h-full"
        >
          {/* Project thumbnail */}
          <div className="relative h-64 overflow-hidden">
            <motion.div
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full bg-gradient-to-br from-[#DA020E]/30 to-[#FFD700]/30 flex items-center justify-center"
            >
              <div className="text-6xl font-black text-white/20">{project.title[0]}</div>
            </motion.div>

            {/* Gradient overlay */}
            <motion.div
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
            />

            {/* Hover buttons */}
            <motion.div
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center gap-4"
            >
              <Button
                size="sm"
                onClick={() => onViewDetails(project)}
                className="bg-[#DA020E] hover:bg-[#A0000A] text-white border-2 border-[#DA020E] shadow-[0_0_20px_rgba(218,2,14,0.5)]"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
              {project.github && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(project.github!, '_blank')}
                  className="bg-transparent border-2 border-white/20 text-white hover:border-[#FFD700] hover:text-[#FFD700]"
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
                  className="bg-transparent border-2 border-white/20 text-white hover:border-[#FFD700] hover:text-[#FFD700]"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
            </motion.div>
          </div>

          {/* Project info */}
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <Badge variant="outline">{project.category}</Badge>
            </div>
            <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} className="text-xs bg-[#DA020E]/20 text-[#DA020E] border border-[#DA020E]">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
            <div className="text-sm text-white/60">{project.date}</div>
          </CardContent>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#DA020E]/30 to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
