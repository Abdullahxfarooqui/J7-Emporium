# J7 Emporium - Deployment Guide

This guide will help you deploy the J7 Emporium website to production.

## 📋 Pre-Deployment Checklist

### 1. Media Assets
- [ ] Upload hero video to `/public/videos/hero-video.mp4`
- [ ] Add architectural renders to `/public/images/renders/`
- [ ] Add construction photos to `/public/images/construction/`
- [ ] Add product images to `/public/images/products/`
- [ ] Add logo files to `/public/images/logo/`

### 2. Content Updates
- [ ] Update contact information in Footer component
- [ ] Update contact information in Contact page
- [ ] Review and update all text content
- [ ] Add actual PDF files for brochure and floor plan
- [ ] Update social media links

### 3. Functionality
- [ ] Set up email service for contact form
- [ ] Configure Google Maps API for location section
- [ ] Set up newsletter subscription service
- [ ] Test all download links
- [ ] Verify all navigation links work

### 4. SEO & Performance
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add Open Graph images
- [ ] Optimize all images (use Next.js Image component)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Test page load speed
- [ ] Run Lighthouse audit

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via CLI**:
```bash
vercel
```

Or **Deploy via GitHub**:
- Push code to GitHub
- Connect repository to Vercel
- Automatic deployments on push

**Environment Variables** (if needed):
- Add in Vercel dashboard under Settings → Environment Variables

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 3: Custom Server (VPS/Dedicated)

1. **Requirements**:
   - Node.js 18+ installed
   - PM2 for process management
   - Nginx for reverse proxy
   - SSL certificate

2. **Build the application**:
```bash
npm run build
```

3. **Install PM2**:
```bash
npm install -g pm2
```

4. **Start the application**:
```bash
pm2 start npm --name "j7-emporium" -- start
```

5. **Configure Nginx**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **Set up SSL** (using Certbot):
```bash
sudo certbot --nginx -d yourdomain.com
```

---

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Email Service (e.g., SendGrid, Mailgun)
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM=noreply@j7emporium.com
EMAIL_TO=info@j7emporium.com

# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key

# Newsletter Service (e.g., Mailchimp)
NEWSLETTER_API_KEY=your_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

**Important**: Never commit `.env.local` to version control!

---

## 📊 Performance Optimization

### Image Optimization
Replace placeholder divs with actual images using Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/render.jpg"
  alt="J7 Emporium"
  width={1200}
  height={800}
  quality={90}
  priority={false}
/>
```

### Video Optimization
- Use compressed video formats (H.264)
- Provide multiple formats (mp4, webm)
- Add poster image for initial load
- Consider using a CDN for video delivery

### Code Splitting
Next.js automatically code-splits. To optimize further:
- Use dynamic imports for heavy components
- Lazy load sections below the fold

---

## 🔒 Security Checklist

- [ ] Set up CORS properly
- [ ] Implement rate limiting on contact form
- [ ] Add CAPTCHA to forms (e.g., Google reCAPTCHA)
- [ ] Sanitize user inputs
- [ ] Set up security headers in next.config.ts
- [ ] Keep dependencies updated
- [ ] Use HTTPS in production

---

## 📈 Analytics Setup

### Google Analytics 4

1. Create GA4 property
2. Add measurement ID to `.env.local`
3. Install analytics package:
```bash
npm install @next/third-parties
```

4. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## 🧪 Testing Before Deployment

### 1. Cross-Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 2. Mobile Testing
Test on:
- iOS Safari
- Chrome Mobile
- Various screen sizes

### 3. Performance Testing
Run Lighthouse audit:
```bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

Target scores:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

## 🔄 Post-Deployment

### 1. Monitor Performance
- Set up error tracking (Sentry, LogRocket)
- Monitor page load times
- Track user behavior

### 2. Regular Updates
- Keep dependencies updated
- Monitor security advisories
- Update content regularly

### 3. Backups
- Set up automated backups
- Keep database backups (if applicable)
- Version control all code changes

---

## 📞 Support

For deployment issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Vercel documentation: https://vercel.com/docs
- GitHub Issues (if using version control)

---

## ✅ Final Deployment Command

Once everything is ready:

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. Test production build locally
npm start

# 4. Deploy to Vercel
vercel --prod
```

---

**Ready to go live? Follow this checklist and deploy with confidence!**
