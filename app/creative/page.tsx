import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { Photography } from '@/components/sections/Photography';
import { Music } from '@/components/sections/Music';

export const metadata: Metadata = {
  title: 'Creative | Jay Guri',
  description: 'My photography and music',
};

export default function CreativePage() {
  return (
    <PageLayout
      title="CREATIVE"
      subtitle="My photography and music"
      submenuItems={[
        { id: 'photography', label: 'Photography', href: '/creative#photography' },
        { id: 'music', label: 'Music', href: '/creative#music' },
      ]}
    >
      <div>
        <div id="photography" className="scroll-mt-32">
          <SectionHeader title="PHOTOGRAPHY" subtitle="Capturing moments through my lens" />
          <Photography />
        </div>
        <div id="music" className="scroll-mt-32">
          <SectionHeader title="MUSIC" subtitle="What I'm listening to" />
          <Music />
        </div>
      </div>
    </PageLayout>
  );
}

