import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StaggeredMenu from '@/components/StaggeredMenu';
import { Footer } from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import ClickSpark from '@/components/ClickSpark';
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
  // Simplified navigation structure
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Work', ariaLabel: 'Go to work page', link: '/work' },
    { label: 'Creative', ariaLabel: 'Go to creative page', link: '/creative' },
    { label: 'Contact', ariaLabel: 'Go to contact page', link: '/contact' },
  ];

  const socialItems = [
    { label: 'LinkedIn', link: socialLinks.linkedin },
    { label: 'GitHub', link: socialLinks.github },
    { label: 'Instagram', link: socialLinks.instagram }
  ];

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <ClickSpark
          sparkColor="#3B82F6"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <SmoothScroll />
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
            accentColor="#3B82F6"
            isFixed={true}
            closeOnClickAway={true}
          />
          <main>{children}</main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
