# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your EmailJS credentials:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Add your credentials to `.env.local`

3. **Add Assets**
   - Add your profile photo: `public/images/profile.jpg`
   - Add project screenshots: `public/images/projects/`
   - Add photography images: `public/images/photography/`
   - Add resume PDF: `public/resume.pdf`
   - Add OG image: `public/og-image.png`

4. **Update Content**
   - Edit `lib/data.ts` to update projects, experience, skills
   - Edit `lib/constants.ts` to update social links and contact info

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Fonts
Edit `app/layout.tsx` to change fonts. Currently using Inter.

### Sections
All sections are in `components/sections/`. Each section can be customized independently.

### Animations
Animation components are in `components/animations/`. Adjust timing and effects as needed.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will automatically deploy on every push to main branch.

## Troubleshooting

### Images not loading
- Ensure images are in `public/images/` directory
- Check file paths match those in `lib/data.ts`
- Use Next.js Image component for optimization

### Contact form not working
- Verify EmailJS credentials in `.env.local`
- Check EmailJS service and template IDs
- Ensure environment variables are set in production

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript errors with `npm run lint`
- Verify all imports are correct

## Performance Tips

1. Optimize images before adding (use WebP when possible)
2. Use Next.js Image component for automatic optimization
3. Enable compression in Next.js config
4. Use dynamic imports for heavy components
5. Minimize bundle size by removing unused dependencies

## Accessibility Checklist

- ✅ Semantic HTML
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance
- ✅ Alt text for images
- ✅ Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Jay Guri. All rights reserved.

