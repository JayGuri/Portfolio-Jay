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
  // Accent colors - Subtle, organic tones that complement DarkVeil shader
  accent: {
    // Warm, muted orange-red (subtle)
    primary: {
      DEFAULT: '#C97A5F',
      light: '#D99A7F',
      dark: '#A85A3F',
      subtle: 'rgba(201, 122, 95, 0.2)',
    },
    // Soft golden amber (subtle)
    secondary: {
      DEFAULT: '#D4A574',
      light: '#E4B584',
      dark: '#B49564',
      subtle: 'rgba(212, 165, 116, 0.2)',
    },
    // Deep purple-magenta (for variety)
    tertiary: {
      DEFAULT: '#8B6F9E',
      light: '#9B7FAE',
      dark: '#7B5F8E',
      subtle: 'rgba(139, 111, 158, 0.2)',
    },
  },
  // Functional colors - Subtle and professional
  border: 'rgba(255, 255, 255, 0.08)',
  borderHover: 'rgba(255, 255, 255, 0.15)',
  glow: 'rgba(201, 122, 95, 0.15)',
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

