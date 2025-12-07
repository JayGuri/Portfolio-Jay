import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { Projects } from '@/components/sections/Projects';

export const metadata: Metadata = {
  title: 'Projects | Jay Guri',
  description: 'My portfolio of projects and work',
};

export default function ProjectsPage() {
  return (
    <PageLayout
      title="PROJECTS"
      subtitle="My portfolio of projects and work"
    >
      <Projects />
    </PageLayout>
  );
}

