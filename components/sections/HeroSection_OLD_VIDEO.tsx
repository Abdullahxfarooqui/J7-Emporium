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

  if (!mounted) return null;

  return (
    <motion.section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/assets/images/j7-emporium-bg.webp"
          alt="J7 Emporium Background"
          fill
          priority
          quality={100}
          className="object-cover"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="container-j7 relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 heading-gradient"
        >
          J7 Emporium
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto"
        >
          Experience luxury living in Islamabad's premier mixed-use development
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-base btn-primary text-lg px-10 py-4"
            >
              Explore Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
