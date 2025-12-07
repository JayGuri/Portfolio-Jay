import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { Photography } from '@/components/sections/Photography';

export const metadata: Metadata = {
  title: 'Photography | Jay Guri',
  description: 'Capturing moments through my lens',
};

export default function PhotographyPage() {
  return (
    <PageLayout
      title="PHOTOGRAPHY"
      subtitle="Capturing moments through my lens"
    >
      <Photography />
    </PageLayout>
  );
}

