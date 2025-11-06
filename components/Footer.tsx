'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Footer Component - Enhanced with GSAP ScrollTrigger animations
 * Features:
 * - Scroll-triggered fade-up animations for all sections
 * - Staggered reveal of footer elements
 * - Improved responsive spacing and layout
 * - Mobile-first design with proper wrapping
 * - Smooth transitions and hover effects
 */
const Footer = () => {
  const [email, setEmail] = useState('');
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate footer sections on scroll
      const sections = [brandRef.current, linksRef.current, contactRef.current, newsletterRef.current];
      
      sections.forEach((section, index) => {
        if (section) {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5, // Faster: was 0.8
              delay: index * 0.1,  // Faster: was 0.15
              ease: 'power2.out', // Faster: was power3.out
              scrollTrigger: {
                trigger: section,
                start: 'top bottom-=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      // Animate copyright separately
      if (copyrightRef.current) {
        gsap.fromTo(
          copyrightRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4, // Faster: was 0.6
            ease: 'power2.out',
            scrollTrigger: {
              trigger: copyrightRef.current,
              start: 'top bottom-=50',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQs' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-[#0a0e10] text-white w-full" data-testid="footer">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Grid - Improved Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {/* Brand Section */}
          <div ref={brandRef} className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-sora font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-400 bg-clip-text text-transparent">
              J7 Emporium
            </h3>
            <p className="text-gray-400 font-inter text-sm sm:text-base leading-relaxed">
              A breathtaking 30-storey marvel in Sector B-17, Islamabad, 
              where luxury meets sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div ref={linksRef} className="space-y-4">
            <h4 className="text-base sm:text-lg font-sora font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>\n                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 font-inter text-sm sm:text-base transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="space-y-4">
            <h4 className="text-base sm:text-lg font-sora font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@j7emporium.com"
                  className="text-gray-400 hover:text-emerald-400 font-inter text-sm sm:text-base transition-colors duration-200 break-all"
                >
                  info@j7emporium.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+923001234567"
                  className="text-gray-400 hover:text-emerald-400 font-inter text-sm sm:text-base transition-colors duration-200"
                >
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 font-inter text-sm sm:text-base leading-relaxed">
                  Sector B-17, Islamabad, Pakistan
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div ref={newsletterRef} className="space-y-4">
            <h4 className="text-base sm:text-lg font-sora font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400 font-inter text-sm sm:text-base leading-relaxed">
              Subscribe for updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Social Icons - Improved Responsive Layout */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gray-800/50 flex items-center justify-center hover:bg-emerald-500/20 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright - Improved Spacing */}
        <div
          ref={copyrightRef}
          className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 font-inter text-sm sm:text-base">
            © 2025 J7 Emporium — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
