'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, slideIn } from '@/lib/motion';

export default function AssetTokenization() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Asset Tokenization</span>
            </div>
            
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
              Own More, <span className="text-emerald-400">Stress Less</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Turn real-world assets into digital opportunities — without blockchain complexity.
              </p>
              <p>
                Invest in fractions of property or inventory and trade instantly on our secure marketplace. 
                No intermediaries. No delays. Just transparent, accessible ownership.
              </p>
            </div>

            <button className="group px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-medium transition-all inline-flex items-center gap-2">
              Start Investing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideIn('right')}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8 md:p-12 backdrop-blur-xl border border-emerald-500/30 shadow-2xl overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-teal-600/10 animate-pulse" />
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                  <div>
                    <p className="text-sm text-gray-400">Total Assets Value</p>
                    <p className="text-2xl font-bold text-white">$2,450,000</p>
                  </div>
                  <div className="text-emerald-400 text-right">
                    <p className="text-sm">+12.5%</p>
                    <p className="text-xs text-gray-400">This month</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                    <p className="text-xs text-gray-400 mb-1">Properties</p>
                    <p className="text-xl font-bold text-white">24</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                    <p className="text-xs text-gray-400 mb-1">Investors</p>
                    <p className="text-xl font-bold text-white">1,432</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                  <p className="text-sm font-medium text-white mb-2">Recent Transaction</p>
                  <p className="text-xs text-gray-300">Bought 5% of Luxury Apartment #401</p>
                  <p className="text-xs text-emerald-400 mt-1">+$12,500 • 2 hours ago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
