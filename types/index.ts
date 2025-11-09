export interface Skill {
  name: string;
  proficiency: number;
  icon?: string;
}

export interface Experience {
  id: number;
  type: 'leadership' | 'work' | 'technical' | 'education';
  title: string;
  organization: string;
  duration: string;
  location: string;
  description: string[];
  tags: string[];
  cgpa?: string;
  percentage?: string;
  degree?: string;
  institution?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  date: string;
  category: string;
  features: string[];
  github: string | null;
  liveDemo: string | null;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category?: 'landscapes' | 'nature' | 'macro';
  caption?: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

