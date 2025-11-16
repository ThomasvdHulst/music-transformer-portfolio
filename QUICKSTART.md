# Quick Start Guide

Get your Music Transformer portfolio website up and running in 5 minutes!

## 🚀 One-Command Setup

```bash
# 1. Navigate to the project
cd website_v2

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) - Your site is live! 🎉

## ✏️ Essential Customizations

### 1. Add Your Music (2 minutes)

**Step 1**: Copy your MIDI files to `public/midi/`

**Step 2**: Edit `content/musicSamples.json`:
```json
[
  {
    "id": "sample-1",
    "title": "Your Composition Title",
    "description": "Brief description of the piece",
    "midiUrl": "/midi/your-file.mid"
  }
]
```

**That's it!** Your music now appears on the homepage.

### 2. Update Your Info (3 minutes)

**File**: `app/about/page.tsx`

Find and replace these placeholders:
- `[Your Name]` → Your actual name
- `[Your Background]` → Your field/expertise
- `[Current Position]` → Your role
- `[Institution/Company]` → Where you work/study

**File**: `components/Footer.tsx`

Update these lines:
```tsx
<a href="mailto:contact@example.com">  // ← Your email
<a href="https://github.com">          // ← Your GitHub
<a href="https://linkedin.com">        // ← Your LinkedIn
```

### 3. Add Research Resources (2 minutes)

**Step 1**: Add your paper PDF to `public/papers/music-transformer-paper.pdf`

**Step 2**: Edit `content/resources.json`:
```json
{
  "id": "github",
  "href": "https://github.com/YOUR_USERNAME/YOUR_REPO",  // ← Update this
  ...
}
```

## 🎨 Quick Styling Changes

### Change Primary Color

**File**: `tailwind.config.ts`

```ts
colors: {
  'academic-blue': {
    DEFAULT: '#2563eb',  // ← Change this hex color
    dark: '#1e40af',     // ← Darker shade
    light: '#dbeafe',    // ← Lighter shade
  },
}
```

### Change Fonts

**File**: `app/layout.tsx`

```tsx
import { Inter } from 'next/font/google';  // ← Change to any Google Font
const inter = Inter({ subsets: ['latin'] });
```

## 📦 What's Included?

✅ **3 Pages**
- Home: Hero, music samples, introduction
- Research: Technical details, resources
- About: Bio, contact info

✅ **Key Features**
- MIDI player with controls
- Responsive design
- SEO optimized
- Vercel-ready

✅ **Components**
- Navigation (auto-mobile menu)
- Footer (social links)
- MIDI Player
- Resource Cards

## 🔧 Common Tasks

### Add a New Page

1. Create `app/newpage/page.tsx`:
```tsx
export default function NewPage() {
  return <div>Your content</div>
}
```

2. Add to navigation in `components/Navigation.tsx`:
```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/newpage', label: 'New Page' },  // ← Add here
  { href: '/about', label: 'About' },
];
```

### Add More Music Samples

Just add entries to `content/musicSamples.json` and place MIDI files in `public/midi/` - they'll automatically appear on the homepage!

### Change Section Text

All page content is in:
- `app/page.tsx` (Home)
- `app/research/page.tsx` (Research)
- `app/about/page.tsx` (About)

Just edit the JSX text directly.

## 🚢 Deploy in 2 Minutes

### Option 1: Vercel (Recommended)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click "Deploy"

Done! ✨

### Option 2: Netlify

1. Push to GitHub (same as above)
2. Visit [app.netlify.com/start](https://app.netlify.com/start)
3. Connect your repo
4. Deploy

## 🐛 Troubleshooting

### Site Won't Start?

```bash
# Delete everything and start fresh
rm -rf node_modules .next
npm install
npm run dev
```

### MIDI Won't Play?

1. Check file is in `public/midi/`
2. Check path in `musicSamples.json` matches filename
3. Try a different browser (Chrome recommended)

### Build Error?

```bash
# Check for TypeScript errors
npm run lint

# Build locally to see errors
npm run build
```

## 📚 Learn More

- **Full README**: See `README.md` for comprehensive docs
- **Deployment Guide**: See `DEPLOYMENT.md` for detailed deploy steps
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🆘 Need Help?

1. Check the error message in terminal
2. Search in `README.md`
3. Check `DEPLOYMENT.md` for deployment issues
4. Open a GitHub issue

## ⚡ Next Steps

Once your site is running:

1. ✅ Replace placeholder text
2. ✅ Add your MIDI files
3. ✅ Upload your paper PDF
4. ✅ Update contact info
5. ✅ Deploy to Vercel
6. ✅ Share with the world!

---

**Questions?** Check `README.md` for detailed documentation.

**Ready to deploy?** See `DEPLOYMENT.md` for step-by-step instructions.

Happy building! 🎵✨

