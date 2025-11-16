# Deployment Guide

Complete guide to deploying your RiskOptimix Music Transformer website.

## Pre-Deployment Checklist

Before deploying, ensure you've completed:

### 1. Content Preparation
- [ ] Add your MIDI files to `public/midi/`
- [ ] Add your academic paper PDF to `public/papers/`
- [ ] Add architecture diagrams to `public/images/`
- [ ] Update `content/musicSamples.json` with your samples
- [ ] Update `content/resources.json` with correct links

### 2. Personalization
- [ ] Replace all `[Your Name]` placeholders in `app/about/page.tsx`
- [ ] Update contact email in Footer component
- [ ] Update social media links (GitHub, LinkedIn)
- [ ] Add your profile photo to `public/images/`
- [ ] Customize bio and professional background

### 3. Configuration
- [ ] Update `package.json` name and description
- [ ] Set up Google Analytics ID (optional)
- [ ] Configure custom domain (if applicable)
- [ ] Review and update meta tags in `app/layout.tsx`

### 4. Testing
- [ ] Test all MIDI files play correctly
- [ ] Verify all links work (internal and external)
- [ ] Check responsive design on mobile devices
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Run `npm run build` to check for errors
- [ ] Review accessibility with browser tools

## Deployment to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin https://github.com/yourusername/music-transformer-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure (if needed)**
   - Framework Preset: `Next.js` (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Environment Variables** (Optional)
   - Go to Settings → Environment Variables
   - Add any variables from `.env.example`
   - Redeploy if you add variables

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment
   vercel
   
   # Follow prompts:
   # - Set up and deploy? Yes
   # - Which scope? Your account
   # - Link to existing project? No
   # - Project name? [accept default or customize]
   # - Directory? ./ [press enter]
   # - Override settings? No [press enter]
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Post-Deployment

1. **Custom Domain**
   - In Vercel dashboard → Settings → Domains
   - Add your domain
   - Update DNS records as instructed
   - Wait for SSL certificate (automatic)

2. **Performance Check**
   - Run Lighthouse audit
   - Check Core Web Vitals in Vercel Analytics
   - Verify all assets load correctly

3. **Monitoring**
   - Enable Vercel Analytics (free)
   - Set up error tracking (optional)
   - Monitor bandwidth usage

## Deployment to Other Platforms

### Netlify

1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Connect GitHub repository
   - Configure build settings
   - Deploy

### AWS Amplify

1. **Connect Repository**
   - AWS Amplify Console
   - Connect GitHub repo
   - Select branch

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Docker (Self-Hosted)

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci
   
   COPY . .
   RUN npm run build
   
   EXPOSE 3000
   
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t music-transformer-site .
   docker run -p 3000:3000 music-transformer-site
   ```

## Continuous Deployment

### Automatic Deployments

With Vercel + GitHub:
- Push to `main` branch → automatic production deploy
- Push to other branches → automatic preview deploys
- Pull requests → preview deployments with unique URLs

### Deployment Protection

1. **Enable Vercel Protection**
   - Settings → Deployment Protection
   - Password protect preview deployments
   - Restrict production deployments

2. **Branch Protection**
   - GitHub → Settings → Branches
   - Require pull request reviews
   - Require status checks

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error: TypeScript errors**
```bash
# Check for type errors
npm run lint
# Fix or temporarily disable strict checking in tsconfig.json
```

### MIDI Files Not Loading

- Verify files are in `public/midi/`
- Check paths in `musicSamples.json` match filenames
- Ensure files are committed to Git
- Check Vercel deployment logs

### Slow Loading

- Optimize MIDI files (remove unnecessary tracks)
- Compress images: `npm install -g sharp-cli && sharp input.png output.png`
- Enable Vercel Edge Caching
- Use lazy loading for heavy components

### 404 on Page Refresh

- Ensure using Next.js App Router (not Pages Router)
- Check `next.config.js` doesn't have custom routing
- Verify deployment platform supports Next.js dynamic routes

## Performance Optimization

### After Deployment

1. **Enable Vercel Analytics**
   ```bash
   npm i @vercel/analytics
   ```
   Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   // In body
   <Analytics />
   ```

2. **Image Optimization**
   - Use Next.js `<Image>` component for photos
   - Serve images in WebP format
   - Implement lazy loading

3. **Code Splitting**
   - Already enabled by Next.js
   - Use dynamic imports for heavy components
   ```tsx
   const MidiPlayer = dynamic(() => import('@/components/MidiPlayer'))
   ```

4. **Caching Strategy**
   - Static assets cached automatically
   - MIDI files: `Cache-Control: public, max-age=31536000`
   - HTML: `Cache-Control: public, max-age=0, must-revalidate`

## Monitoring

### Key Metrics to Watch

1. **Performance**
   - Page load time < 2s
   - First Contentful Paint < 1s
   - Core Web Vitals (LCP, FID, CLS)

2. **Availability**
   - Uptime monitoring (UptimeRobot, Pingdom)
   - SSL certificate expiration
   - Domain expiration

3. **Analytics** (if enabled)
   - Page views
   - Bounce rate
   - MIDI player interactions
   - Download clicks

### Tools

- **Vercel Analytics**: Built-in performance monitoring
- **Google PageSpeed Insights**: Performance audits
- **Lighthouse**: Comprehensive testing
- **GTmetrix**: Detailed performance reports

## Security

### Best Practices

1. **Keep Dependencies Updated**
   ```bash
   npm outdated
   npm update
   ```

2. **Security Audit**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Environment Variables**
   - Never commit `.env.local`
   - Use Vercel's environment variable system
   - Rotate sensitive keys regularly

4. **HTTPS**
   - Automatic with Vercel
   - Force HTTPS in production
   - Use HSTS headers

## Rollback Procedure

If deployment has issues:

1. **Vercel Dashboard**
   - Go to Deployments
   - Find previous working deployment
   - Click "Promote to Production"

2. **Git Revert**
   ```bash
   git revert HEAD
   git push origin main
   ```

## Cost Estimates

### Vercel Free Tier
- ✅ 100 GB bandwidth/month
- ✅ Unlimited static hosting
- ✅ HTTPS included
- ✅ CDN included
- ✅ Analytics (basic)

**Sufficient for**: Personal portfolios, small projects, ~10K visitors/month

### When to Upgrade
- Exceeding bandwidth limits
- Need team collaboration
- Want advanced analytics
- Require password protection

## Support

### Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### Getting Help
1. Check deployment logs in Vercel dashboard
2. Search GitHub issues
3. Post in Vercel community
4. Open a support ticket (Pro plans)

---

**Happy Deploying! 🚀**

