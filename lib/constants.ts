export const colors = {
  // Base colors - Deeper, more professional
  background: {
    primary: '#0a0a0a',
    secondary: '#141414',
    tertiary: '#1a1a1a',
    accent: '#0f0f0f',
  },
  // Text hierarchy - High contrast
  text: {
    primary: '#ffffff',
    secondary: '#e0e0e0',
    muted: '#a0a0a0',
    disabled: '#666666',
  },
  // Accent colors with variants
  accent: {
    red: {
      DEFAULT: '#DA291C',
      light: '#FF4136',
      dark: '#B22222',
    },
    gold: {
      DEFAULT: '#FEBE10',
      light: '#FFD700',
      dark: '#DAA520',
    },
    spotify: '#1DB954',
  },
  // Functional colors
  border: 'rgba(255, 255, 255, 0.1)',
  glow: 'rgba(218, 41, 28, 0.4)',
  overlay: 'rgba(0, 0, 0, 0.8)',
} as const;

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'photography', label: 'Photography' },
  { id: 'music', label: 'Music' },
  { id: 'contact', label: 'Contact' },
] as const;

export const socialLinks = {
  email: 'jaymanishguri@gmail.com',
  linkedin: 'https://linkedin.com/in/jaymanishguri',
  github: 'https://github.com/jaymanishguri',
  instagram: 'https://instagram.com/jaymanishguri',
  phone: '+91 8879854245',
  location: 'Mumbai, India',
} as const;

