/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0e1418',
        'bg-secondary': '#101820',
        'bg-surface': '#182228',
        'bg-card': '#1c252b',
        'bg-footer': '#0a0e10',
        'surface-primary': '#182228',
        'surface-secondary': '#1c252b',
        'surface-tertiary': '#212a31',
        'text-primary': '#ffffff',
        'text-body': '#d4d7da',
        'text-muted': '#9ba1a6',
        'primary-start': '#0a3d23',
        'primary-mid': '#0f6039',
        'primary-end': '#1a8b52',
        'primary-solid': '#0f6039',
        'accent-gold': '#c9a64d',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(120deg, #0a3d23 0%, #0f6039 50%, #1a8b52 100%)',
      },
      boxShadow: {
        'premium': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 30px rgba(15, 96, 57, 0.4)',
        'glow-lg': '0 0 40px rgba(15, 96, 57, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(15, 96, 57, 0.1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-out': 'cubic-bezier(0.0, 0, 0.2, 1)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
    },
  },
  plugins: [],
}
