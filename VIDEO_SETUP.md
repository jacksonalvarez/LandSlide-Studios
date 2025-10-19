# Video Setup Guide for Hero Section

## Video Files Needed

Place the following files in the `public` folder of your Next.js project:

### Required Files:

1. **`/public/hero-video.mp4`** - Main video file (H.264 codec recommended)
2. **`/public/hero-video.webm`** - WebM version for better browser compatibility
3. **`/public/hero-poster.jpg`** - Static poster image (shows while video loads)

### Video Specifications Recommended:

**For Game Development Studio:**

- **Resolution:** 1920x1080 (Full HD) minimum, 4K for high-end displays
- **Duration:** 10-30 seconds (loops automatically)
- **Format:** MP4 (H.264 codec) + WebM for maximum compatibility
- **File Size:** Keep under 10MB for good loading performance
- **Aspect Ratio:** 16:9 (landscape)

### Content Ideas for Your Video:

1. **Game Footage Compilation:**
   - Quick cuts of games you've developed
   - Gameplay highlights showing different genres
   - Visual effects and animations

2. **Development Process:**
   - Time-lapse of game development
   - Code editors, Unity/Unreal Engine in action
   - Team collaboration moments

3. **Game Art & Assets:**
   - 3D models rotating
   - Character animations
   - Environment showcases

4. **Studio Branding:**
   - Logo animations
   - Typography reveals
   - Abstract tech/gaming visuals

### Quick Setup Options:

#### Option 1: Use Stock Gaming Video (Temporary)

```bash
# Download a temporary gaming video from sites like:
# - Pixabay (free)
# - Pexels (free) 
# - Unsplash (free)
# - Adobe Stock (paid)

# Save as: /public/hero-video.mp4
```

#### Option 2: Create Simple Logo Animation

- Use tools like After Effects, Premiere Pro, or even Canva
- Animate your company logo with gaming-themed effects
- Export as MP4 and WebM

#### Option 3: Game Engine Footage

- Record gameplay footage from Unity/Unreal projects
- Screen record development process
- Capture real-time rendering demos

### Optimization Tips:

1. **Compress videos** using tools like:
   - HandBrake (free)
   - Adobe Media Encoder
   - Online compressors

2. **Test loading times** on different connection speeds

3. **Consider mobile performance** - videos can be bandwidth-intensive

### Fallback Strategy:

If no video is available, the component will gracefully fall back to:

1. The poster image
2. The gradient background from the original design

### File Structure:

```
public/
├── hero-video.mp4     # Primary video file
├── hero-video.webm    # WebM version for compatibility
└── hero-poster.jpg    # Poster image for loading/fallback
```

## Features Included:

✅ **Auto-play** (muted by default for browser compliance) ✅ **Loop**
continuously\
✅ **Responsive** - scales to any screen size ✅ **Browser compatible** - MP4 +
WebM formats ✅ **Loading states** - shows spinner while loading ✅
**Controls** - play/pause and mute/unmute buttons ✅ **Performance optimized** -
preloads only metadata ✅ **Accessibility** - proper ARIA labels ✅ **Mobile
friendly** - uses playsInline attribute

The video will automatically enhance your hero section and can be easily updated
by simply replacing the video files in the public folder.
