/**
 * GSAP Animation Utilities for J7 Emporium
 * 
 * This file contains reusable GSAP animation configurations
 * for scroll-triggered animations throughout the website.
 * 
 * Features:
 * - ScrollTrigger configurations
 * - Fade, slide, and scale animations
 * - Staggered reveals for content sections
 * - Responsive animation settings
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade up animation - Elements fade in and slide up on scroll
 * @param element - Target element(s) to animate
 * @param options - Animation options
 */
export const fadeUpOnScroll = (
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    yOffset?: number;
    trigger?: gsap.DOMTarget;
  }
) => {
  const { delay = 0, duration = 0.8, yOffset = 50, trigger } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: yOffset,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (element as gsap.DOMTarget),
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Fade in animation - Simple fade in on scroll
 * @param element - Target element(s) to animate
 * @param options - Animation options
 */
export const fadeInOnScroll = (
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    trigger?: gsap.DOMTarget;
  }
) => {
  const { delay = 0, duration = 0.6, trigger } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: trigger || (element as gsap.DOMTarget),
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Slide in from left animation
 * @param element - Target element(s) to animate
 * @param options - Animation options
 */
export const slideInFromLeft = (
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    xOffset?: number;
    trigger?: gsap.DOMTarget;
  }
) => {
  const { delay = 0, duration = 0.8, xOffset = -100, trigger } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: xOffset,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (element as gsap.DOMTarget),
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Slide in from right animation
 * @param element - Target element(s) to animate
 * @param options - Animation options
 */
export const slideInFromRight = (
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    xOffset?: number;
    trigger?: gsap.DOMTarget;
  }
) => {
  const { delay = 0, duration = 0.8, xOffset = 100, trigger } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: xOffset,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (element as gsap.DOMTarget),
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Scale up animation - Elements scale from small to normal on scroll
 * @param element - Target element(s) to animate
 * @param options - Animation options
 */
export const scaleUpOnScroll = (
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    scale?: number;
    trigger?: gsap.DOMTarget;
  }
) => {
  const { delay = 0, duration = 0.8, scale = 0.8, trigger } = options || {};

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (element as gsap.DOMTarget),
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Staggered reveal animation - Multiple elements animate in sequence
 * @param elements - Array of elements to animate
 * @param options - Animation options
 */
export const staggerReveal = (
  elements: gsap.TweenTarget,
  options?: {
    stagger?: number;
    duration?: number;
    yOffset?: number;
    trigger?: gsap.DOMTarget;
  }
) => {
  const { stagger = 0.15, duration = 0.8, yOffset = 50, trigger } = options || {};

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: yOffset,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || (elements as gsap.DOMTarget),
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Parallax effect - Element moves at different speed while scrolling
 * @param element - Target element to animate
 * @param options - Animation options
 */
export const parallaxEffect = (
  element: gsap.TweenTarget,
  options?: {
    yPercent?: number;
    trigger?: gsap.DOMTarget;
    scrub?: boolean | number;
  }
) => {
  const { yPercent = 20, trigger, scrub = true } = options || {};

  return gsap.fromTo(
    element,
    {
      yPercent: 0,
    },
    {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || (element as gsap.DOMTarget),
        start: 'top bottom',
        end: 'bottom top',
        scrub,
      },
    }
  );
};

/**
 * Reveal on scroll - Element reveals with clip-path animation
 * @param element - Target element to animate
 * @param options - Animation options
 */
export const revealOnScroll = (
  element: gsap.TweenTarget,
  options?: {
    delay?: number;
    duration?: number;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    trigger?: gsap.DOMTarget;
  }
) => {
  const { delay = 0, duration = 1, direction = 'bottom', trigger } = options || {};

  const clipPaths = {
    left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0)' },
    top: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
    bottom: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
  };

  const { from, to } = clipPaths[direction];

  return gsap.fromTo(
    element,
    {
      clipPath: from,
    },
    {
      clipPath: to,
      duration,
      delay,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: trigger || (element as gsap.DOMTarget),
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Refresh all ScrollTrigger instances
 * Useful after DOM updates or layout changes
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

/**
 * Kill all ScrollTrigger instances
 * Useful for cleanup on component unmount
 */
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
