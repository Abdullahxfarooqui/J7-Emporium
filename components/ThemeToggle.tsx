'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

/**
 * ThemeToggle Component
 * Elegant toggle switch between dark and light modes
 * Positioned in header with smooth transitions
 */
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-surface-secondary border border-text-muted/20" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-surface-secondary hover:bg-surface-tertiary transition-all duration-300 border border-text-muted/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Icon with smooth transition */}
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-accent-gold" />
        ) : (
          <Moon className="w-5 h-5 text-primary-mid" />
        )}
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(201, 166, 77, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(37, 164, 109, 0.15) 0%, transparent 70%)',
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
