'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music2, ExternalLink } from 'lucide-react';

export function Music() {
  return (
    <section id="music" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Music
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            What I'm listening to
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn delay={0.2}>
            <Card>
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
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Spotify
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

