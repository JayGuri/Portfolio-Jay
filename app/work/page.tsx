import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';

export const metadata: Metadata = {
  title: 'Work | Jay Guri',
  description: 'My skills, experience, and projects',
};

export default function WorkPage() {
  return (
    <PageLayout
      title="WORK"
      subtitle="My skills, experience, and projects"
      submenuItems={[
        { id: 'skills', label: 'Skills', href: '/work#skills' },
        { id: 'experience', label: 'Experience', href: '/work#experience' },
        { id: 'projects', label: 'Projects', href: '/work#projects' },
      ]}
    >
      <div>
        <div id="skills" className="scroll-mt-32">
          <SectionHeader title="SKILLS" subtitle="Technologies and tools I work with" />
          <Skills />
        </div>
        <div id="experience" className="scroll-mt-32">
          <SectionHeader title="EXPERIENCE" subtitle="My professional journey and academic background" />
          <Experience />
        </div>
        <div id="projects" className="scroll-mt-32">
          <SectionHeader title="PROJECTS" subtitle="My portfolio of projects and work" />
          <Projects />
        </div>
      </div>
    </PageLayout>
  );
}

