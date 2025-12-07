# How to Add Your Photography Images

## Quick Guide

### Step 1: Prepare Your Images
1. **Optimize your photos** (recommended):
   - Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
   - Keep file size under 500KB per image
   - Recommended dimensions: 1200x1200px or larger (square format works best)

2. **Choose a format**:
   - JPG: Best for photos with many colors
   - WebP: Best compression (if supported)
   - PNG: Only if you need transparency

### Step 2: Add Images to Project
1. Create the folder if it doesn't exist:
   ```
   public/images/photography/
   ```

2. Copy your image files to this folder:
   ```
   public/images/photography/
   ├── sunset-mumbai.jpg
   ├── mountain-peak.jpg
   ├── forest-path.jpg
   └── ... (your other photos)
   ```

### Step 3: Update the Data File
Open `lib/photography.ts` and update the `photographyImages` array:

```typescript
export const photographyImages: PhotographyImage[] = [
  { 
    id: 1, 
    src: '/images/photography/sunset-mumbai.jpg',  // Your filename
    alt: 'Sunset in Mumbai',                        // Descriptive text
    category: 'landscapes',                         // Optional category
    caption: 'Beautiful sunset over the city'        // Optional caption
  },
  { 
    id: 2, 
    src: '/images/photography/mountain-peak.jpg',
    alt: 'Mountain Peak',
    category: 'landscapes',
    caption: 'Snow-capped mountain'
  },
  // Add more photos here...
];
```

### Step 4: Test
1. Run your development server: `npm run dev`
2. Navigate to the Creative page → Photography section
3. Your photos should appear in the circular gallery

## Tips

- **Naming**: Use descriptive filenames (e.g., `sunset-mumbai.jpg` instead of `IMG_1234.jpg`)
- **Order**: The order in the array determines display order
- **Categories**: Use categories to organize (landscapes, nature, macro, portraits, street, other)
- **Alt Text**: Always provide descriptive alt text for accessibility
- **Performance**: Keep images optimized - large files will slow down loading

## Example Workflow

1. Take/edit your photos
2. Optimize them (reduce file size)
3. Rename them descriptively
4. Copy to `public/images/photography/`
5. Add entry to `lib/photography.ts`
6. Test in browser
7. Repeat for more photos!

## Troubleshooting

**Images not showing?**
- Check the file path matches exactly (case-sensitive)
- Ensure file is in `public/images/photography/`
- Check browser console for errors
- Verify the `src` path starts with `/images/photography/`

**Images loading slowly?**
- Optimize images (reduce file size)
- Use WebP format if possible
- Consider using fewer images or lazy loading

**Want to change display order?**
- Reorder items in the `photographyImages` array
- The first item in the array appears first in the gallery

