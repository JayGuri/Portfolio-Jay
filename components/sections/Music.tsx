'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MorphingBlob } from '@/components/animations/MorphingBlob';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music2, ExternalLink } from 'lucide-react';

const DarkVeil = dynamic(
  () => import('@/components/DarkVeil').then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Music() {
  return (
    <section id="music" className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden bg-black">
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
      <div className="absolute inset-0 overflow-hidden z-[1] opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <MorphingBlob color="#D4A574" size={600} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-[10]">
        <ScrollReveal>
          <motion.h2
            className="text-7xl md:text-9xl font-black text-white mb-8 text-center"
            style={{
              textShadow: '0 0 40px rgba(212, 165, 116, 0.2)',
            }}
          >
            MUSIC
          </motion.h2>
          <p className="text-2xl text-white/80 mb-12 text-center">
            What I'm listening to
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-black/40 backdrop-blur-sm border border-accent-secondary/40 hover:border-accent-primary/40 transition-all duration-300">
              <CardContent className="p-12 text-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Music2 className="h-24 w-24 mx-auto mb-8 text-accent-secondary" />
                </motion.div>
                <h3 className="text-3xl font-black text-white mb-6">
                  Spotify Integration
                </h3>
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  Connect your Spotify account to show your currently playing track or favorite
                  music here. Experience the rhythm that fuels my creativity.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('https://open.spotify.com', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Open Spotify
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
