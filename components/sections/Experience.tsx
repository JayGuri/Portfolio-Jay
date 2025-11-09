'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences, education } from '@/lib/data';

export function Experience() {
  const allExperiences = [...experiences, ...education];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            My professional journey and academic background
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-red via-accent-gold to-accent-red -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {allExperiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-accent-red border-4 border-background-primary -translate-x-1/2 z-10 shadow-lg shadow-accent-red/50" />
                <ExperienceCard
                  experience={exp}
                  index={index}
                  isEven={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
