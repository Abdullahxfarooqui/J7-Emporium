'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

/**
 * Property Location Section - Interactive location showcase
 * Features:
 * - Modern interactive map (placeholder)
 * - Key location points with icons and driving times
 * - Fade-in animations for each location point
 * - Premium card design with gradients
 */
const PropertyLocationSection = () => {
  const locationPoints = [
    {
      name: 'Iran Avenue',
      distance: '5 Minutes Drive',
      icon: Navigation,
    },
    {
      name: 'Motorway M-2',
      distance: '7 Minutes Drive',
      icon: Navigation,
    },
    {
      name: 'G.T. Road',
      distance: '10 Minutes Drive',
      icon: Navigation,
    },
    {
      name: 'CPEC Route',
      distance: '8 Minutes Drive',
      icon: Navigation,
    },
    {
      name: 'New Islamabad Airport',
      distance: '15 Minutes Drive',
      icon: Navigation,
    },
    {
      name: 'Blue Area',
      distance: '20 Minutes Drive',
      icon: Navigation,
    },
    {
      name: 'Bahria Town',
      distance: '12 Minutes Drive',
      icon: Navigation,
    },
    {
      name: 'PWD Double Road',
      distance: '6 Minutes Drive',
      icon: Navigation,
    },
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
            Property Location
          </h2>
          <p className="text-lg font-inter text-text-muted max-w-2xl mx-auto">
            Strategically positioned in Sector B-17, offering unmatched connectivity 
            to Islamabad's key landmarks and destinations
          </p>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* TODO: Replace with actual interactive map */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-bg-primary-gradient-start mx-auto mb-4" />
                  <p className="text-text-muted font-inter text-sm">
                    [Interactive Map Placeholder]
                  </p>
                  <p className="text-text-muted font-inter text-xs mt-2">
                    Sector B-17, Islamabad
                  </p>
                </div>
              </div>
              {/* Pin indicator */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-4 h-4 rounded-full bg-primary-gradient shadow-lg" />
              </motion.div>
            </div>
          </motion.div>

          {/* Location Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locationPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="bg-surface-primary rounded-2xl p-5 shadow-lg hover:shadow-xl border border-zinc-100 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-inter font-semibold text-text-primary text-sm mb-1">
                        {point.name}
                      </h4>
                      <div className="flex items-center space-x-1 text-text-muted">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs font-inter">{point.distance}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-8 p-6 rounded-2xl bg-primary-gradient text-white"
            >
              <h4 className="text-xl font-sora font-semibold mb-2">
                Prime Location Advantage
              </h4>
              <p className="text-sm font-inter leading-relaxed opacity-90">
                J7 Emporium's strategic position in Sector B-17 ensures seamless connectivity 
                to all major routes, making it the perfect choice for both residential comfort 
                and commercial success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocationSection;
