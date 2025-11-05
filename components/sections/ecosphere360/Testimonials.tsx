'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/motion';

const testimonials = [
  {
    quote: "I manage 12 properties and cut energy costs 28% — all from my phone. EcoSphere360 pays for itself.",
    author: "Sarah K.",
    role: "Property Manager",
    image: "👩‍💼"
  },
  {
    quote: "Finally, a platform that just… works. No training needed. My team was up and running in minutes.",
    author: "Mark T.",
    role: "Facility Director",
    image: "👨‍💼"
  },
  {
    quote: "The carbon tracking alone has transformed how we report sustainability. Investors love the transparency.",
    author: "Amina R.",
    role: "ESG Officer",
    image: "👩‍🔬"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center space-y-4">
            <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
              Loved by <span className="text-emerald-400">Professionals</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real stories from real users who transformed their operations
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gray-800/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-lg hover:shadow-emerald-500/20">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <Quote className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative space-y-6 pt-4">
                    {/* Quote */}
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-emerald-500/20">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rating Summary */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-8 pt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-emerald-400 text-2xl">★</span>
                ))}
              </div>
              <span className="text-white font-semibold text-lg">4.9/5</span>
            </div>
            <div className="h-8 w-px bg-emerald-500/30" />
            <p className="text-gray-400">Based on 2,400+ reviews</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
