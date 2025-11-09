'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
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
    <section id="skills" className="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-4">
            Skills
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Technologies and tools I work with
          </p>
        </ScrollReveal>

        <Tabs defaultValue="languages" className="w-full">
          <ScrollReveal delay={0.2}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-background-secondary border border-white/10">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-accent-red data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollReveal>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {category.id === 'softSkills' ? (
                <div className="flex flex-wrap gap-3">
                  {skills.softSkills.map((skill, index) => (
                    <ScrollReveal key={skill.name} delay={index * 0.1}>
                      <Badge 
                        variant="outline" 
                        className="text-base px-4 py-2 border-accent-red/30 hover:border-accent-red/50 hover:bg-accent-red/10 transition-colors"
                      >
                        {skill.name}
                      </Badge>
                    </ScrollReveal>
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
