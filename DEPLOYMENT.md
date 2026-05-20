# Portfolio Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended - Free)
1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain (Optional):**
   - In your Netlify dashboard, go to "Domain settings"
   - Add your custom domain
   - Update the `og:url` and `twitter:url` in `index.html`

### 2. Vercel (Free)
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts and your site will be live!**

### 3. GitHub Pages
1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🔧 Pre-Deployment Checklist

### ✅ Content Updates
- [ ] Update personal information in `src/App.jsx`
- [ ] Add your actual resume PDF to `public/khaya-dingindlela-cv.pdf`
- [ ] Update contact information
- [ ] Verify all project links work
- [ ] Test contact form functionality

### ✅ SEO Optimization
- [ ] Update meta tags in `index.html`
- [ ] Add your actual domain to Open Graph tags
- [ ] Optimize images (compress if needed)
- [ ] Test page loading speed

### ✅ Testing
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive design on mobile devices
- [ ] Verify all links work correctly
- [ ] Test contact form submission
- [ ] Check dark/light mode toggle

## 📊 Performance Optimization

### Before Deploying:
1. **Optimize Images:**
   ```bash
   # Install image optimization tools
   npm install --save-dev imagemin imagemin-webp
   ```

2. **Compress Images:**
   - Use tools like TinyPNG or Squoosh
   - Convert to WebP format for better performance
   - Keep images under 500KB

3. **Lazy Loading:**
   - Images are already optimized with loading states
   - Consider adding lazy loading for project images

## 🔒 Security Considerations

### Contact Form Security:
1. **Use a form service:**
   - [Formspree](https://formspree.io) (Free tier available)
   - [Netlify Forms](https://docs.netlify.com/forms/setup/) (Free)
   - [EmailJS](https://www.emailjs.com/) (Free tier available)

2. **Update form handler:**
   ```javascript
   // Replace the current handleFormSubmit with actual service
   const handleFormSubmit = async (e) => {
     e.preventDefault();
     setFormStatus('sending');
     
     try {
       const response = await fetch('YOUR_FORM_ENDPOINT', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       });
       
       if (response.ok) {
         setFormStatus('success');
         setFormData({ name: '', email: '', message: '' });
       } else {
         throw new Error('Failed to send');
       }
     } catch (error) {
       setFormStatus('error');
     }
   };
   ```

## 📈 Analytics Setup

### Google Analytics:
1. Create a Google Analytics account
2. Add tracking code to `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🎯 Post-Deployment

### 1. Test Everything:
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Resume download works
- [ ] Social links work
- [ ] Mobile responsiveness

### 2. SEO Verification:
- [ ] Submit to Google Search Console
- [ ] Test with Google PageSpeed Insights
- [ ] Verify meta tags with social media debuggers

### 3. Share Your Portfolio:
- [ ] Update LinkedIn profile with portfolio link
- [ ] Share on GitHub
- [ ] Add to your email signature
- [ ] Share with your network

## 🚨 Troubleshooting

### Common Issues:

1. **Build Errors:**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Image Not Loading:**
   - Check file paths in `public/images/`
   - Verify image file names match exactly
   - Ensure images are in correct format (jpg, png, svg)

3. **Contact Form Not Working:**
   - Verify form service configuration
   - Check browser console for errors
   - Test with different email addresses

4. **Styling Issues:**
   - Clear browser cache
   - Check Tailwind CSS compilation
   - Verify all CSS classes are correct

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Test on different browsers
4. Check the deployment platform's documentation

---

**Your portfolio is now ready for deployment! 🎉** 