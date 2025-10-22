'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

/**
 * Register Interest Form Section - Premium contact form
 * Features:
 * - Elegant minimal outlined inputs with soft focus glow
 * - Form validation
 * - Submit button with ripple animation
 * - Success message display
 */
const RegisterInterestSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', city: '', message: '' });
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-32 bg-bg-secondary">
      <div className="container-j7">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-text-primary mb-6">
            Register Your Interest
          </h2>
          <p className="text-lg font-inter text-text-muted max-w-2xl mx-auto">
            Take the first step towards owning your dream property at J7 Emporium. 
            Our team will get back to you shortly.
          </p>
          <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-surface-primary rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-inter font-semibold text-text-body mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-200 focus:border-bg-primary-gradient-start focus:outline-none focus:ring-2 focus:ring-bg-primary-gradient-start/20 transition-all duration-300 font-inter text-text-primary"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-semibold text-text-body mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-200 focus:border-bg-primary-gradient-start focus:outline-none focus:ring-2 focus:ring-bg-primary-gradient-start/20 transition-all duration-300 font-inter text-text-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-inter font-semibold text-text-body mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-200 focus:border-bg-primary-gradient-start focus:outline-none focus:ring-2 focus:ring-bg-primary-gradient-start/20 transition-all duration-300 font-inter text-text-primary"
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-inter font-semibold text-text-body mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-200 focus:border-bg-primary-gradient-start focus:outline-none focus:ring-2 focus:ring-bg-primary-gradient-start/20 transition-all duration-300 font-inter text-text-primary"
                  placeholder="Your city"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-inter font-semibold text-text-body mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-200 focus:border-bg-primary-gradient-start focus:outline-none focus:ring-2 focus:ring-bg-primary-gradient-start/20 transition-all duration-300 font-inter text-text-primary resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-2xl bg-primary-gradient text-white font-inter font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Submit Inquiry</span>
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="text-xs font-inter text-text-muted text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 rounded-full bg-primary-gradient flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-sora font-bold text-text-primary mb-3">
                Thank You!
              </h3>
              <p className="text-base font-inter text-text-muted">
                Your inquiry has been submitted successfully. Our team will contact you shortly.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterInterestSection;
