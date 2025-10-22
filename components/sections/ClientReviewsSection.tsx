'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Client Reviews Section - Testimonials carousel
 * Features:
 * - Google-style review cards with profile icons
 * - Star ratings display
 * - Auto-scroll carousel
 * - Manual navigation controls
 * - Smooth animations
 */
const ClientReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Ahmed Hassan',
      location: 'Islamabad',
      rating: 5,
      text: 'J7 Emporium exceeded all my expectations. The quality of construction, attention to detail, and prime location make it the best investment I have made. Highly recommended!',
      avatar: 'AH',
    },
    {
      name: 'Sarah Khan',
      location: 'Rawalpindi',
      rating: 5,
      text: 'The amenities and facilities at J7 Emporium are world-class. The management team is professional and responsive. I am proud to own a commercial shop here.',
      avatar: 'SK',
    },
    {
      name: 'Imran Ali',
      location: 'Lahore',
      rating: 5,
      text: 'Outstanding project with excellent appreciation potential. The strategic location and modern architecture make it a landmark in Islamabad. Very satisfied with my purchase.',
      avatar: 'IA',
    },
    {
      name: 'Fatima Malik',
      location: 'Islamabad',
      rating: 5,
      text: 'J7 Group has delivered on every promise. The transparency in construction updates and flexible payment plans made the entire process smooth and trustworthy.',
      avatar: 'FM',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

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
            Client Reviews
          </h2>
          <p className="text-lg font-inter text-text-muted max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience with J7 Emporium
          </p>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Reviews Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-surface-primary rounded-3xl shadow-2xl p-8 lg:p-12"
              >
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center">
                      <span className="text-2xl font-sora font-bold text-white">
                        {reviews[currentIndex].avatar}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-lg font-inter text-text-body leading-relaxed mb-6">
                      "{reviews[currentIndex].text}"
                    </p>

                    {/* Name and Location */}
                    <div>
                      <h4 className="text-xl font-sora font-bold text-text-primary">
                        {reviews[currentIndex].name}
                      </h4>
                      <p className="text-sm font-inter text-text-muted">
                        {reviews[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-surface-primary shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 border border-zinc-200"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6 text-text-body" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-primary-gradient'
                      : 'w-2 h-2 bg-surface-tertiary hover:bg-primary-mid/50'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-surface-primary shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 border border-zinc-200"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6 text-text-body" />
            </motion.button>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-surface-tertiary border border-text-muted/20">
              <Star className="w-5 h-5 fill-accent-gold text-accent-gold" />
              <span className="font-inter font-semibold text-text-primary">
                4.9/5
              </span>
              <span className="font-inter text-sm text-text-muted">
                from 100+ verified reviews
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
