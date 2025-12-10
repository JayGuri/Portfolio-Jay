/**
 * Tech Stack Icons Mapping
 * Uses react-icons for technology logos
 */

import React from 'react';
import { 
  SiJavascript, SiTypescript, SiPython, SiJava, SiCplusplus, SiC,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiFlask, SiDjango,
  SiPandas, SiScikitlearn, SiMatplotlib, SiSeaborn, SiPowerbi,
  SiGit, SiGithub, SiFigma, SiVisualstudiocode, SiMongodb, SiTailwindcss,
  SiHtml5, SiCss3, SiSass, SiBootstrap, SiMaterialui, SiChakraui,
  SiPostgresql, SiMysql, SiRedis, SiFirebase, SiSupabase,
  SiDocker, SiKubernetes, SiAws, SiGooglecloud, SiVercel,
  SiJest, SiTestinglibrary, SiCypress, SiPlaywright,
  SiGraphql, SiApollographql, SiPrisma, SiSequelize,
  SiNpm, SiYarn, SiWebpack, SiVite, SiTurborepo,
  SiJira, SiConfluence, SiSlack, SiNotion,
  SiLinux, SiUbuntu, SiWindows, SiMacos,
  SiTensorflow, SiPytorch, SiOpencv, SiJupyter,
  SiPostman, SiInsomnia, SiSwagger,
  SiStripe, SiPaypal, SiTwilio,
  SiSocketdotio, SiWebrtc,
  SiEslint, SiPrettier, SiHusky,
  SiStorybook, SiChromatic,
  SiNetlify, SiHeroku, SiRailway,
  SiCloudflare, SiFastly,
  SiMarkdown, SiJson,
  SiNginx, SiApache,
  SiBabel, SiTypescript as SiTS,
} from 'react-icons/si';
import { FaDatabase, FaServer, FaCode, FaTools } from 'react-icons/fa';

export interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  category: 'languages' | 'frameworks' | 'dataScience' | 'tools' | 'databases' | 'cloud' | 'testing' | 'other';
  proficiency: number;
  color?: string; // Optional brand color
}

// Icon mapping for easy lookup
export const techStackIcons: Record<string, TechStackItem> = {
  // Languages
  'JavaScript': { name: 'JavaScript', icon: SiJavascript, category: 'languages', proficiency: 90, color: '#F7DF1E' },
  'TypeScript': { name: 'TypeScript', icon: SiTypescript, category: 'languages', proficiency: 85, color: '#3178C6' },
  'Python': { name: 'Python', icon: SiPython, category: 'languages', proficiency: 90, color: '#3776AB' },
  'Java': { name: 'Java', icon: SiJava, category: 'languages', proficiency: 80, color: '#ED8B00' },
  'C/C++': { name: 'C/C++', icon: SiCplusplus, category: 'languages', proficiency: 75, color: '#00599C' },
  'C': { name: 'C', icon: SiC, category: 'languages', proficiency: 70, color: '#A8B9CC' },
  
  // Frontend Frameworks & Libraries
  'React': { name: 'React', icon: SiReact, category: 'frameworks', proficiency: 95, color: '#61DAFB' },
  'Next.js': { name: 'Next.js', icon: SiNextdotjs, category: 'frameworks', proficiency: 90, color: '#000000' },
  'HTML5': { name: 'HTML5', icon: SiHtml5, category: 'frameworks', proficiency: 95, color: '#E34F26' },
  'CSS3': { name: 'CSS3', icon: SiCss3, category: 'frameworks', proficiency: 90, color: '#1572B6' },
  'Sass': { name: 'Sass', icon: SiSass, category: 'frameworks', proficiency: 85, color: '#CC6699' },
  'Bootstrap': { name: 'Bootstrap', icon: SiBootstrap, category: 'frameworks', proficiency: 80, color: '#7952B3' },
  'Material-UI': { name: 'Material-UI', icon: SiMaterialui, category: 'frameworks', proficiency: 85, color: '#007FFF' },
  'Chakra UI': { name: 'Chakra UI', icon: SiChakraui, category: 'frameworks', proficiency: 80, color: '#319795' },
  'TailwindCSS': { name: 'TailwindCSS', icon: SiTailwindcss, category: 'frameworks', proficiency: 90, color: '#06B6D4' },
  
  // Backend Frameworks
  'Node.js': { name: 'Node.js', icon: SiNodedotjs, category: 'frameworks', proficiency: 90, color: '#339933' },
  'Express': { name: 'Express', icon: SiExpress, category: 'frameworks', proficiency: 85, color: '#000000' },
  'Flask': { name: 'Flask', icon: SiFlask, category: 'frameworks', proficiency: 75, color: '#000000' },
  'Django': { name: 'Django', icon: SiDjango, category: 'frameworks', proficiency: 70, color: '#092E20' },
  
  // Data Science & ML
  'Pandas': { name: 'Pandas', icon: SiPandas, category: 'dataScience', proficiency: 90, color: '#150458' },
  'Scikit-Learn': { name: 'Scikit-Learn', icon: SiScikitlearn, category: 'dataScience', proficiency: 85, color: '#F7931E' },
  'Matplotlib': { name: 'Matplotlib', icon: SiMatplotlib, category: 'dataScience', proficiency: 80, color: '#11557C' },
  'Seaborn': { name: 'Seaborn', icon: SiSeaborn, category: 'dataScience', proficiency: 80, color: '#3776AB' },
  'PowerBI': { name: 'PowerBI', icon: SiPowerbi, category: 'dataScience', proficiency: 70, color: '#F2C811' },
  'TensorFlow': { name: 'TensorFlow', icon: SiTensorflow, category: 'dataScience', proficiency: 75, color: '#FF6F00' },
  'PyTorch': { name: 'PyTorch', icon: SiPytorch, category: 'dataScience', proficiency: 70, color: '#EE4C2C' },
  'OpenCV': { name: 'OpenCV', icon: SiOpencv, category: 'dataScience', proficiency: 75, color: '#5C3EE8' },
  'Jupyter': { name: 'Jupyter', icon: SiJupyter, category: 'dataScience', proficiency: 85, color: '#F37626' },
  
  // Databases
  'MongoDB': { name: 'MongoDB', icon: SiMongodb, category: 'databases', proficiency: 85, color: '#47A248' },
  'PostgreSQL': { name: 'PostgreSQL', icon: SiPostgresql, category: 'databases', proficiency: 80, color: '#4169E1' },
  'MySQL': { name: 'MySQL', icon: SiMysql, category: 'databases', proficiency: 75, color: '#4479A1' },
  'Redis': { name: 'Redis', icon: SiRedis, category: 'databases', proficiency: 70, color: '#DC382D' },
  'Firebase': { name: 'Firebase', icon: SiFirebase, category: 'databases', proficiency: 80, color: '#FFCA28' },
  'Supabase': { name: 'Supabase', icon: SiSupabase, category: 'databases', proficiency: 75, color: '#3ECF8E' },
  
  // Tools & DevOps
  'Git/GitHub': { name: 'Git/GitHub', icon: SiGithub, category: 'tools', proficiency: 95, color: '#181717' },
  'Git': { name: 'Git', icon: SiGit, category: 'tools', proficiency: 95, color: '#F05032' },
  'Figma': { name: 'Figma', icon: SiFigma, category: 'tools', proficiency: 85, color: '#F24E1E' },
  'VS Code': { name: 'VS Code', icon: SiVisualstudiocode, category: 'tools', proficiency: 95, color: '#007ACC' },
  'Docker': { name: 'Docker', icon: SiDocker, category: 'tools', proficiency: 80, color: '#2496ED' },
  'Kubernetes': { name: 'Kubernetes', icon: SiKubernetes, category: 'tools', proficiency: 70, color: '#326CE5' },
  'NPM': { name: 'NPM', icon: SiNpm, category: 'tools', proficiency: 90, color: '#CB3837' },
  'Yarn': { name: 'Yarn', icon: SiYarn, category: 'tools', proficiency: 85, color: '#2C8EBB' },
  'Webpack': { name: 'Webpack', icon: SiWebpack, category: 'tools', proficiency: 75, color: '#8DD6F9' },
  'Vite': { name: 'Vite', icon: SiVite, category: 'tools', proficiency: 85, color: '#646CFF' },
  'Turborepo': { name: 'Turborepo', icon: SiTurborepo, category: 'tools', proficiency: 70, color: '#EF4444' },
  'Postman': { name: 'Postman', icon: SiPostman, category: 'tools', proficiency: 85, color: '#FF6C37' },
  'Insomnia': { name: 'Insomnia', icon: SiInsomnia, category: 'tools', proficiency: 80, color: '#5849BE' },
  'Swagger': { name: 'Swagger', icon: SiSwagger, category: 'tools', proficiency: 75, color: '#85EA2D' },
  'ESLint': { name: 'ESLint', icon: SiEslint, category: 'tools', proficiency: 85, color: '#4B32C3' },
  'Prettier': { name: 'Prettier', icon: SiPrettier, category: 'tools', proficiency: 90, color: '#F7B93E' },
  'Husky': { name: 'Husky', icon: SiHusky, category: 'tools', proficiency: 80, color: '#42B883' },
  'Storybook': { name: 'Storybook', icon: SiStorybook, category: 'tools', proficiency: 75, color: '#FF4785' },
  'Chromatic': { name: 'Chromatic', icon: SiChromatic, category: 'tools', proficiency: 70, color: '#FC521F' },
  'Jira': { name: 'Jira', icon: SiJira, category: 'tools', proficiency: 80, color: '#0052CC' },
  'Confluence': { name: 'Confluence', icon: SiConfluence, category: 'tools', proficiency: 75, color: '#172B4D' },
  'Slack': { name: 'Slack', icon: SiSlack, category: 'tools', proficiency: 85, color: '#4A154B' },
  'Notion': { name: 'Notion', icon: SiNotion, category: 'tools', proficiency: 80, color: '#000000' },
  
  // Cloud & Hosting
  'AWS': { name: 'AWS', icon: SiAws, category: 'cloud', proficiency: 75, color: '#FF9900' },
  'Google Cloud': { name: 'Google Cloud', icon: SiGooglecloud, category: 'cloud', proficiency: 70, color: '#4285F4' },
  'Vercel': { name: 'Vercel', icon: SiVercel, category: 'cloud', proficiency: 90, color: '#000000' },
  'Netlify': { name: 'Netlify', icon: SiNetlify, category: 'cloud', proficiency: 85, color: '#00C7B7' },
  'Heroku': { name: 'Heroku', icon: SiHeroku, category: 'cloud', proficiency: 75, color: '#430098' },
  'Railway': { name: 'Railway', icon: SiRailway, category: 'cloud', proficiency: 80, color: '#0B0D0E' },
  'Cloudflare': { name: 'Cloudflare', icon: SiCloudflare, category: 'cloud', proficiency: 75, color: '#F38020' },
  'Fastly': { name: 'Fastly', icon: SiFastly, category: 'cloud', proficiency: 70, color: '#FF282D' },
  
  // Testing
  'Jest': { name: 'Jest', icon: SiJest, category: 'testing', proficiency: 80, color: '#C21325' },
  'Testing Library': { name: 'Testing Library', icon: SiTestinglibrary, category: 'testing', proficiency: 75, color: '#E33332' },
  'Cypress': { name: 'Cypress', icon: SiCypress, category: 'testing', proficiency: 70, color: '#17202C' },
  'Playwright': { name: 'Playwright', icon: SiPlaywright, category: 'testing', proficiency: 75, color: '#2EAD33' },
  
  // APIs & GraphQL
  'GraphQL': { name: 'GraphQL', icon: SiGraphql, category: 'other', proficiency: 75, color: '#E10098' },
  'Apollo': { name: 'Apollo', icon: SiApollographql, category: 'other', proficiency: 70, color: '#311C87' },
  'Prisma': { name: 'Prisma', icon: SiPrisma, category: 'other', proficiency: 75, color: '#2D3748' },
  'Sequelize': { name: 'Sequelize', icon: SiSequelize, category: 'other', proficiency: 70, color: '#52B0E7' },
  
  // Payment & Communication
  'Stripe': { name: 'Stripe', icon: SiStripe, category: 'other', proficiency: 75, color: '#635BFF' },
  'PayPal': { name: 'PayPal', icon: SiPaypal, category: 'other', proficiency: 70, color: '#00457C' },
  'Twilio': { name: 'Twilio', icon: SiTwilio, category: 'other', proficiency: 70, color: '#F22F46' },
  'Socket.io': { name: 'Socket.io', icon: SiSocketdotio, category: 'other', proficiency: 75, color: '#010101' },
  'WebRTC': { name: 'WebRTC', icon: SiWebrtc, category: 'other', proficiency: 70, color: '#333333' },
  
  // Operating Systems
  'Linux': { name: 'Linux', icon: SiLinux, category: 'tools', proficiency: 80, color: '#FCC624' },
  'Ubuntu': { name: 'Ubuntu', icon: SiUbuntu, category: 'tools', proficiency: 75, color: '#E95420' },
  'Windows': { name: 'Windows', icon: SiWindows, category: 'tools', proficiency: 90, color: '#0078D4' },
  'macOS': { name: 'macOS', icon: SiMacos, category: 'tools', proficiency: 85, color: '#000000' },
  
  // Web Servers
  'Nginx': { name: 'Nginx', icon: SiNginx, category: 'tools', proficiency: 75, color: '#009639' },
  'Apache': { name: 'Apache', icon: SiApache, category: 'tools', proficiency: 70, color: '#D22128' },
  
  // Build Tools
  'Babel': { name: 'Babel', icon: SiBabel, category: 'tools', proficiency: 80, color: '#F9DC3E' },
  
  // Formats
  'Markdown': { name: 'Markdown', icon: SiMarkdown, category: 'tools', proficiency: 90, color: '#000000' },
  'JSON': { name: 'JSON', icon: SiJson, category: 'tools', proficiency: 95, color: '#000000' },
};

// Helper function to get icon by name
export function getTechIcon(name: string): TechStackItem | null {
  return techStackIcons[name] || null;
}

// Get all tech stack items by category
export function getTechStackByCategory(category: TechStackItem['category']): TechStackItem[] {
  return Object.values(techStackIcons).filter(item => item.category === category);
}

// Get all tech stack items
export function getAllTechStack(): TechStackItem[] {
  return Object.values(techStackIcons);
}

