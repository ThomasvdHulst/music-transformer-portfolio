# Setup Checklist

Use this checklist to customize and launch your Music Transformer portfolio website.

## 📋 Pre-Launch Checklist

### Phase 1: Initial Setup (10 minutes)

- [ ] **Install Dependencies**
  ```bash
  cd website_v2
  npm install
  ```

- [ ] **Start Development Server**
  ```bash
  npm run dev
  ```
  - [ ] Verify site loads at http://localhost:3000
  - [ ] Test navigation works
  - [ ] Check all pages load

### Phase 2: Add Content (30 minutes)

#### Music Samples
- [ ] Add MIDI files to `public/midi/`
  - [ ] `bach-style-sample.mid`
  - [ ] `jazz-improvisation-sample.mid`
  - [ ] `romantic-sonata-sample.mid`
  - [ ] `minimalist-sample.mid`
  - [ ] Additional samples (optional)

- [ ] Update `content/musicSamples.json`
  - [ ] Verify all file paths match
  - [ ] Add descriptive titles
  - [ ] Write engaging descriptions
  - [ ] Test each sample plays

#### Research Resources
- [ ] Add academic paper to `public/papers/music-transformer-paper.pdf`

- [ ] Update `content/resources.json`
  - [ ] Update GitHub repository URL
  - [ ] Update Jupyter notebooks URL
  - [ ] Verify all external links work
  - [ ] Update dataset information

#### Images & Diagrams
- [ ] Add architecture diagram to `public/images/`
- [ ] Add training graphs to `public/images/`
- [ ] Add profile photo to `public/images/`
- [ ] Add any other visual assets

### Phase 3: Personalization (20 minutes)

#### About Page (`app/about/page.tsx`)
- [ ] Replace `[Your Name]` with actual name
- [ ] Replace `[Your Background]` with your field
- [ ] Update `[Current Position]` section
- [ ] Update `[Previous Position]` section
- [ ] Update `Education` section
- [ ] Update skills and expertise
- [ ] Update areas of interest
- [ ] Add profile photo reference

#### Contact Information
- [ ] Update email in `app/about/page.tsx`
- [ ] Update email in `components/Footer.tsx`
- [ ] Update LinkedIn URL in Footer
- [ ] Update GitHub URL in Footer
- [ ] Update LinkedIn URL in About page
- [ ] Update GitHub URL in About page

#### Home Page (`app/page.tsx`)
- [ ] Review introduction text
- [ ] Verify technical descriptions are accurate
- [ ] Customize any placeholder sections

#### Research Page (`app/research/page.tsx`)
- [ ] Update model specifications (if different)
- [ ] Update training parameters (if different)
- [ ] Add actual training metrics
- [ ] Update future developments section

### Phase 4: Branding & Styling (15 minutes)

#### Colors (Optional)
- [ ] Review color scheme in `tailwind.config.ts`
- [ ] Adjust academic-blue if needed
- [ ] Test color changes across site

#### Metadata (`app/layout.tsx`)
- [ ] Update site title
- [ ] Update description
- [ ] Update keywords
- [ ] Update author name
- [ ] Add Open Graph image (optional)

#### Footer
- [ ] Update copyright year
- [ ] Verify all social links
- [ ] Add additional links if needed

### Phase 5: Testing (20 minutes)

#### Functionality
- [ ] Test all MIDI players
  - [ ] Play/pause works
  - [ ] Progress bar updates
  - [ ] Time display accurate
  - [ ] Reset button works

- [ ] Test all navigation links
  - [ ] Home link
  - [ ] Research link
  - [ ] About link
  - [ ] Footer links

- [ ] Test external links
  - [ ] GitHub links open correctly
  - [ ] LinkedIn links work
  - [ ] Email links work
  - [ ] Resource download links

#### Responsive Design
- [ ] Test on desktop (1920px+)
- [ ] Test on laptop (1366px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px)
- [ ] Verify mobile menu works
- [ ] Check all images scale properly

#### Browser Compatibility
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari
- [ ] Mobile Chrome

#### Performance
- [ ] Run `npm run build` successfully
- [ ] Check build output for errors
- [ ] Test production build locally: `npm start`
- [ ] Run Lighthouse audit (aim for 90+ scores)

### Phase 6: SEO & Accessibility (10 minutes)

#### SEO
- [ ] Verify all meta tags present
- [ ] Check page titles are descriptive
- [ ] Ensure images have alt text (if added)
- [ ] Test with Google's Rich Results Test

#### Accessibility
- [ ] All buttons have aria-labels
- [ ] Navigation is keyboard accessible
- [ ] Focus states are visible
- [ ] Color contrast is sufficient
- [ ] Screen reader friendly

### Phase 7: Pre-Deployment (10 minutes)

#### Code Quality
- [ ] Run `npm run lint` - fix any errors
- [ ] Remove any console.logs
- [ ] Remove any TODO comments
- [ ] Check for hardcoded test data

#### Git Setup
- [ ] Initialize git: `git init`
- [ ] Review `.gitignore`
- [ ] Add files: `git add .`
- [ ] Initial commit: `git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Add remote: `git remote add origin <url>`
- [ ] Push: `git push -u origin main`

#### Environment Variables
- [ ] Copy `.env.example` to `.env.local` if needed
- [ ] Add any sensitive values
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Document required env vars

### Phase 8: Deployment (15 minutes)

#### Vercel Deployment
- [ ] Go to [vercel.com/new](https://vercel.com/new)
- [ ] Sign in with GitHub
- [ ] Import your repository
- [ ] Verify auto-detected settings
- [ ] Add environment variables (if any)
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Test deployed site thoroughly

#### Post-Deployment
- [ ] Test all pages on live site
- [ ] Verify MIDI files load
- [ ] Check all links work
- [ ] Test on mobile device
- [ ] Run Lighthouse on production URL

#### Custom Domain (Optional)
- [ ] Purchase domain (Namecheap, Google Domains, etc.)
- [ ] Add domain in Vercel dashboard
- [ ] Configure DNS records
- [ ] Wait for SSL certificate
- [ ] Verify domain works

### Phase 9: Monitoring & Analytics (10 minutes)

#### Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Add tracking code to `app/layout.tsx`
- [ ] Test analytics tracking
- [ ] Set up goals/events

#### Performance Monitoring
- [ ] Enable Vercel Analytics
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (optional)

#### Maintenance
- [ ] Set calendar reminder for dependency updates
- [ ] Plan content update schedule
- [ ] Document backup procedures

## 🎯 Quick Reference: Files to Update

### Must Update
1. `app/about/page.tsx` - Your personal information
2. `components/Footer.tsx` - Contact links
3. `content/musicSamples.json` - Music sample metadata
4. `content/resources.json` - Resource links
5. `public/midi/` - Add your MIDI files

### Should Update
6. `app/layout.tsx` - Meta tags and SEO
7. `README.md` - Update contact info at bottom
8. `public/papers/` - Add your paper PDF
9. `public/images/` - Add images and diagrams

### Optional Updates
10. `tailwind.config.ts` - Color customization
11. `app/page.tsx` - Home page text
12. `app/research/page.tsx` - Technical details
13. `vercel.json` - Advanced configuration

## 📝 Content Placeholders to Replace

Search for these in your code editor and replace:

- `[Your Name]`
- `[Your Background]`
- `[Current Position]`
- `[Previous Position]`
- `[Institution/Company]`
- `[Degree]`
- `[Field]`
- `[University]`
- `[Year]`
- `your.email@example.com`
- `https://github.com`
- `https://linkedin.com`
- `@yourusername`

## ✅ Launch Criteria

Your site is ready to launch when:

- [ ] All MIDI samples play correctly
- [ ] No placeholder text remains (`[` brackets)
- [ ] All links work (no 404s)
- [ ] Site is responsive on all devices
- [ ] Build completes without errors
- [ ] Lighthouse scores > 90
- [ ] Personal information is accurate
- [ ] Contact forms/links work

## 🚀 Post-Launch Tasks

After launching:

1. **Share Your Work**
   - [ ] Post on LinkedIn
   - [ ] Share on Twitter/X
   - [ ] Add to portfolio
   - [ ] Email to interested parties

2. **Gather Feedback**
   - [ ] Ask colleagues to review
   - [ ] Test with different users
   - [ ] Collect suggestions

3. **Iterate**
   - [ ] Fix any reported issues
   - [ ] Add new content
   - [ ] Improve based on analytics

## 🆘 Common Issues & Solutions

### Build Fails
```bash
rm -rf node_modules .next
npm install
npm run build
```

### MIDI Won't Play
- Check file paths match in `musicSamples.json`
- Verify files are in `public/midi/`
- Try different browser (Chrome works best)

### Deployment Failed
- Check Vercel deployment logs
- Verify build works locally
- Check for environment variable issues

### Styling Broken
- Clear browser cache
- Verify Tailwind compilation
- Check for CSS syntax errors

## 📚 Resources

- [Full Documentation](README.md)
- [Quick Start Guide](QUICKSTART.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)

---

**Estimated Total Time**: 2-3 hours for complete setup and deployment

**Questions?** Refer to README.md or open an issue on GitHub.

Good luck with your launch! 🎵🚀

