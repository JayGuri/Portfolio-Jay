export const colors = {
  // Base colors - Deep, organic backgrounds
  background: {
    primary: '#0a0a0a',
    secondary: '#141414',
    tertiary: '#1a1a1a',
    accent: '#0f0f0f',
  },
  // Text hierarchy - Clean and readable
  text: {
    primary: '#ffffff',
    secondary: '#e5e5e5',
    muted: '#999999',
    disabled: '#666666',
  },
  // Accent colors - Blue, black, and white theme
  accent: {
    // Primary blue
    primary: {
      DEFAULT: '#3B82F6', // Blue-500
      light: '#60A5FA', // Blue-400
      dark: '#2563EB', // Blue-600
      subtle: 'rgba(59, 130, 246, 0.2)',
    },
    // Secondary blue (lighter shade)
    secondary: {
      DEFAULT: '#60A5FA', // Blue-400
      light: '#93C5FD', // Blue-300
      dark: '#3B82F6', // Blue-500
      subtle: 'rgba(96, 165, 250, 0.2)',
    },
    // Tertiary blue (darker shade)
    tertiary: {
      DEFAULT: '#2563EB', // Blue-600
      light: '#3B82F6', // Blue-500
      dark: '#1D4ED8', // Blue-700
      subtle: 'rgba(37, 99, 235, 0.2)',
    },
  },
  // Functional colors - Blue, black, and white theme
  border: 'rgba(255, 255, 255, 0.08)',
  borderHover: 'rgba(59, 130, 246, 0.3)', // Blue with opacity
  glow: 'rgba(59, 130, 246, 0.15)', // Blue glow
  overlay: 'rgba(0, 0, 0, 0.7)',
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

