'use client';

import React, { useEffect, useRef } from 'react';
import { fadeUpOnScroll, slideInFromLeft, slideInFromRight, staggerReveal, scaleUpOnScroll } from '@/lib/gsapAnimations';

/**
 * Animation Demo Page
 * Demonstrates all GSAP scroll-triggered animations
 */
export default function AnimationDemoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero section fade up
    if (heroRef.current) {
      fadeUpOnScroll(heroRef.current, { duration: 1 });
    }

    // Slide from left
    if (leftRef.current) {
      slideInFromLeft(leftRef.current);
    }

    // Slide from right
    if (rightRef.current) {
      slideInFromRight(rightRef.current);
    }

    // Scale up
    if (scaleRef.current) {
      scaleUpOnScroll(scaleRef.current);
    }

    // Stagger cards
    if (cardsRef.current.length > 0) {
      staggerReveal(cardsRef.current, { stagger: 0.2 });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0e1418] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div ref={heroRef} className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">
            GSAP Animation Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scroll down to see scroll-triggered animations in action
          </p>
          <div className="animate-bounce text-emerald-400">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Slide From Left */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div ref={leftRef} className="max-w-2xl">
          <div className="bg-gray-800/50 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-emerald-400">Slide From Left</h2>
            <p className="text-gray-300 leading-relaxed">
              This section slides in from the left when it enters the viewport. 
              The animation uses GSAP's fromTo method with ScrollTrigger.
            </p>
          </div>
        </div>
      </section>

      {/* Slide From Right */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div ref={rightRef} className="max-w-2xl">
          <div className="bg-gray-800/50 border border-teal-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-teal-400">Slide From Right</h2>
            <p className="text-gray-300 leading-relaxed">
              This section slides in from the right with smooth easing. 
              Perfect for alternating content sections.
            </p>
          </div>
        </div>
      </section>

      {/* Scale Up */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div ref={scaleRef} className="max-w-2xl">
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-lime-400">Scale Up</h2>
            <p className="text-gray-300 leading-relaxed">
              This section scales up from 80% to 100% while fading in. 
              Creates a subtle zoom effect.
            </p>
          </div>
        </div>
      </section>

      {/* Staggered Cards */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Staggered Reveal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <div
                key={num}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                  {num}
                </div>
                <h3 className="text-xl font-semibold mb-2">Card {num}</h3>
                <p className="text-gray-400 text-sm">
                  This card animates with a stagger effect, creating a wave-like reveal.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Animation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-400 mb-2">✓ Scroll-Triggered</h3>
              <p className="text-gray-400 text-sm">
                All animations trigger dynamically as you scroll, not just on page load.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-400 mb-2">✓ Reversible</h3>
              <p className="text-gray-400 text-sm">
                Animations reverse smoothly when scrolling back up.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-400 mb-2">✓ Performance</h3>
              <p className="text-gray-400 text-sm">
                60fps animations using GPU-accelerated transforms.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-400 mb-2">✓ Responsive</h3>
              <p className="text-gray-400 text-sm">
                Works perfectly on all screen sizes and devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
