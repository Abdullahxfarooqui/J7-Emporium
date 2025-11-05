'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp, slideIn, staggerContainer, staggerItem } from '@/lib/motion';

export default function EcoSphereHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e1418]">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Particle Effect (Optional - using CSS) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ top: '60%', left: '80%', animationDelay: '1s' }} />
        <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{ top: '40%', right: '15%', animationDelay: '0.5s' }} />
        <div className="absolute w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{ bottom: '30%', left: '70%', animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">Introducing EcoSphere360</span>
            </div>
          </motion.div>

          {/* Main Headline - Luxury Typography */}
          <motion.h1
            variants={fadeInUp}
            className="font-sora text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight"
          >
            Welcome to <br />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400"
              style={{
                textShadow: '0 0 40px rgba(16, 185, 129, 0.4)',
              }}
            >
              EcoSphere360
            </span>
          </motion.h1>

          {/* Subheading - Refined Letter Spacing */}
          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto"
            style={{
              letterSpacing: '0.02em',
            }}
          >
            The Future of Smart, Simple, Sustainable Living — All in One Place
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Imagine managing your investments, your buildings, your carbon footprint — and your entire day — 
            with just a few taps. No tech degree. No complicated dashboards. <span className="text-emerald-400 font-medium">Just results.</span>
          </motion.p>

          {/* CTA Buttons - Refined Luxury Aesthetic */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(16,185,129,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-lg transition-all shadow-2xl shadow-emerald-500/30 inline-flex items-center gap-3"
              style={{
                letterSpacing: '0.05em',
              }}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary CTA - Outlined */}
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-transparent hover:bg-emerald-500/10 text-emerald-400 font-semibold text-lg border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all backdrop-blur-sm"
              style={{
                letterSpacing: '0.05em',
              }}
            >
              Talk to Us
            </motion.button>
          </motion.div>

          {/* Secondary Link */}
          <motion.div variants={fadeInUp}>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-y-1 transition-transform rotate-90" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-8 pt-12 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-xl">✓</span>
              <span>Trusted by 10,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-xl">✓</span>
              <span>$2B+ assets managed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-xl">✓</span>
              <span>99.9% uptime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-emerald-500/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
