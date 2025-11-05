'use client';

import { motion } from 'framer-motion';
import { Leaf, BarChart3, FileText, ArrowRight } from 'lucide-react';
import { fadeInUp, slideIn } from '@/lib/motion';

export default function CarbonTracking() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideIn('left')}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 md:p-12 backdrop-blur-xl border border-emerald-500/30 shadow-2xl overflow-hidden">
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-emerald-600/10" />
              
              <div className="relative space-y-6">
                {/* Carbon Stats */}
                <div className="p-6 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Carbon Footprint</p>
                        <p className="text-2xl font-bold text-white">1,245 kg</p>
                      </div>
                    </div>
                    <div className="text-green-400 text-right">
                      <p className="text-lg font-bold">-18%</p>
                      <p className="text-xs text-gray-400">vs last month</p>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '72%' }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">72% towards 2025 target</p>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                    <BarChart3 className="w-6 h-6 text-emerald-400 mb-2" />
                    <p className="text-xs text-gray-400">Energy Saved</p>
                    <p className="text-lg font-bold text-white">320 kWh</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                    <FileText className="w-6 h-6 text-emerald-400 mb-2" />
                    <p className="text-xs text-gray-400">Reports</p>
                    <p className="text-lg font-bold text-white">12</p>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/30 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Green Champion</p>
                      <p className="text-xs text-gray-300">Top 5% in sustainability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Carbon Tracking</span>
            </div>
            
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
              Be Green. Be Proud. <span className="text-emerald-400">Be Seen.</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Track emissions, visualize your impact, and generate sustainability reports in one tap.
              </p>
              <p>
                Our smart dashboard connects to your facilities, vehicles, and operations — calculating your 
                carbon footprint in real-time. Set goals, monitor progress, and share your achievements with 
                stakeholders.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {[
                'Real-time emission tracking across all operations',
                'Automated sustainability reporting (ISO 14001 compliant)',
                'AI-powered recommendations to reduce footprint',
                'Carbon offset marketplace integration'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <button className="group px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-medium transition-all inline-flex items-center gap-2">
              Track Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
