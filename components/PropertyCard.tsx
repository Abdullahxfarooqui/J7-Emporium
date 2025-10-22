'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  status: string;
  meta: {
    size?: string;
    downPayment?: string;
    appreciation?: string;
  };
  ctaText?: string;
  onCtaClick?: () => void;
  'data-testid'?: string;
}

/**
 * PropertyCard Component
 * Premium card for displaying property information
 * Features lazy-loaded images via Next.js Image
 * @param image - Image URL
 * @param title - Property title
 * @param status - Property status (Available, Sold Out, etc.)
 * @param meta - Property metadata (size, down payment, appreciation)
 * @param ctaText - Call-to-action button text
 * @param onCtaClick - CTA click handler
 */
const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  status,
  meta,
  ctaText = 'View Details',
  onCtaClick,
  'data-testid': testId,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="card-premium overflow-hidden group"
      data-testid={testId}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-260 ease-j7 group-hover:scale-105"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-j7-primary text-surface text-xs font-semibold rounded-lg">
          {status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-sora font-bold text-white mb-4">{title}</h3>

        {/* Meta Row */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          {meta.size && (
            <div className="flex items-center gap-2">
              <span className="text-zinc-700">Size:</span>
              <span className="text-white font-semibold">{meta.size}</span>
            </div>
          )}
          {meta.downPayment && (
            <div className="flex items-center gap-2">
              <span className="text-zinc-700">Down:</span>
              <span className="text-j7-primary font-semibold">{meta.downPayment}</span>
            </div>
          )}
          {meta.appreciation && (
            <div className="flex items-center gap-2">
              <span className="text-zinc-700">Appreciation:</span>
              <span className="text-j7-primary font-semibold">{meta.appreciation}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="w-full btn-base btn-secondary group/btn"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-260 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
