'use client';

import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/constants';
import { Linkedin, Github, Instagram, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              © 2025 Jay Guri. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-2">
              Designed and developed with ❤️ using Next.js, TypeScript, and TailwindCSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(socialLinks.linkedin, '_blank')}
              aria-label="LinkedIn"
              suppressHydrationWarning
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(socialLinks.github, '_blank')}
              aria-label="GitHub"
              suppressHydrationWarning
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(socialLinks.instagram, '_blank')}
              aria-label="Instagram"
              suppressHydrationWarning
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(`mailto:${socialLinks.email}`, '_blank')}
              aria-label="Email"
              suppressHydrationWarning
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              aria-label="Back to top"
              suppressHydrationWarning
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

