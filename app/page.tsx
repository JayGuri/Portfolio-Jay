'use client';

import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Photography } from '@/components/sections/Photography';
import { Music } from '@/components/sections/Music';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if loading screen should be shown (only on first visit)
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasVisited', 'true');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={isLoading ? 'hidden' : ''}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Photography />
        <Music />
        <Contact />
      </div>
    </>
  );
}

