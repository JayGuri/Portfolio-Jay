import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StaggeredMenu from '@/components/StaggeredMenu';
import { Footer } from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { navItems, socialLinks } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Jay Guri | Full-Stack Developer & Data Science Enthusiast',
  description:
    'Portfolio of Jay Guri - Full-Stack Developer specializing in MERN stack, Machine Learning, and Data Science. Currently Chairperson at DJS S4DS.',
  keywords: [
    'Full-Stack Developer',
    'Data Science',
    'MERN Stack',
    'Machine Learning',
    'React',
    'Next.js',
    'Mumbai',
  ],
  authors: [{ name: 'Jay Guri' }],
  creator: 'Jay Guri',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jayguri.com',
    title: 'Jay Guri | Full-Stack Developer',
    description:
      'Portfolio of Jay Guri - Full-Stack Developer & Data Science Enthusiast',
    siteName: 'Jay Guri Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jay Guri Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay Guri | Full-Stack Developer',
    description:
      'Portfolio of Jay Guri - Full-Stack Developer & Data Science Enthusiast',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = navItems.map(item => {
    // Map nav items to routes
    const routeMap: Record<string, string> = {
      'hero': '/',
      'about': '/#about',
      'skills': '/skills',
      'experience': '/experience',
      'projects': '/projects',
      'photography': '/photography',
      'music': '/music',
      'contact': '/contact',
    };
    
    return {
      label: item.label,
      ariaLabel: `Go to ${item.label} section`,
      link: routeMap[item.id] || `/${item.id}`
    };
  });

  const socialItems = [
    { label: 'LinkedIn', link: socialLinks.linkedin },
    { label: 'GitHub', link: socialLinks.github },
    { label: 'Instagram', link: socialLinks.instagram }
  ];

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <SmoothScroll />
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: 40 }}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={['#0a0a0a', '#141414']}
            accentColor="#C97A5F"
            isFixed={true}
            closeOnClickAway={true}
          />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
