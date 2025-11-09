'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SkillCard } from '@/components/SkillCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';

export function Skills() {
  const skillCategories = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'dataScience', label: 'Data Science' },
    { id: 'tools', label: 'Tools' },
    { id: 'softSkills', label: 'Soft Skills' },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Skills
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Technologies and tools I work with
          </p>
        </FadeIn>

        <Tabs defaultValue="languages" className="w-full">
          <FadeIn delay={0.2}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </FadeIn>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {category.id === 'softSkills' ? (
                <div className="flex flex-wrap gap-3">
                  {skills.softSkills.map((skill, index) => (
                    <FadeIn key={skill.name} delay={index * 0.1}>
                      <Badge variant="outline" className="text-base px-4 py-2">
                        {skill.name}
                      </Badge>
                    </FadeIn>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills[category.id as keyof typeof skills]?.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

