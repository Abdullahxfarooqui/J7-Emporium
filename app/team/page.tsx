'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-bg-primary">
      <div className="container-j7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <Users className="w-16 h-16 mx-auto mb-6 text-primary-mid" />
          <h1 className="heading-gradient text-4xl md:text-5xl font-sora font-bold text-text-primary mb-6">
            Our Team
          </h1>
          <p className="text-lg font-inter text-text-body mb-8">
            Meet the dedicated professionals behind J7 Emporium's success.
          </p>
          <p className="text-base font-inter text-text-muted">
            This page is under construction. Please check back soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
