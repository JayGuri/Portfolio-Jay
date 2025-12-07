'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  submenuItems?: Array<{ id: string; label: string; href: string }>;
}

export function PageLayout({ children, title, subtitle, submenuItems }: PageLayoutProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (!submenuItems || submenuItems.length === 0) return;

    const handleScroll = () => {
      const sections = submenuItems.map(item => {
        const hash = item.href.split('#')[1];
        return hash ? document.getElementById(hash) : null;
      }).filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [submenuItems]);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-20 md:py-32 px-6 md:px-8 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/80">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Submenu Navigation */}
        {submenuItems && submenuItems.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto mt-8"
          >
            <div className="flex flex-wrap gap-4">
              {submenuItems.map((item) => {
                const isHashLink = item.href.includes('#');
                const hash = isHashLink ? item.href.split('#')[1] : '';
                const isActive = activeSection === hash;
                
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (isHashLink) {
                    e.preventDefault();
                    const element = document.getElementById(hash);
                    if (element) {
                      const offset = 150;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                      });
                      setActiveSection(hash);
                    }
                  }
                };
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={handleClick}
                    className={cn(
                      'px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/20'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </div>

      {/* Page Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

