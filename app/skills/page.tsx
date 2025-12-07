import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { Skills } from '@/components/sections/Skills';

export const metadata: Metadata = {
  title: 'Skills | Jay Guri',
  description: 'Technologies and tools I work with',
};

export default function SkillsPage() {
  return (
    <PageLayout
      title="SKILLS"
      subtitle="Technologies and tools I work with"
    >
      <Skills />
    </PageLayout>
  );
}

