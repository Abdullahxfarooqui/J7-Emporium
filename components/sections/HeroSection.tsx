'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Hero Section - Full-bleed cinematic background with parallax
 * Features 4K J7 Emporium image, gradient overlay, parallax effects, and smooth animations
 */
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = heroRef.current;
    const x = (clientX / offsetWidth - 0.5) * 20; // -10 to 10
    const y = (clientY / offsetHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden" 
      data-testid="hero-section"
    >
      {/* Cinematic Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: backgroundY,
          opacity
        }}
      >
        {/* Background Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: mounted ? 1.05 : 1 }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            transition: 'transform 0.3s ease-out'
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/assets/images/j7-emporium-bg.webp"
            alt="J7 Emporium - Luxury Architecture in B-17 Islamabad"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Elegant Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(rgba(10, 10, 10, 0.65), rgba(10, 10, 10, 0.85))'
          }}
        />
      </motion.div>

      {/* Content - Centered with Depth */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-20 container-j7">
        {/* Main Heading with Gradient - Enhanced Entry Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sora font-extrabold leading-tight mb-4"
            style={{
              background: 'linear-gradient(120deg, #0a3d23, #0f6039, #1a8b52)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(15, 96, 57, 0.4)'
            }}
          >
            J7 Emporium
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-inter text-[#f5f5f5] font-light tracking-wide"
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
            }}
          >
            Where Innovation Meets Elegance
          </motion.p>
        </motion.div>

        {/* Subtext with Location */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-sm md:text-base lg:text-lg font-inter text-[#f5f5f5]/90 mb-8 max-w-2xl"
          style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          A breathtaking 30-storey marvel in Sector B-17, Islamabad. 
          <br className="hidden md:block" />
          Premium residential and commercial spaces with world-class amenities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-base px-8 py-4 rounded-lg font-semibold text-base md:text-lg"
              style={{
                background: 'linear-gradient(120deg, #0a3d23, #0f6039, #1a8b52)',
                color: '#ffffff',
                boxShadow: '0 8px 30px rgba(15, 96, 57, 0.5)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Explore Now
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-base px-8 py-4 rounded-lg font-semibold text-base md:text-lg border-2 bg-transparent"
              style={{
                borderColor: '#1a8b52',
                color: '#f5f5f5',
                backdropFilter: 'blur(10px)',
                background: 'rgba(15, 96, 57, 0.15)',
                boxShadow: '0 4px 20px rgba(15, 96, 57, 0.3)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-[#1a8b52] rounded-full flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-2 bg-[#1a8b52] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
