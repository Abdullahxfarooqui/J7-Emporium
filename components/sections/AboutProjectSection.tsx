'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Layout } from 'lucide-react';
import Image from 'next/image';

/**
 * About Project Section - Luxury project overview
 * Features elegant text, architectural render, premium download CTAs
 */
const AboutProjectSection = () => {
  const handleDownload = (type: 'brochure' | 'floorplan') => {
    // TODO: Implement actual PDF download functionality
    console.log(`Downloading ${type}`);
  };

  return (
    <section id="about-project" className="py-20 lg:py-32 bg-bg-primary">
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
            About Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-start via-primary-mid to-primary-end mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <p className="text-lg font-inter text-text-body leading-relaxed">
              J7 Group proudly presents <span className="heading-gradient font-semibold">J7 Emporium</span>, 
              a breathtaking 30-storey marvel in Sector B-17, Islamabad. Spanning an 
              expansive 46 kanal, this iconic project is a testament to our unwavering dedication to 
              excellence, innovation, and luxury.
            </p>

            <p className="text-lg font-inter text-text-body leading-relaxed">
              J7 Emporium redefines modern living and commercial sophistication, offering an unparalleled 
              blend of world-class amenities, cutting-edge architecture, and strategic connectivity. From 
              opulent residential apartments to premium commercial spaces, every detail has been meticulously 
              crafted to elevate your lifestyle and business aspirations.
            </p>

            <p className="text-lg font-inter text-text-body leading-relaxed">
              With its prime location, state-of-the-art facilities, and visionary design, J7 Emporium stands 
              as a beacon of progress and prosperity, inviting you to be part of a legacy that transcends 
              ordinary living. Experience the perfect harmony of comfort, convenience, and class — only at 
              J7 Emporium.
            </p>

            <div className="pt-8">
              <h3 className="text-2xl font-sora font-semibold text-text-primary mb-4">
                Why Choose J7 Emporium?
              </h3>
              <ul className="space-y-3">
                {[
                  'Strategic location in Sector B-17, Islamabad',
                  '30-storey architectural masterpiece',
                  'Spanning 46 kanal of premium real estate',
                  'World-class amenities and facilities',
                  'Excellent connectivity to major landmarks',
                  'High appreciation potential',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-mid mt-2 flex-shrink-0" />
                    <span className="text-base font-inter text-text-body">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDownload('brochure')}
                className="btn-base btn-primary group flex items-center justify-center gap-3"
              >
                <FileText className="w-5 h-5" />
                <span>Download Brochure</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleDownload('floorplan')}
                className="btn-base btn-secondary group flex items-center justify-center gap-3"
              >
                <Layout className="w-5 h-5" />
                <span>Download Floor Plan</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Image/Render Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/assets/images/j7-emporium-bg.webp"
                  alt="J7 Emporium Architectural Design"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -bottom-8 -left-8 card-premium p-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-sora font-bold heading-gradient">30</p>
                  <p className="text-sm font-inter text-text-muted">Storeys</p>
                </div>
                <div>
                  <p className="text-3xl font-sora font-bold heading-gradient">46</p>
                  <p className="text-sm font-inter text-text-muted">Kanal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectSection;
