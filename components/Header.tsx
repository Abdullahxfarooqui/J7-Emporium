'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Premium 4K Logo Integration
 * Features:
 * - 4K optimized logo with responsive scaling
 * - Brand color consistency (#0E4A40)
 * - Smooth scroll transitions and hover effects
 * - Retina/4K display optimization with proper rendering
 * - Accessibility compliant with descriptive alt text
 * - Performance optimized with Next.js Image component
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: isScrolled 
          ? 'rgba(12, 59, 52, 0.96)' 
          : 'rgba(12, 59, 52, 0.80)',
        backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(10px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: isScrolled ? '1px solid rgba(26, 139, 82, 0.3)' : '1px solid transparent',
      }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'shadow-2xl shadow-[#0C3B34]/25' : 'shadow-lg shadow-black/10'
      }`}
      data-testid="header"
    >
      <nav className="container-j7 py-4 md:py-5 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Premium J7 Emporium Logo - Larger, More Prominent */}
          <Link href="/" className="relative z-50 pl-1.5 md:pl-2 lg:pl-4">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center cursor-pointer relative"
              style={{
                // Subtle gradient overlay behind logo for enhanced visibility
                background: 'linear-gradient(to right, rgba(11, 46, 41, 0.3) 0%, transparent 100%)',
                borderRadius: '10px',
                padding: '8px 16px 8px 10px',
              }}
            >
              <div className="relative h-16 w-auto sm:h-18 md:h-[80px] lg:h-[92px] xl:h-[104px] flex items-center">
                <Image
                  src="/assets/images/j7-logo.jpg"
                  alt="J7 Emporium Logo"
                  width={400}
                  height={104}
                  priority
                  quality={100}
                  className="h-full w-auto object-contain"
                  style={{
                    height: 'auto',
                    maxHeight: '104px',
                    width: 'auto',
                    minWidth: '240px',
                    objectFit: 'contain',
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    // Enhanced visibility with subtle brightness boost and refined shadow
                    filter: isScrolled 
                      ? 'brightness(1.10) contrast(1.04) drop-shadow(0 3px 14px rgba(0, 0, 0, 0.45))' 
                      : 'brightness(1.08) contrast(1.03) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.35))',
                    transition: 'filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1440px) 360px, 400px"
                  onError={(e) => {
                    // Fallback to PNG logo if JPG fails
                    console.warn('JPG logo failed to load, using PNG fallback');
                    const target = e.currentTarget;
                    target.src = '/assets/images/j7-logo.png';
                  }}
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Balanced Spacing & Alignment */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8 pr-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="font-inter font-medium text-sm text-[#f5f5f5] hover:text-[#1a8b52] cursor-pointer transition-all duration-300 hover:drop-shadow-md">
                  {link.label}
                </span>
              </Link>
            ))}

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-lg font-semibold text-sm ml-2"
                style={{
                  background: 'linear-gradient(120deg, #0a3d23, #0f6039, #1a8b52)',
                  color: '#ffffff',
                  boxShadow: '0 4px 16px rgba(15, 96, 57, 0.45)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#f5f5f5] hover:text-[#1a8b52] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-6 p-6 glass-panel space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-inter font-medium text-base text-text-body hover:text-text-primary py-2 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full btn-base btn-primary mt-4">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
