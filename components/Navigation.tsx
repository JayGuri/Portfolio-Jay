'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="group relative flex items-center"
                aria-label={`Navigate to ${item.label}`}
                suppressHydrationWarning
              >
                <motion.div
                  className={cn(
                    'w-3 h-3 rounded-full border-2 transition-colors',
                    activeSection === item.id
                      ? 'bg-[#DA020E] border-[#DA020E] shadow-[0_0_20px_rgba(218,2,14,0.8)]'
                      : 'bg-transparent border-white/30 group-hover:border-[#FFD700]'
                  )}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
                <span
                  className={cn(
                    'ml-4 text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap',
                    activeSection === item.id && 'opacity-100 text-[#FFD700]'
                  )}
                >
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-6 right-6 z-40 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-colors"
          aria-label="Toggle menu"
          suppressHydrationWarning
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-black/90 backdrop-blur-sm border-l border-white/10 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-6 mt-16">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        'text-left text-lg font-bold transition-colors',
                        activeSection === item.id
                          ? 'text-[#DA020E]'
                          : 'text-white/70 hover:text-[#FFD700]'
                      )}
                      suppressHydrationWarning
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

