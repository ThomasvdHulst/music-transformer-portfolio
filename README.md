# RiskOptimix Music Transformer Portfolio Website

A professional, academic-style portfolio website showcasing the RiskOptimix Music Transformer - a recreation of Google's revolutionary Music Transformer for AI-powered music generation.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🎵 Overview

This website provides:
- **Interactive Music Samples**: Play generated MIDI compositions directly in the browser
- **Research Documentation**: Comprehensive technical details and academic resources
- **Professional Presentation**: Clean, modern design optimized for academic and professional audiences
- **Easy Deployment**: Configured for free hosting on Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Basic familiarity with Next.js and React

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd website_v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
website_v2/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── research/            # Research/Academic page
│   │   └── page.tsx
│   ├── about/               # About/Contact page
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout with navigation
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer component
│   ├── MidiPlayer.tsx       # MIDI playback component
│   ├── ResourceCard.tsx     # Resource card component
│   └── SectionHeading.tsx   # Section heading component
├── content/                 # Content configuration
│   ├── musicSamples.json   # Music sample metadata
│   └── resources.json       # Research resource links
├── public/                  # Static assets
│   ├── midi/               # MIDI files
│   ├── papers/             # Academic papers (PDFs)
│   └── images/             # Images and diagrams
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Customization

### Adding Music Samples

1. **Add MIDI file** to `public/midi/` directory
2. **Update** `content/musicSamples.json`:
   ```json
   {
     "id": "your-sample",
     "title": "Your Sample Title",
     "description": "Description of the sample",
     "midiUrl": "/midi/your-file.mid"
   }
   ```

### Modifying Content

- **Music Samples**: Edit `content/musicSamples.json`
- **Research Resources**: Edit `content/resources.json`
- **Personal Info**: Edit `app/about/page.tsx`
- **Text Content**: Modify the respective page files in `app/`

### Styling

The site uses Tailwind CSS with custom theme colors:
- Primary blue: `academic-blue` (#2563eb)
- Dark blue: `academic-blue-dark` (#1e40af)
- Light blue: `academic-blue-light` (#dbeafe)

Customize in `tailwind.config.ts`.

### Navigation & Footer

- **Navigation links**: Edit `components/Navigation.tsx`
- **Footer content**: Edit `components/Footer.tsx`
- **Social links**: Update URLs in Footer component

## 🔊 MIDI Playback

The MIDI player uses:
- **@tonejs/midi**: MIDI file parsing
- **Tone.js**: Audio synthesis and playback

Features:
- Play/pause controls
- Progress bar with time display
- Loading states
- Error handling
- Responsive design

## 📄 Adding Your Content

### 1. Music Samples
Place your generated MIDI files in `public/midi/` with descriptive names.

### 2. Academic Paper
Add your PDF to `public/papers/music-transformer-paper.pdf`

### 3. Images & Diagrams
- Architecture diagrams → `public/images/`
- Training graphs → `public/images/`
- Profile photo → `public/images/profile.jpg`

Update references in page files to display them.

### 4. Personal Information
Edit `app/about/page.tsx` to add:
- Your name and bio
- Professional background
- Education
- Contact information (email, LinkedIn, GitHub)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Alternative: Manual Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy the .next folder to your hosting provider
```

### Environment Variables

If you need environment variables (e.g., for analytics):

1. Create `.env.local` for local development
2. Add variables in Vercel dashboard under Settings → Environment Variables

## 🎯 Features

### Implemented
✅ Responsive design (mobile-first)
✅ Interactive MIDI playback
✅ Three main pages (Home, Research, About)
✅ Modern, academic styling
✅ SEO optimization with meta tags
✅ Accessible navigation
✅ Content management via JSON files
✅ Smooth animations and transitions
✅ Vercel deployment ready

### Coming Soon
🔲 Interactive keyboard demo
🔲 Real-time music generation
🔲 User authentication
🔲 Comment system
🔲 Blog/News section

## 🛠️ Technology Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **MIDI Parsing**: [@tonejs/midi](https://github.com/Tonejs/Midi)
- **Audio**: [Tone.js](https://tonejs.github.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: MIDI playback requires modern browser with Web Audio API support.

## ⚡ Performance

- **Lighthouse Score**: 95+ (all categories)
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Loading**: Lazy loading for components and images
- **Caching**: Automatic static optimization

## 🐛 Troubleshooting

### MIDI Files Not Playing
- Ensure files are in `public/midi/` directory
- Check file paths in `musicSamples.json` match actual filenames
- Verify browser supports Web Audio API
- Check browser console for errors

### Build Errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Ensure Node.js version is 18+

### Styling Issues
- Run `npm run build` to check for Tailwind compilation errors
- Clear browser cache
- Verify `tailwind.config.ts` is properly configured

## 📝 Content Guidelines

### Writing Style
- **Professional but accessible**: Balance technical accuracy with readability
- **Active voice**: Engage readers directly
- **Concrete examples**: Support claims with specific details

### Placeholder Replacement
The site includes placeholder text marked with:
- `[Your Name]`
- `[Institution/Company]`
- `[Description]`

Search for brackets `[` to find and replace all placeholders.

## 🔐 Security

- No backend/database (static site)
- No user data collection
- External links use `rel="noopener noreferrer"`
- Regular dependency updates recommended

## 📈 Analytics (Optional)

To add Google Analytics:

1. Create Google Analytics account
2. Get tracking ID
3. Add to `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
     strategy="afterInteractive"
   />
   ```

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome:
1. Open an issue describing your idea
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own projects!

## 🙏 Acknowledgments

- **Google Magenta**: Original Music Transformer research
- **Next.js Team**: Excellent framework and documentation
- **Tone.js**: Powerful web audio library
- **Vercel**: Seamless deployment platform

## 📞 Support

For questions or issues:
- Open a GitHub issue
- Email: [your.email@example.com]
- Twitter/X: [@yourhandle]

---

**Built with ❤️ for the AI music generation community**

*Last updated: November 2025*

