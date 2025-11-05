'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LogIn, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { scaleIn, staggerContainer, staggerItem } from '@/lib/motion';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-emerald-500/5 to-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 shadow-2xl overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-teal-600/10 animate-pulse" />
            
            {/* Content */}
            <div className="relative px-8 md:px-16 py-16 md:py-20 text-center space-y-8">
              <motion.div variants={staggerItem} className="space-y-4">
                <h2 className="font-sora text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Ready to Step Into <span className="text-emerald-400">the Future?</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  EcoSphere360 — Smart Made Simple. Sustainability Made Real.
                </p>
              </motion.div>

              <motion.p variants={staggerItem} className="text-gray-400 text-lg max-w-2xl mx-auto">
                Join thousands of professionals who are managing assets, optimizing facilities, 
                and tracking carbon footprints — all from one elegant platform.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link href="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/50 inline-flex items-center gap-3"
                  >
                    Sign Up Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="http://115.167.72.44:8002/" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-semibold text-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-all shadow-lg inline-flex items-center gap-3"
                  >
                    <LogIn className="w-5 h-5" />
                    Login
                  </motion.button>
                </Link>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 rounded-full bg-transparent hover:bg-emerald-500/10 text-emerald-400 font-semibold text-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-all inline-flex items-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Talk to Us
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={staggerItem}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-emerald-500/20"
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-emerald-400 text-2xl">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-emerald-400 text-2xl">✓</span>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-emerald-400 text-2xl">✓</span>
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
