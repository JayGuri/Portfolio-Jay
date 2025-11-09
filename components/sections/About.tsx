'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { stats } from '@/lib/data';
import { GraduationCap, Code, Users, Layers } from 'lucide-react';
import Image from 'next/image';

const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap,
  Code,
  Users,
  Layers,
};

export function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="about" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About Me
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Photo */}
          <FadeIn delay={0.2}>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-text-muted">JG</div>
              </div>
              {/* Placeholder - replace with actual image */}
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="space-y-6">
            <FadeIn delay={0.3}>
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm Jay Guri, a third-year Computer Science (Data Science) student
                at Dwarkadas J. Sanghvi College of Engineering, Mumbai, with a CGPA
                of 9.56. As the Chairperson of DJS S4DS (Society for Data Science),
                I lead a multidisciplinary team driving innovation in AI, machine
                learning, and web development.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-text-secondary leading-relaxed">
                With hands-on experience as a Full-Stack Developer Intern at
                Realatte Ventures, I've worked on real-estate platforms using
                React, Node.js, and TailwindCSS, optimizing performance and
                building production-grade features. I'm passionate about creating
                intelligent, user-centric digital experiences that solve
                real-world problems.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-lg text-text-secondary leading-relaxed">
                Beyond coding, I'm an avid nature photographer, capturing
                landscapes and moments through my lens. I also enjoy exploring
                music and staying updated with the latest tech trends.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={downloadResume} size="lg">
                  Download Resume
                </Button>
                <Button onClick={scrollToContact} variant="outline" size="lg">
                  Let's Connect
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || GraduationCap;
            return (
              <FadeIn key={stat.label} delay={0.2 + index * 0.1}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-4 text-accent-primary" />
                    <div className="text-3xl font-bold text-text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

