# Jay Guri - Portfolio Website

A modern, professional single-page portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Dark mode with Manchester United Red and Real Madrid Gold accents
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized**: Lighthouse score 90+
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🎬 **Smooth Animations**: Camera lens focus loading animation and scroll-triggered animations
- 🎯 **Single-Page Application**: Smooth scroll navigation between sections

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your EmailJS credentials (if using contact form).

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/          # Section components
│   ├── ui/                # shadcn/ui components
│   ├── animations/        # Animation components
│   └── ...                # Other components
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── data.ts            # Resume/project data
│   └── constants.ts       # Constants and config
└── public/
    ├── images/            # Images and assets
    └── resume.pdf         # Resume PDF
```

## Sections

1. **Hero**: Introduction with CTA buttons
2. **About**: Personal information and stats
3. **Skills**: Technical skills with proficiency bars
4. **Experience**: Timeline of work and education
5. **Projects**: Project showcase with detail modals
6. **Photography**: Photo gallery with lightbox
7. **Music**: Spotify integration (optional)
8. **Contact**: Contact form and information

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Projects
- Experience
- Skills
- Photography images

### Update Contact Information

Edit `lib/constants.ts` to update:
- Social links
- Contact information

### Add Images

Place images in `public/images/`:
- `profile.jpg` - Profile photo
- `projects/` - Project screenshots
- `photography/` - Photography gallery

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- Font optimization with next/font
- Lazy loading for heavy components

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Color contrast compliance
- Reduced motion support

## License

© 2025 Jay Guri. All rights reserved.

