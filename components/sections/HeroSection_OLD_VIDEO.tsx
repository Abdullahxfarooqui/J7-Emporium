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
