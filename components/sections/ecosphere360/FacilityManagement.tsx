'use client';

import { motion } from 'framer-motion';
import { Building2, Zap, Activity, Bell } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion';

const features = [
  {
    icon: Activity,
    title: 'Live Monitoring',
    description: 'Real-time tracking of energy consumption and occupancy levels across all facilities'
  },
  {
    icon: Zap,
    title: 'Automated Optimization',
    description: 'AI-powered systems automatically adjust lighting, HVAC, and resource allocation'
  },
  {
    icon: Bell,
    title: 'Predictive Maintenance',
    description: 'Get alerts before equipment fails, reducing downtime and repair costs by 40%'
  }
];

export default function FacilityManagement() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mx-auto">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">IoT-Powered Management</span>
            </div>
            
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
              Your Building, <span className="text-emerald-400">Supercharged</span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Transform your facilities into smart, efficient powerhouses with IoT sensors and AI automation
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-8 rounded-2xl bg-gray-800/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-lg hover:shadow-emerald-500/20"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <feature.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  
                  <h3 className="font-sora text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/30"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">40%</p>
              <p className="text-sm text-gray-400 mt-1">Energy Savings</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">24/7</p>
              <p className="text-sm text-gray-400 mt-1">Monitoring</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">98%</p>
              <p className="text-sm text-gray-400 mt-1">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-emerald-400">60%</p>
              <p className="text-sm text-gray-400 mt-1">Cost Reduction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
