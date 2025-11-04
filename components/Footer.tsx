'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

/**
 * Footer Component - Deep graphite surface with elegant gold accents
 */
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

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
    <footer className="relative bg-[#0a0e10] text-white" data-testid="footer">
      <div className="container-j7 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="text-2xl font-sora font-bold heading-gradient mb-4">
              J7 Emporium
            </h3>
            <p className="text-text-muted font-inter text-sm leading-relaxed">
              A breathtaking 30-storey marvel in Sector B-17, Islamabad, 
              where luxury meets sophistication.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="text-lg font-sora font-semibold mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-gradient-underline text-text-muted hover:text-text-primary font-inter text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="text-lg font-sora font-semibold mb-4 text-text-primary">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@j7emporium.com"
                  className="text-text-muted hover:text-accent-gold font-inter text-sm transition-colors"
                >
                  info@j7emporium.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+923001234567"
                  className="text-text-muted hover:text-accent-gold font-inter text-sm transition-colors"
                >
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                <span className="text-text-muted font-inter text-sm">
                  Sector B-17, Islamabad, Pakistan
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="text-lg font-sora font-semibold mb-4 text-text-primary">Newsletter</h4>
            <p className="text-text-muted font-inter text-sm mb-4">
              Subscribe for updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="input-base"
              />
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-base btn-primary flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-surface-secondary flex items-center justify-center hover:bg-accent-gold/20 border border-text-muted/10 hover:border-accent-gold/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-muted hover:text-accent-gold transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-12 pt-8 border-t border-text-muted/10 text-center"
        >
          <p className="text-text-muted font-inter text-sm">
            © 2025 J7 Emporium — All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
