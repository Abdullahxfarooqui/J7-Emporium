# J7 Emporium - Quick Style Reference

## 🎨 Color Usage Guide

### When to use each color:

**Backgrounds:**
```jsx
// Main page background
<section className="bg-bg-primary">

// Alternate sections (for contrast)
<section className="bg-bg-secondary">

// Cards and elevated surfaces
<div className="bg-surface-primary">
<div className="card-premium"> // Includes glassmorphism
```

**Text:**
```jsx
// Page/section headings (use with gradient)
<h1 className="heading-gradient">

// Card headings, important text
<h3 className="text-text-primary">

// Body paragraphs, descriptions
<p className="text-text-body">

// Secondary info, metadata, hints
<span className="text-text-muted">
```

**Accents:**
```jsx
// Icons, decorative elements
<Icon className="text-primary-mid" />

// Gold highlights (use sparingly!)
<span className="text-accent-gold">

// Hover states
<a className="hover:text-accent-gold">
```

---

## 📐 Typography Guide

### Headings
```jsx
// Hero/Main heading
<h1 className="heading-gradient text-5xl md:text-6xl lg:text-7xl font-sora font-extrabold">

// Section heading
<h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-sora font-bold">

// Subsection heading
<h3 className="text-2xl md:text-3xl font-sora font-semibold text-text-primary">

// Card/Component heading
<h4 className="text-lg md:text-xl font-sora font-semibold text-text-primary">
```

### Body Text
```jsx
// Lead paragraph
<p className="text-lg md:text-xl font-inter text-text-body leading-relaxed">

// Regular paragraph
<p className="text-base font-inter text-text-body leading-relaxed">

// Small text, captions
<p className="text-sm font-inter text-text-muted">

// Extra small (disclaimers, etc)
<p className="text-xs font-inter text-text-muted">
```

---

## 🧩 Component Patterns

### Section Container
```jsx
<section className="py-20 lg:py-32 bg-bg-primary">
  <div className="container-j7">
    {/* Content */}
  </div>
</section>
```

### Section Header (centered)
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
  className="text-center mb-16"
>
  <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-6">
    Section Title
  </h2>
  <p className="text-lg font-inter text-text-body max-w-2xl mx-auto">
    Section description
  </p>
  <div className="w-24 h-1 bg-gradient-to-r from-primary-start via-primary-mid to-primary-end mx-auto rounded-full mt-6" />
</motion.div>
```

### Premium Card
```jsx
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  className="card-premium p-6 lg:p-8"
>
  {/* Card content */}
</motion.div>
```

### Primary Button
```jsx
<motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="btn-base btn-primary group flex items-center gap-2"
>
  <span>Button Text</span>
  <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</motion.button>
```

### Secondary Button
```jsx
<motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="btn-base btn-secondary"
>
  Button Text
</motion.button>
```

### Form Input
```jsx
<input
  type="text"
  className="input-base focus:border-primary-mid focus:ring-2 focus:ring-primary-mid/20"
  placeholder="Enter text"
/>
```

### Icon with Gradient Background
```jsx
<div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
</div>
```

### Link with Gradient Underline
```jsx
<a href="/" className="link-gradient-underline text-text-body hover:text-text-primary">
  Link Text
</a>
```

---

## ✨ Animation Patterns

### Standard Fade In
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
```

### Staggered Items (with delay)
```jsx
transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
```

### Hover Scale
```jsx
whileHover={{ scale: 1.02, y: -2 }}
```

### Tap Scale
```jsx
whileTap={{ scale: 0.98 }}
```

### Pulse Animation (for highlights)
```jsx
animate={{ scale: [1, 1.1, 1] }}
transition={{ repeat: Infinity, duration: 2 }}
```

---

## 🎯 Spacing Guidelines

### Section Padding
```jsx
// Desktop & mobile
className="py-20 lg:py-32"
```

### Container Padding
```jsx
// Handled by container-j7 class
// No additional padding needed
```

### Card Padding
```jsx
className="p-6 lg:p-8"  // Standard card
className="p-8 lg:p-12" // Large card (forms)
```

### Gap Between Items
```jsx
className="gap-4"      // Tight spacing
className="gap-8"      // Standard spacing
className="gap-12"     // Loose spacing
className="gap-16"     // Section-level spacing
```

---

## 🚫 Don'ts

### Never Use:
- ❌ `bg-white` (use `bg-surface-primary` or `card-premium`)
- ❌ `bg-black` (use `bg-bg-primary`)
- ❌ `text-black` (use `text-text-primary`)
- ❌ `text-gray-*` (use `text-text-body` or `text-text-muted`)
- ❌ `font-sans` (use `font-sora` or `font-inter`)
- ❌ Bright neon colors
- ❌ Sharp animations (duration < 0.3s)
- ❌ Linear easing (always use cubic-bezier)

### Color Contrast Rules:
- ✅ White headings on dark backgrounds
- ✅ `text-text-body` (#d4d7da) for paragraphs on dark
- ✅ Never light text on light backgrounds
- ✅ Test all text for 4.5:1 minimum contrast

---

## 📱 Responsive Breakpoints

```jsx
// Mobile first approach
className="text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-6 lg:px-8"
className="py-12 lg:py-20"
```

**Tailwind Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔧 Common Customizations

### Adding a New Section
1. Use alternating backgrounds (`bg-bg-primary` / `bg-bg-secondary`)
2. Add section header with gradient title
3. Use `container-j7` wrapper
4. Apply motion animations
5. Maintain consistent spacing (`py-20 lg:py-32`)

### Adding a New Page
1. Start with `bg-bg-primary` background
2. Add `pt-24` to account for fixed header
3. Use `container-j7` for content
4. Add gradient heading
5. Style with `card-premium` for content blocks

### Customizing Colors
Edit `/app/globals.css` CSS custom properties:
```css
:root {
  --bg-primary: #0e1418;     /* Main background */
  --text-primary: #ffffff;    /* Headings */
  --text-body: #d4d7da;      /* Body text */
  /* etc... */
}
```

Then update `/tailwind.config.js` to match.

---

## 💡 Pro Tips

1. **Gradient Headings**: Always use `heading-gradient` for section titles
2. **Hover States**: Add gold (`accent-gold`) or glow effects
3. **Icons**: Use `primary-mid` or `accent-gold` for icon colors
4. **Shadows**: Use `shadow-premium` for cards, `shadow-glow` for highlights
5. **Animations**: Keep duration at 0.8s for premium feel
6. **Glassmorphism**: Use `card-premium` or `glass-panel` classes
7. **Buttons**: Always add hover scale + icon animations
8. **Forms**: Use `input-base` with focus states
9. **Links**: Add `link-gradient-underline` for animated underlines
10. **Spacing**: Maintain generous whitespace - don't cram content

---

**Quick Copy Templates in `/components/templates/` folder (TODO)**

_For full documentation, see `LUXURY_REDESIGN_COMPLETE.md`_
