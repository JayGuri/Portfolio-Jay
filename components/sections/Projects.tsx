'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ProjectCard } from '@/components/ProjectCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Data Science', 'Machine Learning', 'Web Development'];
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter || p.tags.includes(filter));

  return (
    <section id="projects" className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden bg-black">
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

      <div className="max-w-7xl mx-auto relative z-[10]">
        <ScrollReveal>
          <motion.h2
            className="text-7xl md:text-9xl font-black text-white mb-8"
            style={{
              textShadow: '0 0 40px rgba(212, 165, 116, 0.2)',
            }}
          >
            PROJECTS
          </motion.h2>
        </ScrollReveal>

        {/* Filter buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setFilter(category)}
                  size="lg"
                  className={
                    filter === category
                      ? 'bg-accent-primary hover:bg-accent-primary-dark text-white border border-accent-primary/40'
                      : 'bg-transparent border border-white/8 text-white hover:border-accent-secondary/40 hover:text-accent-secondary'
                  }
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
                delay={index * 0.1}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Project detail modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-accent-primary/40">
              <DialogHeader>
                <DialogTitle className="text-4xl font-black text-white mb-4">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-white/80">
                  {selectedProject.longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-2xl font-bold text-accent-secondary mb-3">Features</h4>
                  <ul className="space-y-2 text-white/90">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-primary mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-accent-secondary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-accent-primary/20 text-accent-primary border border-accent-primary/40"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <Button
                      onClick={() => window.open(selectedProject.github!, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  )}
                  {selectedProject.liveDemo && (
                    <Button
                      variant="secondary"
                      onClick={() => window.open(selectedProject.liveDemo!, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
