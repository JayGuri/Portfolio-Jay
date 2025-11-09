'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerText } from '@/components/animations/StaggerText';
import { ParallaxSection } from '@/components/animations/ParallaxSection';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jay_Guri_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 bg-gradient-to-b from-background-primary to-background-secondary"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-5 gap-12 items-center">
        {/* Left side - Text content (60%) */}
        <div className="lg:col-span-3 space-y-8">
          <FadeIn delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
              <StaggerText text="Jay Guri" />
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <h2 className="text-2xl md:text-4xl font-semibold text-text-primary">
              Full-Stack Developer & Data Science Enthusiast
            </h2>
          </FadeIn>

          <FadeIn delay={0.7}>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
              Building intelligent, user-centric digital experiences with MERN
              stack and Machine Learning
            </p>
          </FadeIn>

          <FadeIn delay={0.9}>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToProjects} size="lg">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={downloadResume} variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Right side - Image (40%) */}
        <div className="lg:col-span-2 hidden lg:block">
          <ParallaxSection speed={0.3}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary opacity-30 blur-3xl" />
              </div>
              {/* Placeholder for profile image - replace with actual image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-text-muted">JG</div>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
}

