'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences, education } from '@/lib/data';

export function Experience() {
  const allExperiences = [...experiences, ...education];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            My professional journey and academic background
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {allExperiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-accent-primary border-4 border-background-primary -translate-x-1/2 z-10" />
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

