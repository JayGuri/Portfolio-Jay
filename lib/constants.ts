export const colors = {
  background: {
    primary: '#0f0f0f',
    secondary: '#1a1a1a',
    tertiary: '#242424',
  },
  text: {
    primary: '#f5f5f5',
    secondary: '#a0a0a0',
    muted: '#6b6b6b',
  },
  accent: {
    primary: '#DA291C',
    secondary: '#FEBE10',
    spotify: '#1DB954',
  },
  border: '#2a2a2a',
  gray: {
    100: '#424242',
    200: '#555555',
  },
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

