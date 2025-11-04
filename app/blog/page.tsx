'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of Luxury Real Estate in Islamabad',
      excerpt: 'Explore the emerging trends shaping luxury real estate development in Pakistan\'s capital city.',
      date: 'October 28, 2025',
      author: 'J7 Editorial Team',
      category: 'Market Insights',
    },
    {
      title: 'J7 Emporium: Redefining Urban Living',
      excerpt: 'A deep dive into the architectural excellence and design philosophy behind our flagship project.',
      date: 'October 20, 2025',
      author: 'Usman Khan',
      category: 'Project Updates',
    },
    {
      title: 'Investment Guide: Commercial vs Residential Properties',
      excerpt: 'Understanding the pros and cons of different property types for maximum ROI.',
      date: 'October 15, 2025',
      author: 'Faisal Raza',
      category: 'Investment Tips',
    },
    {
      title: 'Sustainable Construction: Our Commitment',
      excerpt: 'How J7 Group integrates eco-friendly practices in all our development projects.',
      date: 'October 8, 2025',
      author: 'Sarah Ahmed',
      category: 'Sustainability',
    },
    {
      title: 'Top 5 Amenities Modern Buyers Look For',
      excerpt: 'Understanding what today\'s property buyers value most in luxury developments.',
      date: 'October 1, 2025',
      author: 'Ayesha Malik',
      category: 'Buyer Guides',
    },
    {
      title: 'Sector B-17: The Next Premium Location',
      excerpt: 'Why Sector B-17 is becoming Islamabad\'s most sought-after address for luxury living.',
      date: 'September 25, 2025',
      author: 'J7 Editorial Team',
      category: 'Location Analysis',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-primary">
      <div className="container-j7">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="heading-gradient text-5xl md:text-6xl lg:text-7xl font-sora font-bold mb-6">
            Our Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-start via-primary-mid to-primary-end mx-auto rounded-full mb-8" />
          <p className="text-xl text-text-body max-w-3xl mx-auto font-inter">
            Insights, updates, and expert advice on luxury real estate
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-premium overflow-hidden group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center relative overflow-hidden">
                <span className="text-white/50 font-inter text-sm">Blog Image</span>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
              </div>

              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 text-xs font-inter font-semibold text-primary-mid bg-primary-mid/10 rounded-full mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-sora font-bold text-text-primary mb-3 group-hover:text-primary-mid transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-body font-inter mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-text-muted font-inter mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-primary-mid font-inter font-semibold group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
