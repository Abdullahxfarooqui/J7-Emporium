'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Globe } from 'lucide-react';
import { staggerContainer, staggerItem, hoverScale } from '@/lib/motion';

const features = [
  {
    icon: Zap,
    emoji: '🔥',
    title: 'Dead Simple',
    description: 'Built for humans, not engineers. If you can use a smartphone, you can master EcoSphere360.',
    gradient: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30'
  },
  {
    icon: Shield,
    emoji: '🔒',
    title: 'Bank-Level Security',
    description: 'Your data and assets are protected with military-grade encryption. Sleep soundly.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    icon: TrendingUp,
    emoji: '📈',
    title: 'Grows With You',
    description: 'From 1 asset to 1,000. Our platform scales seamlessly as your portfolio expands.',
    gradient: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    icon: Globe,
    emoji: '🌍',
    title: 'All-in-One Power',
    description: 'Tokenize. Manage. Track. Thrive. Everything you need in one intelligent platform.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  }
];

export default function WhyLove() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center space-y-4">
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why People <span className="text-emerald-400">Love</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                EcoSphere360
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.01em' }}>
              The platform that just works — powerful for experts, simple for everyone
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={hoverScale}
                className="group relative"
              >
                <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border ${feature.borderColor} hover:border-opacity-60 transition-all shadow-lg hover:shadow-2xl overflow-hidden`}>
                  {/* Background shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative space-y-4">
                    {/* Icon & Emoji */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gray-900/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                      <span className="text-4xl">{feature.emoji}</span>
                    </div>
                    
                    <h3 className="font-sora text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">10K+</p>
              <p className="text-sm text-gray-400 mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">$2B+</p>
              <p className="text-sm text-gray-400 mt-1">Assets Managed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">99.9%</p>
              <p className="text-sm text-gray-400 mt-1">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">4.9/5</p>
              <p className="text-sm text-gray-400 mt-1">User Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
