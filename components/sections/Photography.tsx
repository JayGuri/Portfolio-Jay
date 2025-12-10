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

const DomeGallery = dynamic(
  () => import('@/components/DomeGallery').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Photography() {
  // Convert photography images to DomeGallery format
  const galleryImages = photographyImages.map(photo => ({
    src: photo.src || `https://picsum.photos/seed/${photo.id}/800/600`,
    alt: photo.alt || `Photo ${photo.id}`
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
        {/* Dome Gallery */}
        <div style={{ width: '100%', height: '80vh', minHeight: '600px', position: 'relative', marginTop: '2rem' }}>
          <DomeGallery 
            images={galleryImages}
            fit={0.5}
            fitBasis="auto"
            minRadius={400}
            maxRadius={800}
            padFactor={0.25}
            overlayBlurColor="#060010"
            maxVerticalRotationDeg={5}
            dragSensitivity={20}
            enlargeTransitionMs={300}
            segments={35}
            dragDampening={2}
            openedImageWidth="600px"
            openedImageHeight="600px"
            imageBorderRadius="20px"
            openedImageBorderRadius="30px"
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
}
