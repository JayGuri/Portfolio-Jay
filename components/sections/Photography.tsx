'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { photographyImages } from '@/lib/data';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="photography" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Photography
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Capturing moments through my lens
          </p>
        </FadeIn>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {photographyImages.map((photo, index) => (
            <FadeIn key={photo.id} delay={index * 0.1}>
              <div
                className="relative aspect-square rounded-xl overflow-hidden border border-border cursor-pointer group"
                onClick={() => setSelectedImage(photo.id)}
              >
                <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-text-muted">{photo.id}</div>
                </div>
                {/* Placeholder - replace with actual images */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-text-primary font-medium">Click to view</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://instagram.com/jaymanishguri', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Portfolio
            </Button>
          </div>
        </FadeIn>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          {selectedImage !== null && (
            <DialogContent className="max-w-4xl p-0">
              <div className="relative w-full aspect-video bg-background-tertiary">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-text-muted">
                    {photographyImages.find((p) => p.id === selectedImage)?.alt || 'Image'}
                  </div>
                </div>
                {/* Placeholder - replace with actual image */}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}

