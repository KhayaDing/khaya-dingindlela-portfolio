# Khaya Dingindlela - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS showcasing Khaya Dingindlela's professional experience, skills, and projects in the ICT field.

## 🚀 Features

- **Modern Design**: Clean, professional design with zinc color palette
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations and hover effects
- **Professional Sections**: 
  - Hero section with introduction
  - About Me
  - Skills & Expertise
  - Professional Experience with timeline
  - Featured Projects
  - Contact form
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Optimized Performance**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Colors
The website uses a zinc color palette. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    // ... other shades
  }
}
```

### Content
Update the content in `src/App.jsx`:
- Personal information in the hero section
- Skills and expertise
- Professional experience
- Projects
- Contact information

### Styling
Custom styles are defined in `src/index.css` using Tailwind's `@layer` directive.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **Any static hosting service**

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎯 Key Features Explained

### Dark Mode Toggle
The website includes a dark mode toggle that switches between light and dark themes using React state management.

### Interactive Timeline
The experience section features an interactive timeline with clickable cards that can be expanded for more details.

### Smooth Animations
All interactive elements include smooth transitions and hover effects for a polished user experience.

### Contact Form
A functional contact form ready for backend integration (currently displays form data in console).

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Organization
- Components are organized in a single file for simplicity
- Styles use Tailwind CSS utility classes
- Custom styles are defined in `index.css`

## 📞 Contact

For questions or support regarding this portfolio template, please reach out through the contact form on the website.

---

**Built with ❤️ using React and Tailwind CSS** 