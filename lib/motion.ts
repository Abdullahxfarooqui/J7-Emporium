/**
 * Framer Motion Animation Variants
 * Consistent animation presets for J7 Emporium ecosystem
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'left') => {
  const directions = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: -60 },
    down: { x: 0, y: 60 }
  };
  
  return {
    initial: { opacity: 0, ...directions[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }
  };
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
  transition: { duration: 0.3 }
};
