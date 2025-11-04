# 🏢 J7 Emporium - Luxury Real Estate Platform

> A sophisticated 30-storey architectural masterpiece redefining luxury living in Islamabad's prestigious Sector B-17. This premium website showcases world-class residential and commercial spaces with cutting-edge amenities.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Features

### 🎯 Core Pages
- **Home** - Hero section, stats, amenities (12 facilities), features, team highlight, testimonials
- **About** - Company story, core values, mission/vision/values cards, investment process, architectural showcase
- **Our Team** - Leadership profiles with circular images, executive spotlight, culture section, interactive cards
- **Contact** - Comprehensive form, office info cards, newsletter subscription, social media links
- **Careers** - Job opportunities and company culture (expandable)
- **Blog** - Latest updates and insights (expandable)

### 🎨 Design System
- **Color Palette**: 
  - Primary: Emerald-Teal gradient (#0f6039 → #1a8b52, emerald-500 → teal-600)
  - Background: Rich dark theme (#0D1117, #111827, #1a1f26)
  - Accents: Glass morphism, gradient overlays, soft glows
- **Typography**: 
  - Headings: Sora (bold, tracking-tight)
  - Body: Inter (leading-relaxed)
  - Sizes: Responsive scaling (text-4xl → text-8xl)
- **Animations**: 
  - Framer Motion scroll triggers
  - Staggered fade-ins
  - Hover micro-interactions (scale, lift, glow)
  - Parallax effects
  - Shimmer and gradient animations

### 🏗️ Key Sections

#### Home Page
- Cinematic hero with animated badge
- 4 key statistics cards
- About preview with floating badge
- **12 Amenities**: Fitness Center, Swimming Pool, Spa & Wellness, Smart Parking, Rooftop Lounge, Kids Play Area, 24/7 Security, High-Speed WiFi, Food Court, Shopping Mall, Business Center, Garden Spaces
- 4 premium features with gradients
- Team highlight carousel
- 3 client testimonials
- Powerful CTA section

#### About Page
- Parallax hero with scroll indicator
- Our Story with floating stats badge (30 storeys)
- 4 Core Values cards with gradient icons
- **Enhanced Mission/Vision/Values** cards with numbered badges, bullet points, unique color schemes (emerald, blue, violet)
- 4-step investment process
- Professional architectural statement with decorative frames
- Registration CTA

#### Our Team Page
- Full-screen hero with particle background
- **Team grid**: 5 members with circular images, expertise descriptions, social icons (LinkedIn, Twitter)
- **Leadership spotlight**: Horizontal cards for Chairman and CEO with large images and philosophy statements
- **Enhanced culture section**: 3 value cards with stats badges (25+ Years, 100+ Projects, 50K+ Clients), unique gradients, key features grid
- Motivational CTA with dual buttons (Join Our Team, Get in Touch)

#### Contact Page
- Dramatic hero with animated elements
- 3 clickable info cards (Office Address, Phone with tel: link, Email with mailto: link)
- Comprehensive form: name, email, phone, city, contact mode radio buttons (Phone/WhatsApp/Email), subject, message
- Our Head Office section with inspirational quote
- Complete footer: Quick Links, Contact Info, Newsletter subscription, Social media icons (Facebook, Instagram, YouTube)

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.5.6** - App Router, React Server Components, Turbopack
- **React 19.1.0** - Latest features, hooks, functional components
- **TypeScript 5** - Type safety and enhanced developer experience

### Styling & UI
- **Tailwind CSS v4** - Utility-first styling with custom dark theme
- **Framer Motion 12.23.24** - Advanced animations and interactions
- **Lucide React 0.546.0** - Beautiful, consistent icon system
- **next/image** - Optimized image loading with lazy loading

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Turbopack** - Ultra-fast bundler for Next.js 15

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/J7-Emporium.git
cd J7-Emporium
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Server will start on [http://localhost:3001](http://localhost:3001) (default port: 3001)

4. **Build for production**
```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create optimized production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint checks

## 📁 Project Structure

```
J7-Emporium/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── team/page.tsx         # Our Team page
│   ├── contact/page.tsx      # Contact page
│   ├── careers/page.tsx      # Careers page
│   ├── blog/page.tsx         # Blog page
│   ├── layout.tsx            # Root layout with navigation
│   └── globals.css           # Global styles & animations
├── components/               # Reusable React components (if any)
├── public/
│   └── assets/
│       └── images/           # Image assets
│           ├── team/         # Team member photos
│           └── ...           # Other images
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.ts            # Next.js configuration
```

## 🎨 Design Highlights

### Animation System
- **Scroll-triggered animations** using Framer Motion `whileInView`
- **Staggered children** for sequential reveals (0.1-0.2s delays)
- **Hover states**: Scale (1.02-1.05), lift (y: -8 to -12), glow effects
- **Custom keyframes**: shimmer, gradient, fade-in-up animations

### Responsive Breakpoints
- Mobile: Default (< 640px)
- Tablet: sm (640px+), md (768px+)
- Desktop: lg (1024px+), xl (1280px+), 2xl (1536px+)

### Color Tokens
```css
/* Primary Gradients */
from-emerald-500 to-teal-600
from-[#0f6039] to-[#1a8b52]

/* Dark Backgrounds */
bg-[#0D1117]  /* Main background */
bg-[#1a1f26]  /* Card background */
bg-[#151a20]  /* Gradient stops */

/* Accent Colors */
emerald-400, teal-400  /* Highlights */
gray-300, gray-400     /* Text */
```

## 🖼️ Image Assets

All images stored in `public/assets/images/`:
- `j7-emporium-bg.webp` - Main architectural background (132KB)
- `team/*.webp` - 5 team member professional photos
- Other supporting images for various sections

## 📦 Dependencies

### Production
```json
{
  "next": "15.5.6",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "framer-motion": "12.23.24",
  "lucide-react": "0.546.0"
}
```

### Development
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "15.5.6",
  "postcss": "^8",
  "tailwindcss": "^4.0.0"
}
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
- **Netlify**: Configure build command: `npm run build`
- **AWS/Azure**: Use Docker or native Node.js deployment
- **Self-hosted**: Run `npm start` after building

## 📞 Contact Information

- **Email**: thej7emporium@gmail.com
- **Phone**: +92 337 77 77 700
- **Address**: Plot 1, Block C, Multi Gardens B-17, Islamabad, Pakistan
- **Website**: [J7 Emporium](#)

## 🤝 Contributing

This is a private project for J7 Emporium. For inquiries about modifications or enhancements, please contact the development team.

## 📄 License

© 2025 J7 Emporium – All rights reserved.

This website and its content are proprietary to J7 Emporium.

---

**Built with ❤️ using Next.js 15, React 19, and Tailwind CSS v4**
