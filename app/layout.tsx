import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

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
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
