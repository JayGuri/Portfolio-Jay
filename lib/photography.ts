/**
 * Photography Images Configuration
 * 
 * To add your photos:
 * 1. Place your image files in: /public/images/photography/
 * 2. Update this array with your photo information
 * 3. Use descriptive filenames (e.g., "sunset-mumbai.jpg")
 * 
 * Image Recommendations:
 * - Format: JPG or WebP (best for photos)
 * - Size: 1200x1200px or larger (square works best)
 * - File size: Keep under 500KB per image for fast loading
 * - Optimize images before adding (use tools like TinyPNG or ImageOptim)
 */

export interface PhotographyImage {
  id: number;
  src: string; // Path relative to /public folder (starts with /images/photography/)
  alt: string; // Descriptive text for accessibility
  category?: 'landscapes' | 'nature' | 'macro' | 'portraits' | 'street' | 'other';
  caption?: string; // Optional caption to display
}

export const photographyImages: PhotographyImage[] = [
  // Example entries - replace with your actual photos
  { 
    id: 1, 
    src: '/images/photography/1.jpg', 
    alt: 'Nature Landscape', 
    category: 'landscapes',
    caption: 'Beautiful landscape'
  },
  { 
    id: 2, 
    src: '/images/photography/2.jpg', 
    alt: 'Mountain View', 
    category: 'landscapes',
    caption: 'Mountain vista'
  },
  { 
    id: 3, 
    src: '/images/photography/3.jpg', 
    alt: 'Forest Scene', 
    category: 'nature',
    caption: 'Forest path'
  },
  { 
    id: 4, 
    src: '/images/photography/4.jpg', 
    alt: 'Sunset', 
    category: 'landscapes',
    caption: 'Golden hour'
  },
  { 
    id: 5, 
    src: '/images/photography/5.jpg', 
    alt: 'Wildlife', 
    category: 'nature',
    caption: 'Wildlife photography'
  },
  { 
    id: 6, 
    src: '/images/photography/6.jpg', 
    alt: 'Macro Photography', 
    category: 'macro',
    caption: 'Close-up detail'
  },
];

/**
 * Helper function to add a new photo
 * Usage: Add your photo to the array above following the same structure
 */
export function addPhoto(photo: Omit<PhotographyImage, 'id'>): PhotographyImage {
  const newId = Math.max(...photographyImages.map(p => p.id), 0) + 1;
  return { ...photo, id: newId };
}

