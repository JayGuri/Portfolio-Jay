import { Experience, Project, Skill, Stat } from '@/types';

export const stats: Stat[] = [
  { label: 'CGPA', value: '9.56', icon: 'GraduationCap' },
  { label: 'Projects Completed', value: '10+', icon: 'Code' },
  { label: 'Leadership Roles', value: '3', icon: 'Users' },
  { label: 'Tech Stack Skills', value: '15+', icon: 'Layers' },
];

export const skills: Record<string, Skill[]> = {
  languages: [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'TypeScript', proficiency: 85 },
    { name: 'Python', proficiency: 90 },
    { name: 'Java', proficiency: 80 },
    { name: 'C/C++', proficiency: 75 },
  ],
  frameworks: [
    { name: 'React', proficiency: 95 },
    { name: 'Next.js', proficiency: 90 },
    { name: 'Node.js', proficiency: 90 },
    { name: 'Express', proficiency: 85 },
    { name: 'Flask', proficiency: 75 },
  ],
  dataScience: [
    { name: 'Pandas', proficiency: 90 },
    { name: 'Scikit-Learn', proficiency: 85 },
    { name: 'Matplotlib', proficiency: 80 },
    { name: 'Seaborn', proficiency: 80 },
    { name: 'PowerBI', proficiency: 70 },
  ],
  tools: [
    { name: 'Git/GitHub', proficiency: 95 },
    { name: 'Figma', proficiency: 85 },
    { name: 'VS Code', proficiency: 95 },
    { name: 'MongoDB', proficiency: 85 },
    { name: 'TailwindCSS', proficiency: 90 },
  ],
  softSkills: [
    { name: 'Leadership', proficiency: 95 },
    { name: 'Communication', proficiency: 90 },
    { name: 'Teamwork', proficiency: 95 },
    { name: 'Problem-Solving', proficiency: 90 },
    { name: 'Adaptability', proficiency: 85 },
    { name: 'Event Management', proficiency: 90 },
  ],
};

export const experiences: Experience[] = [
  {
    id: 1,
    type: 'leadership',
    title: 'Chairperson',
    organization: 'DJS S4DS (Society for Data Science)',
    duration: 'Aug 2025 – Present',
    location: 'Mumbai, India',
    description: [
      'Lead a multidisciplinary team to drive innovation in data science and AI initiatives',
      'Define technical direction and foster collaboration across sub-teams',
      'Focus on machine learning, web development, and data-driven solutions',
    ],
    tags: ['Leadership', 'Data Science', 'Full-Stack', 'ML', 'Event-Tech'],
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Web Developer Intern',
    organization: 'Realatte Ventures Ltd',
    duration: 'Jul 2025 – Sep 2025',
    location: 'Mumbai',
    description: [
      'Developed responsive web applications using React, Node.js, and TailwindCSS',
      'Collaborated with backend and design teams on production-grade features',
      'Improved page load efficiency by 20% through component refactoring',
    ],
    tags: ['React', 'Node.js', 'TailwindCSS', 'Performance'],
  },
  {
    id: 3,
    type: 'leadership',
    title: 'Vice President',
    organization: 'DJS MUNSOC',
    duration: 'Feb 2025 – Present',
    location: 'Mumbai',
    description: [
      'Oversaw planning and execution of flagship events (DJS Youth Summit 2.0, DJMUN 25)',
      'Managed logistics, finances, and inter-departmental coordination',
      'Provided mentorship to organizing committees',
    ],
    tags: ['Event Management', 'Leadership', 'Coordination'],
  },
  {
    id: 4,
    type: 'technical',
    title: 'Technical Co-Committee Member',
    organization: 'DJS S4DS',
    duration: 'Aug 2024 – Aug 2025',
    location: 'Mumbai',
    description: [
      'Created official websites for DataHack 3.0 and Xtract 3.0',
      'Ensured responsive design and robust performance',
      'Streamlined user interaction and event communications',
    ],
    tags: ['Web Development', 'React', 'Event Tech'],
  },
];

export const education: Experience[] = [
  {
    id: 1,
    type: 'education',
    institution: 'Dwarkadas J. Sanghvi College of Engineering',
    degree: 'B.Tech in Computer Science and Engineering (Data Science)',
    duration: '2023 – Present',
    cgpa: '9.56 (Till 3rd Sem)',
    location: 'Mumbai',
    description: [],
    tags: [],
  },
  {
    id: 2,
    type: 'education',
    institution: 'Hiranandani Foundation School, Powai',
    degree: 'ICSE',
    duration: '2011 – 2021',
    percentage: '98.56%',
    location: 'Mumbai',
    description: [],
    tags: [],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Puja Travels',
    description: 'AI-driven travel planning platform with personalized itineraries',
    longDescription: `Puja Travels is an AI-powered travel platform that generates personalized itineraries by analyzing user preferences, budget, and interests. Features include a dynamic 3D globe for interactive destination exploration, chat-based itinerary system for real-time updates, and community collaboration for trip planning.`,
    image: '/images/projects/puja-travels.png',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    date: 'Apr 2025',
    category: 'Full-Stack',
    features: [
      'AI-powered itinerary generation',
      'Interactive 3D globe exploration',
      'Real-time chat-based updates',
      'Community collaboration features',
    ],
    github: 'https://github.com/jaymanishguri/puja-travels',
    liveDemo: 'https://puja-travels.vercel.app',
  },
  {
    id: 2,
    title: 'QuizAble',
    description: 'Adaptive learning platform with AI-powered personalization',
    longDescription: `QuizAble is an adaptive learning platform that personalizes user experience based on real-time performance. The system dynamically adjusts question difficulty, provides instant feedback, and tracks progress over time for targeted knowledge retention.`,
    image: '/images/projects/quizable.png',
    tags: ['React.js', 'Python', 'Flask', 'Scikit-learn'],
    date: 'Jan 2025',
    category: 'Full-Stack + ML',
    features: [
      'AI-driven difficulty adjustment',
      'Real-time performance tracking',
      'Instant feedback system',
      'Progress analytics dashboard',
    ],
    github: 'https://github.com/jaymanishguri/quizable',
    liveDemo: null,
  },
  {
    id: 3,
    title: 'GateHub',
    description: 'ML-based earthquake prediction and analysis system',
    longDescription: `GateHub uses machine learning to detect patterns in seismic activity and forecast potential earthquakes. Includes preprocessing modules, feature correlation visualization, and supervised models trained on historical datasets.`,
    image: '/images/projects/gatehub.png',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    date: 'Dec 2024',
    category: 'Data Science',
    features: [
      'Seismic pattern detection',
      'Historical data analysis',
      'ML-based forecasting',
      'Interactive dashboards',
    ],
    github: 'https://github.com/jaymanishguri/gatehub',
    liveDemo: null,
  },
];

export const photographyImages = [
  { id: 1, src: '/images/photography/1.jpg', alt: 'Nature Landscape', category: 'landscapes' as const },
  { id: 2, src: '/images/photography/2.jpg', alt: 'Mountain View', category: 'landscapes' as const },
  { id: 3, src: '/images/photography/3.jpg', alt: 'Forest Scene', category: 'nature' as const },
  { id: 4, src: '/images/photography/4.jpg', alt: 'Sunset', category: 'landscapes' as const },
  { id: 5, src: '/images/photography/5.jpg', alt: 'Wildlife', category: 'nature' as const },
  { id: 6, src: '/images/photography/6.jpg', alt: 'Macro Photography', category: 'macro' as const },
];

