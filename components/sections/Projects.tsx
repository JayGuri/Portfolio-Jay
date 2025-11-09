'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
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

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Data Science', 'Machine Learning', 'Web Development'];
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter || p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Projects
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Showcase of my recent work and contributions
          </p>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Project detail modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-text-secondary">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <Button
                      variant="default"
                      onClick={() => window.open(selectedProject.github!, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  )}
                  {selectedProject.liveDemo && (
                    <Button
                      variant="outline"
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

