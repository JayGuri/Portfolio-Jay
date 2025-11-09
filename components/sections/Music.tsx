'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music2, ExternalLink } from 'lucide-react';

export function Music() {
  return (
    <section id="music" className="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-black text-text-primary mb-4">
            Music
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            What I'm listening to
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal delay={0.2}>
            <Card className="bg-background-secondary border-white/10 hover:border-accent-spotify/30 transition-colors">
              <CardContent className="p-8 text-center">
                <Music2 className="h-16 w-16 mx-auto mb-6 text-accent-spotify" />
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Spotify Integration
                </h3>
                <p className="text-text-secondary mb-6">
                  Connect your Spotify account to show your currently playing track or favorite
                  music here.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://open.spotify.com', '_blank')}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Spotify
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
