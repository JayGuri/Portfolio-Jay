'use client';

import { ReactNode } from 'react';
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
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
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

