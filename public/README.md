# Public Assets

This directory contains static assets for the portfolio website.

## Required Files

### Images

1. **Profile Photo**: `images/profile.jpg`
   - Professional headshot or photo
   - Recommended size: 800x800px
   - Format: JPG or PNG

2. **Project Screenshots**: `images/projects/`
   - Place project screenshots here
   - Files should match the names in `lib/data.ts`:
     - `puja-travels.png`
     - `quizable.png`
     - `gatehub.png`
   - Recommended size: 1200x800px
   - Format: PNG or JPG

3. **Photography Gallery**: `images/photography/`
   - Place photography images here
   - Files: `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`
   - Recommended size: 1200x1200px (square)
   - Format: JPG

### Resume

- **Resume PDF**: `resume.pdf`
  - Downloadable resume file
  - Should be optimized for web (under 2MB)

### Open Graph Image

- **OG Image**: `og-image.png`
  - Social media preview image
  - Size: 1200x630px
  - Format: PNG

## Image Optimization

All images should be optimized before adding:
- Use WebP format when possible
- Compress images to reduce file size
- Use Next.js Image component for automatic optimization

