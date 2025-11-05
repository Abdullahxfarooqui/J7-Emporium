'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Lightbulb, MessageCircle } from 'lucide-react';
import { fadeInUp, slideIn } from '@/lib/motion';

export default function CustomerExperience() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Total Digital Customer Experience
              </h2>
              <p className="text-2xl text-emerald-400 font-medium">Feels Like Magic</p>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Everything you need in one beautiful dashboard. No jumping between apps. 
              No confusion. Just seamless, intuitive control.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <LayoutDashboard className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Your Personal Dashboard</h3>
                  <p className="text-gray-300">
                    Assets, facilities, carbon footprint — all in one unified view. 
                    See what matters most at a glance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Suggestions</h3>
                  <p className="text-gray-300">
                    "Cut energy 12% this week?" Our AI analyzes patterns and recommends 
                    actionable improvements in plain English.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Always-On Support</h3>
                  <p className="text-gray-300">
                    Chat with a real human (or AI assistant) — anytime, anywhere. 
                    Help is always one message away.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideIn('right')}
            className="relative"
          >
            <div className="relative rounded-2xl bg-gray-800/40 backdrop-blur-xl border border-emerald-500/30 shadow-2xl p-6 md:p-8 overflow-hidden">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
              
              <div className="relative space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                  <div>
                    <p className="text-sm text-gray-400">Welcome back</p>
                    <p className="text-xl font-bold text-white">John Anderson</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                    <p className="text-xs text-gray-400 mb-1">Total Assets</p>
                    <p className="text-2xl font-bold text-white">$2.4M</p>
                    <p className="text-xs text-emerald-400 mt-1">+12% ↑</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-900/60 border border-emerald-500/20">
                    <p className="text-xs text-gray-400 mb-1">Energy Usage</p>
                    <p className="text-2xl font-bold text-white">320kW</p>
                    <p className="text-xs text-green-400 mt-1">-18% ↓</p>
                  </div>
                </div>

                {/* Smart Suggestion Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white mb-1">Smart Tip</p>
                      <p className="text-xs text-gray-300">
                        Reduce HVAC during off-peak hours to cut energy costs by 12% this week
                      </p>
                      <button className="text-xs text-emerald-400 hover:text-emerald-300 mt-2 font-medium">
                        Apply Now →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 font-medium">Recent Activity</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/40">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <p className="text-xs text-gray-300 flex-1">Asset tokenization completed</p>
                      <p className="text-xs text-gray-500">2h ago</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/40">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <p className="text-xs text-gray-300 flex-1">Maintenance alert resolved</p>
                      <p className="text-xs text-gray-500">5h ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
