'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

/**
 * Property Location Section - Luxury location showcase
 * Features interactive map and proximity to key landmarks
 */
const PropertyLocationSection = () => {
  const locationPoints = [
    { name: 'Khayaban-e-Shamsheer', distance: '2 Minutes Drive', icon: Navigation },
    { name: 'Khayaban-e-Jami', distance: '5 Minutes Drive', icon: Navigation },
    { name: 'Karachi Toll Plaza', distance: '8 Minutes Drive', icon: Navigation },
    { name: 'Jinnah International Airport', distance: '15 Minutes Drive', icon: Navigation },
    { name: 'Port Qasim', distance: '20 Minutes Drive', icon: Navigation },
    { name: 'Clifton Beach', distance: '12 Minutes Drive', icon: Navigation },
    { name: 'Dolmen Mall Clifton', distance: '10 Minutes Drive', icon: Navigation },
    { name: 'DHA Golf Club', distance: '6 Minutes Drive', icon: Navigation },
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
            Strategically positioned in DHA Phase 7, offering unmatched connectivity 
            to Karachi's key landmarks and destinations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-start via-primary-mid to-primary-end mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Map Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-premium aspect-square bg-surface-secondary flex items-center justify-center">
              {/* TODO: Replace with actual embedded map */}
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-mid mx-auto mb-4" />
                <p className="text-text-muted font-inter text-sm">
                  DHA Phase 7, Karachi
                </p>
                <p className="text-text-muted font-inter text-xs mt-2">
                  [Interactive Map Placeholder]
                </p>
              </div>

              {/* Location Pin Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <div className="w-4 h-4 rounded-full bg-primary-gradient shadow-glow" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Location Points List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4"
          >
            {locationPoints.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                className="card-premium p-5 hover:shadow-glow transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0">
                    <location.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-inter font-semibold text-text-primary text-sm mb-1 group-hover:text-white transition-colors">
                      {location.name}
                    </h4>
                    <div className="flex items-center space-x-1 text-text-muted">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs font-inter">{location.distance}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connectivity CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8 p-6 rounded-2xl bg-primary-gradient text-white"
            >
              <h4 className="text-xl font-sora font-semibold mb-2">
                Prime Connectivity
              </h4>
              <p className="text-sm font-inter text-white/90">
                Experience unparalleled access to Karachi's most prestigious locations, 
                all within minutes from J7 Emporium.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocationSection;
