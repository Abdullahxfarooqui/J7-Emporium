'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogCard from './BlogCard';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const blogPosts = [
  {
    slug: 'why-j7-emporium-outshines',
    title: 'Why J7 Emporium Outshines Every Other Mixed-Use Development in Pakistan',
    excerpt: 'Discover how J7 Emporium redefines luxury, technology, and investment confidence in Pakistan\'s real estate landscape — powered by EcoSphere360.',
    date: '2025-11-05',
    author: 'J7 Emporium Editorial Desk',
    image: '/assets/images/blog-images/Gemini_Generated_Image_aqsj4saqsj4saqsj.png',
  },
  {
    slug: 'smart-living-meets-smart-investment',
    title: 'Smart Living Meets Smart Investment: The EcoSphere360 Advantage',
    excerpt: 'Explore how EcoSphere360 transforms property ownership into a seamless digital experience — blending sustainability, automation, and profitability.',
    date: '2025-11-05',
    author: 'J7 Emporium Editorial Desk',
    image: '/assets/images/blog-images/Gemini_Generated_Image_ogx6m9ogx6m9ogx6.png',
  },
  {
    slug: 'j7-empower-international-investors',
    title: 'J7 Emporium — A Gateway for International Investors, Especially from China',
    excerpt: 'Discover why J7 Emporium is attracting Chinese and overseas investors seeking high-growth, sustainable real estate opportunities in Pakistan.',
    date: '2025-11-05',
    author: 'J7 Emporium Editorial Desk',
    image: '/assets/images/blog-images/Gemini_Generated_Image_xi49kmxi49kmxi49.png',
  },
  {
    slug: 'sustainable-luxury-pakistan',
    title: 'The Rise of Sustainable Luxury in Pakistan: How J7 Emporium Leads the Movement',
    excerpt: 'Luxury and sustainability no longer exist apart. J7 Emporium sets a new benchmark by merging eco-friendly design with modern indulgence.',
    date: '2025-11-05',
    author: 'J7 Emporium Editorial Desk',
    image: '/assets/images/blog-images/Gemini_Generated_Image_xi49kmxi49kmxi49 (1).png',
  },
  {
    slug: 'future-of-urban-experience',
    title: 'The Future of Urban Experience: Retail, Residence & Real Returns at J7 Emporium',
    excerpt: 'How J7 Emporium redefines the future of urban living through integrated retail, hospitality, and investment experiences — powered by EcoSphere360.',
    date: '2025-11-05',
    author: 'J7 Emporium Editorial Desk',
    image: '/assets/images/blog-images/Gemini_Generated_Image_xi49kmxi49kmxi49 (2).png',
  },
];

export default function BlogGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP scroll-triggered animations for blog cards
  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4, // Faster: was 0.6
            delay: index * 0.06, // Faster: was 0.1
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              end: 'bottom top',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Optimized container padding for 1024x1366 tablet view */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Insights</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Deep dives into smart living, sustainable architecture, and the future of real estate in Pakistan
          </p>
        </motion.div>

        {/* Responsive grid optimized for 1024x1366 (2 columns) and other devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-7 lg:gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.slug} ref={(el) => { cardsRef.current[index] = el; }}>
              <BlogCard {...post} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
