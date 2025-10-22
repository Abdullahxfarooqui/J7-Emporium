# Theme System Guide - J7 Emporium

## Quick Reference

### Using the Theme Toggle
Click the Sun/Moon icon in the header to switch between dark and light modes. Your preference is automatically saved and will persist across sessions.

---

## For Developers

### Accessing Theme State

```tsx
'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

### Using CSS Variables (Recommended)

CSS variables automatically adapt to the active theme:

```css
.my-card {
  background: var(--bg-card);
  color: var(--text-body);
  border: 1px solid var(--text-muted);
}

.my-button {
  background: var(--primary-gradient);
  color: var(--text-primary);
}
```

### Using Tailwind Classes

Tailwind classes defined with CSS variables also work:

```tsx
<div className="bg-surface-primary text-text-body border border-text-muted">
  Content automatically themed
</div>
```

---

## Available CSS Variables

### Dark Mode (`data-theme="dark"`)
```css
--bg-primary: #0e1418;      /* Main background */
--bg-surface: #182228;      /* Elevated surfaces */
--bg-card: #1c252b;         /* Card components */
--bg-footer: #0a0e10;       /* Footer background */

--text-primary: #ffffff;    /* Headings */
--text-body: #d4d7da;       /* Body text */
--text-muted: #9ba1a6;      /* Subtle text */

--primary-gradient: linear-gradient(120deg, #0f5132 0%, #1a7a4a 40%, #25a46d 100%);
--primary-solid: #1a7a4a;

--accent-gold: #c9a64d;     /* Gold accent */
```

### Light Mode (`data-theme="light"`)
```css
--bg-primary: #f8f9fa;      /* Main background */
--bg-surface: #ffffff;      /* Elevated surfaces */
--bg-card: #ffffff;         /* Card components */
--bg-footer: #e9ecef;       /* Footer background */

--text-primary: #1a1d20;    /* Headings */
--text-body: #495057;       /* Body text */
--text-muted: #6c757d;      /* Subtle text */

--primary-gradient: linear-gradient(120deg, #0f5132 0%, #1a7a4a 40%, #25a46d 100%);
--primary-solid: #1a7a4a;

--accent-gold: #b8941f;     /* Gold accent (darker for light bg) */
```

---

## Available Tailwind Classes

Defined in `tailwind.config.js`:

```tsx
// Backgrounds
bg-bg-primary
bg-surface-primary
bg-surface-secondary
bg-surface-tertiary

// Text
text-text-primary
text-text-body
text-text-muted

// Colors
text-primary-mid
text-accent-gold
bg-primary-gradient

// And more...
```

---

## Adding Theme Support to New Components

### Method 1: CSS Variables (Most Flexible)
```css
/* styles.module.css */
.container {
  background: var(--bg-surface);
  color: var(--text-body);
  padding: var(--space-lg);
}

.heading {
  color: var(--text-primary);
  font-family: 'Sora', sans-serif;
}
```

### Method 2: Tailwind Classes
```tsx
<div className="bg-surface-primary text-text-body p-8">
  <h2 className="text-text-primary font-sora font-bold">
    Heading
  </h2>
</div>
```

### Method 3: Conditional Rendering (Use Sparingly)
```tsx
'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemedComponent() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme === 'dark' ? '#0e1418' : '#f8f9fa',
      }}
    >
      Content
    </div>
  );
}
```

---

## Best Practices

### ✅ DO:
- Use CSS variables for all color values
- Test components in both themes
- Ensure sufficient contrast in both modes
- Use semantic variable names (--bg-primary, not --color-dark)

### ❌ DON'T:
- Hardcode color hex values
- Use conditional theme rendering excessively
- Forget to test hover/active states
- Mix theme systems (use CSS vars OR Tailwind, not both in same element)

---

## Theme Persistence

The theme preference is stored in `localStorage` with the key `j7-theme`:

```typescript
// Read
const savedTheme = localStorage.getItem('j7-theme'); // 'dark' | 'light'

// Write (handled automatically by ThemeContext)
localStorage.setItem('j7-theme', 'dark');
```

The theme is applied via the `data-theme` attribute on the root `<html>` element:

```html
<html data-theme="dark">
  <!-- or -->
<html data-theme="light">
```

---

## Troubleshooting

### Colors not changing when toggling theme
- Ensure component is using CSS variables or theme-aware Tailwind classes
- Check that you're not hardcoding color values
- Verify `data-theme` attribute is being set on `<html>`

### Flash of wrong theme on page load
- This is normal and handled by the `mounted` state in ThemeContext
- The theme loads from localStorage after hydration

### Theme not persisting
- Check browser localStorage is enabled
- Clear cache and try again
- Verify ThemeProvider is wrapping your app in `layout.tsx`

---

## File Locations

- **Context:** `/contexts/ThemeContext.tsx`
- **Toggle Component:** `/components/ThemeToggle.tsx`
- **CSS Variables:** `/app/globals.css`
- **Tailwind Config:** `/tailwind.config.js`
- **Root Layout:** `/app/layout.tsx`

---

## Example: Creating a Themed Card

```tsx
'use client';

import { motion } from 'framer-motion';

export default function ThemedCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-surface-secondary border border-text-muted/20 rounded-xl p-6 transition-all duration-300"
    >
      <h3 className="text-text-primary font-sora font-bold text-xl mb-2">
        {title}
      </h3>
      <p className="text-text-body font-inter">
        {description}
      </p>
    </motion.div>
  );
}
```

This card will automatically adapt to both dark and light themes! ✨

---

**Last Updated:** October 20, 2025
