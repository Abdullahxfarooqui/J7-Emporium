'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Car, 
  Building2, 
  Store, 
  Wifi, 
  Zap, 
  Baby, 
  Shield,
  Sparkles,
  Wine
} from 'lucide-react';

/**
 * Amenities Section - World-class facilities showcase
 * Features:
 * - Grid layout of modern icons
 * - Hover glow animations
 * - Gentle fade-in effects
 * - Premium icon cards
 */
const AmenitiesSection = () => {
  const amenities = [
    { name: 'Gym', icon: Dumbbell },
    { name: 'Smart Parking', icon: Car },
    { name: 'Skywalk Bridge', icon: Building2 },
    { name: 'Branded Shops', icon: Store },
    { name: 'High-Speed Wi-Fi', icon: Wifi },
    { name: 'Generator Backup', icon: Zap },
    { name: 'Kids Playground', icon: Baby },
    { name: '24/7 Security', icon: Shield },
    { name: 'Luxury Spa', icon: Sparkles },
    { name: 'Rooftop Lounge', icon: Wine },
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface-primary">
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
            World-Class Amenities
          </h2>
          <p className="text-lg font-inter text-text-muted max-w-2xl mx-auto">
            Experience luxury living with premium facilities designed for your comfort and convenience
          </p>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1] // Smooth cubic-bezier easing
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="relative bg-surface-secondary rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer group"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-start via-primary-mid to-primary-end opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out -z-10 blur-xl" />
              
              {/* Icon with Smooth Animation */}
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-md"
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <amenity.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Name */}
              <h4 className="text-center font-inter font-semibold text-sm text-text-primary group-hover:text-primary-end transition-colors duration-300">
                {amenity.name}
              </h4>

              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-start/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-base font-inter text-text-body max-w-3xl mx-auto leading-relaxed">
            Every amenity at J7 Emporium is carefully curated to provide you with a lifestyle that's 
            not just comfortable, but extraordinary. From fitness facilities to entertainment spaces, 
            we've thought of everything you need.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
