# Images Folder

This folder contains all images used in the portfolio website.

## 📁 Image Organization

### Profile Images
- `profile.jpg` - Main profile photo (recommended: 600x600px)
- `profile-dark.jpg` - Alternative profile photo for dark mode

### Project Images
- `project-spu-sports-hub.jpg` - SPU Sports Hub project screenshot
- `project-hackathon.jpg` - Hackathon facilitation project image

### Background Images
- `hero-bg.jpg` - Hero section background (optional)
- `pattern.svg` - Decorative pattern (optional)

### Icons
- `icon-linkedin.svg` - LinkedIn icon
- `icon-twitter.svg` - Twitter icon
- `icon-github.svg` - GitHub icon

## 🎨 Image Guidelines

### Recommended Sizes:
- **Profile Photo**: 600x600px (square)
- **Project Images**: 800x600px or 1200x800px
- **Background Images**: 1920x1080px
- **Icons**: 24x24px or 32x32px

### File Formats:
- **Photos**: Use `.jpg` for better compression
- **Screenshots**: Use `.png` for clarity
- **Icons**: Use `.svg` for scalability

### File Size:
- Keep images under 500KB for optimal web performance
- Use image compression tools if needed

## 📝 Usage in Code

```jsx
// In React components
<img src="/images/profile.jpg" alt="Khaya Dingindlela" />

// With error handling
<img 
  src="/images/profile.jpg" 
  alt="Khaya Dingindlela"
  onError={(e) => {
    e.target.src = "https://placehold.co/600x600/zinc/ffffff?text=Khaya+Dingindlela";
  }}
/>
```

## 🔧 Image Optimization

1. **Resize images** to appropriate dimensions
2. **Compress images** using tools like TinyPNG or ImageOptim
3. **Use descriptive filenames** for better organization
4. **Add alt text** for accessibility

## 📱 Responsive Images

For responsive images, consider using different sizes:
- `profile-small.jpg` (300x300px) for mobile
- `profile-medium.jpg` (600x600px) for tablet
- `profile-large.jpg` (900x900px) for desktop 