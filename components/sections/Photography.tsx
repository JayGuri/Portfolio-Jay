'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { photographyImages } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="photography" className="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-4">
            Photography
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Capturing moments through my lens
          </p>
        </ScrollReveal>

        {/* Gallery grid */}
        <StaggerChildren stagger={0.1} selector=".photo-item">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {photographyImages.map((photo) => (
              <motion.div
                key={photo.id}
                className="photo-item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer group hover:border-accent-red/30 transition-colors"
                  onClick={() => setSelectedImage(photo.id)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-accent-red/20 to-accent-gold/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-text-muted">{photo.id}</div>
                  </div>
                  {/* Placeholder - replace with actual images */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <span className="text-text-primary font-semibold">Click to view</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>

        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://instagram.com/jaymanishguri', '_blank')}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Portfolio
            </Button>
          </div>
        </ScrollReveal>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          {selectedImage !== null && (
            <DialogContent className="max-w-4xl p-0 bg-background-secondary border-white/10">
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
