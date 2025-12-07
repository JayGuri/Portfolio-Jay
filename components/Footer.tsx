'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/constants';
import { Linkedin, Github, Instagram, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-white/10 bg-black py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <motion.p
              className="text-white/80 text-base mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              © 2025 Jay Guri. All rights reserved.
            </motion.p>
            <motion.p
              className="text-white/60 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Designed and developed with{' '}
              <span className="text-white">❤️</span> using Next.js, TypeScript, and TailwindCSS
            </motion.p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
              { icon: Github, link: socialLinks.github, label: 'GitHub' },
              { icon: Instagram, link: socialLinks.instagram, label: 'Instagram' },
              { icon: Mail, link: `mailto:${socialLinks.email}`, label: 'Email' },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(social.link, '_blank')}
                  aria-label={social.label}
                  suppressHydrationWarning
                  className="hover:bg-white/20 hover:text-white text-white/70 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                aria-label="Back to top"
                suppressHydrationWarning
                className="hover:bg-white/20 hover:text-white text-white/70 transition-colors"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
