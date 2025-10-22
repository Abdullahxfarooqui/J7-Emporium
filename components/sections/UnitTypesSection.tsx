'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, TrendingUp, DollarSign, Package, Building2, Home } from 'lucide-react';
import Image from 'next/image';

/**
 * Unit Types Section - Showcase available property units
 * Features:
 * - Premium card design with gradient borders
 * - Hover lift animations
 * - Key property details with icons
 * - Call-to-action buttons
 */
const UnitTypesSection = () => {
  const unitTypes = [
    {
      title: 'Commercial Shop',
      size: '132 Sqft',
      downPayment: '25% Down Payment',
      features: '10 Elements',
      appreciation: '30% Annual Appreciation',
      icon: Store,
      image: '/assets/images/com-shop.webp',
      description: 'Prime retail spaces in high-traffic areas',
    },
    {
      title: 'Luxury Apartment',
      size: '1,200 - 2,500 Sqft',
      downPayment: '20% Down Payment',
      features: 'Premium Finishes',
      appreciation: '25% Annual Appreciation',
      icon: Building2,
      image: '/assets/images/apartment.png',
      description: 'Sophisticated living spaces with panoramic views',
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
            Unit Types
          </h2>
          <p className="text-lg font-inter text-text-muted max-w-2xl mx-auto">
            Flexible investment options designed to maximize returns and suit your business needs
          </p>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Unit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {unitTypes.map((unit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative bg-surface-primary rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-surface-primary/60 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-primary-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <unit.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-sora font-bold text-text-primary mb-2">
                  {unit.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm font-inter text-text-muted mb-6">
                  {unit.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <Home className="w-5 h-5 text-primary-end mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-inter text-text-muted">Size</p>
                      <p className="font-inter text-text-body text-sm font-semibold">{unit.size}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <DollarSign className="w-5 h-5 text-primary-end mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-inter text-text-muted">Payment</p>
                      <p className="font-inter text-text-body text-sm font-semibold">{unit.downPayment}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Package className="w-5 h-5 text-primary-end mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-inter text-text-muted">Features</p>
                      <p className="font-inter text-text-body text-sm font-semibold">{unit.features}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="w-5 h-5 text-primary-end mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-inter text-text-muted">Appreciation</p>
                      <p className="font-inter text-text-body text-sm font-semibold">{unit.appreciation}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 rounded-xl bg-primary-gradient text-white font-inter font-semibold text-sm shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-inter text-text-muted">
            Flexible payment plans available. Contact us for detailed pricing and payment schedules.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UnitTypesSection;
