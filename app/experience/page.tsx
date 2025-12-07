import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { Experience } from '@/components/sections/Experience';

export const metadata: Metadata = {
  title: 'Experience | Jay Guri',
  description: 'My professional journey and academic background',
};

export default function ExperiencePage() {
  return (
    <PageLayout
      title="EXPERIENCE"
      subtitle="My professional journey and academic background"
    >
      <Experience />
    </PageLayout>
  );
}

