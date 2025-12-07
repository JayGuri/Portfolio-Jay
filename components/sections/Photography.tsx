'use client';

import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { photographyImages } from '@/lib/photography';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

const CircularGallery = dynamic(
  () => import('@/components/CircularGallery').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Photography() {
  const galleryItems = photographyImages.map(photo => ({
    image: photo.src || `https://picsum.photos/seed/${photo.id}/800/600`,
    text: photo.alt || `Photo ${photo.id}`
  }));

  return (
    <section id="photography" className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden bg-black min-h-screen">
      {/* DarkVeil Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <DarkVeil 
          hueShift={15}
          noiseIntensity={0.02}
          scanlineIntensity={0.05}
          speed={0.3}
          scanlineFrequency={0.5}
          warpAmount={0.3}
          resolutionScale={1}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-[10] h-full">
        {/* Circular Gallery */}
        <div style={{ height: '600px', position: 'relative', marginTop: '2rem' }}>
          <CircularGallery 
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
}
