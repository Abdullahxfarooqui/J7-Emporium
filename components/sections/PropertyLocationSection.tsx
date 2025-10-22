'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Plane, Home, Map, Globe, Clock } from 'lucide-react';
import Image from 'next/image';

/**
 * Property Location Section - Luxury location showcase
 * Features interactive map and proximity to key landmarks in B-17 Islamabad
 */
const PropertyLocationSection = () => {
  const locationPoints = [
    {
      name: 'IRAN AVENUE (FORMERLY MARGALLA AVENUE)',
      description: 'Direct access to J7 Emporium providing effortless connectivity for residents of nearby sectors such as G-15, D-17, and Faisal Hills.',
      distance: '5 mins drive',
      icon: Map,
    },
    {
      name: 'MOTORWAY M1/M2 & G.T ROAD',
      description: 'Smooth access to major cities including Rawalpindi, Lahore, and Peshawar. Regional travel made seamless with quick motorway access.',
      distance: '2–5 mins drive',
      icon: Navigation,
    },
    {
      name: 'CPEC CORRIDOR LINK',
      description: 'Gateway to national connectivity — enhances commercial potential and economic accessibility for businesses and investors.',
      distance: '5 mins drive',
      icon: Globe,
    },
    {
      name: 'NEW ISLAMABAD INTERNATIONAL AIRPORT',
      description: 'Only 15 minutes away, offering hassle-free travel for both business and leisure. Perfect for frequent travelers and international connections.',
      distance: '15 mins drive',
      icon: Plane,
    },
    {
      name: 'NEARBY COMMUNITIES',
      description: 'Surrounded by developed sectors including Faisal Hills, Multi Gardens, and Tarnol, making it a central residential and investment hub.',
      distance: '2–10 mins drive',
      icon: Home,
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
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="heading-gradient text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-6">
            Property Location
          </h2>
          <p className="text-lg font-inter text-text-body max-w-2xl mx-auto">
            Strategically positioned in Sector B-17, Islamabad, offering unmatched connectivity 
            to the capital's key landmarks and destinations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-start via-primary-mid to-primary-end mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Location Points List - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            {locationPoints.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="group"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <location.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-sora font-bold text-text-primary text-base md:text-lg mb-2 uppercase tracking-tight group-hover:text-white transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-text-muted font-inter text-sm md:text-base leading-relaxed mb-2">
                      {location.description}
                    </p>
                    <div className="flex items-center space-x-2 text-primary-mid">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-inter font-semibold">
                        {location.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connectivity Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
              className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary-start to-primary-end text-white shadow-glow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-8 h-8" />
                <h4 className="text-xl md:text-2xl font-sora font-bold">
                  Strategic Location Advantage
                </h4>
              </div>
              <p className="text-sm md:text-base font-inter text-white/95 leading-relaxed">
                J7 Emporium is positioned at the heart of Islamabad's most connected sector, 
                offering residents and investors unparalleled access to business hubs, 
                transport networks, and lifestyle amenities.
              </p>
            </motion.div>
          </motion.div>

          {/* Map Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-text-muted/10">
              {/* Map Image */}
              <div className="relative aspect-square bg-surface-secondary">
                <Image
                  src="/assets/images/Map-scaled.webp"
                  alt="J7 Emporium Location Map - Block C, B-17 Islamabad"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay with location pin */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
                
                {/* Animated Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5,
                      ease: "easeInOut"
                    }}
                    className="relative"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-gold shadow-lg" />
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-accent-gold animate-ping opacity-75" />
                  </motion.div>
                </div>

                {/* Location Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0" />
                      <div>
                        <p className="text-text-primary font-sora font-bold text-sm">
                          J7 Emporium
                        </p>
                        <p className="text-text-muted font-inter text-xs">
                          Block C, Sector B-17, Islamabad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center text-text-muted font-inter text-sm mt-4"
            >
              Prime location with seamless connectivity to all major landmarks
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocationSection;
