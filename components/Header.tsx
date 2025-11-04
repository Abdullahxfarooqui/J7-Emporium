'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-[0_1px_10px_rgba(0,0,0,0.4)] border-b border-gray-800/50' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Refined & Balanced */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {/* Logo Container with Subtle Enhancement */}
              <div className="relative bg-gray-800/40 rounded-xl px-3 py-2 border border-gray-700/30 group-hover:border-emerald-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                <Image
                  src="/assets/images/j7-logo.jpg"
                  alt="J7 Emporium"
                  width={140}
                  height={45}
                  priority
                  quality={95}
                  className="h-10 w-auto object-contain"
                  style={{
                    filter: 'brightness(1.1) contrast(1.05) drop-shadow(0 0 8px rgba(16,185,129,0.15))',
                  }}
                />
              </div>
            </motion.div>
            
            {/* Optional Brand Text - Hidden on mobile */}
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-lg tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                J7 Emporium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={link.href}>
                    <span className={`relative text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer group/link ${
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

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="http://115.167.72.44:8002/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Login"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(26, 60, 52, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold text-sm border border-gray-700/50 hover:border-emerald-500/30 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Login
              </motion.button>
            </a>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16,185,129,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Get in Touch
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg bg-gray-800/40 border border-gray-700/30 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
            aria-label="Toggle menu"
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
              style={{ top: '72px' }}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-[72px] bottom-0 w-80 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-l border-gray-800 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Nav Links */}
                <nav className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                      >
                        <Link href={link.href}>
                          <div className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive 
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' 
                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white border border-transparent'
                          }`}>
                            <span className="font-medium">{link.label}</span>
                            {isActive && (
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <a
                    href="http://115.167.72.44:8002/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Login"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-semibold border border-gray-700/50 hover:border-emerald-500/30 shadow-md hover:shadow-lg transition-all duration-300">
                      Login
                    </button>
                  </a>
                  
                  <Link href="/contact">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                      Get in Touch
                    </button>
                  </Link>
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
