'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { MorphingBlob } from '@/components/animations/MorphingBlob';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { photographyImages } from '@/lib/data';
import { ExternalLink, X } from 'lucide-react';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="photography" className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden bg-black">
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

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-1/4 right-1/4">
          <MorphingBlob color="#FFD700" size={500} />
        </div>
        <div className="absolute bottom-1/4 left-1/4">
          <MorphingBlob color="#DA020E" size={450} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-[10]">
        <ScrollReveal>
          <motion.h2
            className="text-7xl md:text-9xl font-black text-white mb-8"
            style={{
              textShadow: '0 0 80px rgba(218, 2, 14, 0.5)',
            }}
          >
            PHOTOGRAPHY
          </motion.h2>
          <p className="text-2xl text-white/80 mb-12">
            Capturing moments through my lens
          </p>
        </ScrollReveal>

        {/* Gallery grid */}
        <StaggerChildren stagger={0.1} selector=".photo-item">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {photographyImages.map((photo) => (
              <motion.div
                key={photo.id}
                className="photo-item"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 cursor-pointer group hover:border-[#DA020E] transition-all duration-300"
                  onClick={() => setSelectedImage(photo.id)}
                  whileHover={{
                    boxShadow: '0 0 40px rgba(218, 2, 14, 0.5)',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#DA020E]/30 to-[#FFD700]/30 flex items-center justify-center">
                    <motion.div
                      className="text-8xl font-black text-white/20"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: photo.id * 0.2,
                      }}
                    >
                      {photo.id}
                    </motion.div>
                  </div>
                  {/* Placeholder - replace with actual images */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/80 flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xl">Click to view</span>
                  </motion.div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FFD700]/30 to-transparent pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>

        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://instagram.com/jaymanishguri', '_blank')}
                className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black shadow-[0_0_40px_rgba(255,215,0,0.3)]"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Full Portfolio
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <AnimatePresence>
            {selectedImage !== null && (
              <DialogContent className="max-w-5xl p-0 bg-black border-2 border-[#DA020E]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative w-full aspect-video bg-gradient-to-br from-[#DA020E]/20 to-[#FFD700]/20 flex items-center justify-center"
                >
                  <div className="text-8xl font-black text-white/30">
                    {photographyImages.find((p) => p.id === selectedImage)?.alt || 'Image'}
                  </div>
                  {/* Placeholder - replace with actual image */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 text-white hover:bg-[#DA020E]"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </motion.div>
              </DialogContent>
            )}
          </AnimatePresence>
        </Dialog>
      </div>
    </section>
  );
}
