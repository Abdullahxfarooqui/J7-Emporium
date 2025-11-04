'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Hotel, UtensilsCrossed, Store, ArrowRight } from 'lucide-react';
import Image from 'next/image';

/**
 * Our Products Section - Showcase product categories with real images
 * Features:
 * - 4-card grid layout with premium design
 * - Real product images with gradient overlays
 * - Hover animations and effects
 * - Call-to-action buttons
 */
const OurProductsSection = () => {
  const products = [
    {
      title: 'Luxury Apartments',
      description: 'Premium residential spaces with breathtaking views and world-class interiors',
      icon: Building2,
      image: '/assets/images/apartment.png',
    },
    {
      title: 'Radisson Hotel',
      description: 'Five-star hospitality experience with international standards',
      icon: Hotel,
      image: '/assets/images/radisson.png',
    },
    {
      title: 'Food Court',
      description: 'Diverse culinary experiences featuring local and international cuisines',
      icon: UtensilsCrossed,
      image: '/assets/images/food-court.jpeg',
    },
    {
      title: 'Commercial Shops',
      description: 'Prime retail spaces in a high-traffic location for business success',
      icon: Store,
      image: '/assets/images/com-shop.webp',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-bg-secondary">
      <div className="container-j7">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-text-primary mb-6">
            Our Products
          </h2>
          <p className="text-lg font-inter text-text-muted max-w-2xl mx-auto">
            Diverse offerings designed to cater to every lifestyle and business aspiration
          </p>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative bg-surface-primary rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image with Gradient Overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-sora font-bold text-text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-sm font-inter text-text-muted leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-bg-primary-gradient-start font-inter font-semibold text-sm group-hover:text-bg-primary-gradient-end transition-colors duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-gradient opacity-10 rounded-bl-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl bg-primary-gradient text-white font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProductsSection;
