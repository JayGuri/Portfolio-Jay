import { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { Music } from '@/components/sections/Music';

export const metadata: Metadata = {
  title: 'Music | Jay Guri',
  description: 'My music and playlists',
};

export default function MusicPage() {
  return (
    <PageLayout
      title="MUSIC"
      subtitle="My music and playlists"
    >
      <Music />
    </PageLayout>
  );
}

