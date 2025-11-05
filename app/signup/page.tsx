'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, Building } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#0e1418] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Back Link */}
          <motion.div variants={fadeInUp}>
            <Link 
              href="/ecosphere360" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to EcoSphere360</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
              Create Your <span className="text-emerald-400">Account</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Start your 14-day free trial. No credit card required.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-2xl bg-gray-800/40 backdrop-blur-xl border border-emerald-500/30 shadow-2xl p-8 md:p-10"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 pointer-events-none" />
            
            <form className="relative space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Anderson"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900/60 border border-emerald-500/20 focus:border-emerald-500/50 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900/60 border border-emerald-500/20 focus:border-emerald-500/50 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900/60 border border-emerald-500/20 focus:border-emerald-500/50 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900/60 border border-emerald-500/20 focus:border-emerald-500/50 text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-5 h-5 mt-0.5 rounded border-emerald-500/30 bg-gray-900/60 text-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
                <label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to the{' '}
                  <a href="#" className="text-emerald-400 hover:text-emerald-300">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-emerald-400 hover:text-emerald-300">Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/50"
              >
                Start Free Trial
              </button>
            </form>
          </motion.div>

          {/* Footer Text */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <a 
                href="http://115.167.72.44:8002/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Login here
              </a>
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 pt-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
