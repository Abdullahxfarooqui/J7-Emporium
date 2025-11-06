'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

/**
 * Header Component - Premium Modern Design
 * 
 * Features:
 * - Seamless dark mode integration (#0D1117, #111827)
 * - Refined logo placement with balanced spacing
 * - Smooth scroll-based transitions (transparent → solid)
 * - Active page highlighting with gradient underline
 * - Glass morphism backdrop with subtle shadow
 * - Responsive mobile drawer with staggered animations
 * - Hover micro-interactions with scale and glow effects
 * - Professional typography and spacing hierarchy
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  // GSAP animation for mobile menu items
  useEffect(() => {
    if (isMobileMenuOpen && menuItemsRef.current.length > 0) {
      gsap.fromTo(
        menuItemsRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.25, // Faster: was 0.4
          stagger: 0.05,  // Faster: was 0.08
          ease: 'power2.out',
        }
      );
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/ecosphere360', label: 'EcoSphere360' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Journal' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ zIndex: 9999 }}
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-[0_1px_10px_rgba(0,0,0,0.4)] border-b border-gray-800/50' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <nav className="w-full mx-auto px-3 sm:px-6 md:max-w-7xl lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-2 max-w-full">
          {/* Logo Section - Clean Minimalistic */}
          <Link href="/" className="flex items-center group flex-shrink-0" style={{ zIndex: 100 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Image
                src="/assets/images/j7-logo.jpg"
                alt="J7 Emporium"
                width={120}
                height={40}
                priority
                className="rounded-md object-contain h-8 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Improved Layout */}
          <ul className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 flex-1 justify-center max-w-5xl mx-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <Link href={link.href}>
                    <span className={`relative text-sm lg:text-base font-medium tracking-normal whitespace-nowrap transition-all duration-200 cursor-pointer group/link ${
                      isActive ? 'text-emerald-400' : 'text-gray-300 hover:text-white'
                    }`}>
                      {link.label}
                      
                      {/* Active Indicator - Gradient Underline */}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLink"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover Indicator */}
                      {!isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 rounded-full" />
                      )}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* CTA Area - Desktop (Login + EcoSphere360) - Improved Layout */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
            {/* EcoSphere360 Tagline with Animated Gradient */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden xl:flex items-center gap-2 group relative"
            >
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap">Powered by</span>
              <motion.span
                className="text-sm font-bold relative whitespace-nowrap"
                style={{
                  background: 'linear-gradient(120deg, #10b981, #14b8a6, #fbbf24)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                EcoSphere360
              </motion.span>
            </motion.div>

            {/* Login Button - Refined Styling */}
            <a
              href="http://115.167.72.44:8002/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login"
              className="flex-shrink-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16,185,129,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-4 md:px-5 lg:px-6 xl:px-8 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm shadow-lg transition-all duration-300 whitespace-nowrap"
                style={{
                  letterSpacing: '0.05em',
                }}
              >
                Login
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Toggle - Always visible and clickable */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="flex md:hidden items-center justify-center p-2 rounded-lg bg-emerald-600 border-2 border-emerald-500 text-white hover:bg-emerald-500 transition-all duration-300 shadow-lg flex-shrink-0"
            aria-label="Toggle menu"
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - Covers entire viewport including header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed block md:hidden"
              style={{ 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9998, 
                backgroundColor: 'rgba(0, 0, 0, 0.95)' 
              }}
            />
            
            {/* Drawer - Mobile sidebar menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 h-screen w-80 max-w-[85vw] border-l-2 border-gray-700 shadow-2xl block md:hidden overflow-y-auto"
              style={{ 
                zIndex: 10000, 
                backgroundColor: '#1a1a1a',
                backgroundImage: 'linear-gradient(to bottom, #1a1a1a, #0f0f0f)'
              }}
            >
              <div className="relative w-full h-full min-h-screen bg-[#1a1a1a]">
                <div className="pt-20 pb-6 px-6 space-y-6">
                {/* Close button at top of drawer for better UX */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-lg bg-gray-800/50 border border-gray-700/30 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 z-10"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>

                {/* Mobile Nav Links - GSAP Animated */}
                <nav className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <div
                        key={link.href}
                        ref={(el) => { menuItemsRef.current[index] = el; }}
                      >
                        <Link href={link.href}>
                          <div className={`flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-200 cursor-pointer ${
                            isActive 
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' 
                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white border border-transparent active:scale-95'
                          }`}>
                            <span className="font-medium text-base">{link.label}</span>
                            {isActive && (
                              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            )}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </nav>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="http://115.167.72.44:8002/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Login"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-300">
                      Login
                    </button>
                  </a>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-sm text-gray-400"
                >
                  <p className="mb-1">+92 337 77 77 700</p>
                  <p className="text-xs text-gray-500">thej7emporium@gmail.com</p>
                </motion.div>

                {/* EcoSphere360 Tagline - Enhanced Mobile */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center space-y-2"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-400 font-medium">Powered by</span>
                    <motion.span
                      className="text-sm font-bold"
                      style={{
                        background: 'linear-gradient(120deg, #10b981, #14b8a6, #fbbf24)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      EcoSphere360
                    </motion.span>
                  </div>
                </motion.div>
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
