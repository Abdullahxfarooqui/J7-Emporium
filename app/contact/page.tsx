'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Send, Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    message: '',
    contactMode: 'email',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent successfully.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Plot 1, Block C Multi Gardens B-17, Islamabad, Pakistan',
      link: 'https://maps.google.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+92 337 77 77 700',
      link: 'tel:+923377777700',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'thej7emporium@gmail.com',
      link: 'mailto:thej7emporium@gmail.com',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1117] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f13] via-[#0D1117] to-[#0D1117]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm text-emerald-300 px-5 py-2.5 rounded-full mb-8 text-sm font-semibold border border-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              We're Here to Help
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Get in Touch <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">With Us</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8 rounded-full" />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
            >
              Thank you for visiting our website! We would love to hear from you. Whether you have a question, feedback, or simply want to say hello, we're here to help. Please feel free to contact us using the information below or by filling out the form. We strive to respond promptly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-[#1a1f26] to-[#151a20] rounded-2xl p-8 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-700 rounded-2xl" />
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {info.details}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-[#0D1117] to-[#0a0f13]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-400">Fill out the form below and we'll get back to you shortly</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1a1f26] to-[#151a20] rounded-3xl p-8 md:p-12 border border-gray-800/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2 text-sm">
                    Phone No *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Enter Your Number"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-white font-semibold mb-2 text-sm">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="Enter Your City"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-sm">
                  Preferred Mode of Contact *
                </label>
                <div className="flex flex-wrap gap-4">
                  {['Phone', 'WhatsApp', 'Email'].map((mode) => (
                    <label key={mode} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMode"
                        value={mode.toLowerCase()}
                        checked={formData.contactMode === mode.toLowerCase()}
                        onChange={handleChange}
                        className="w-4 h-4 text-emerald-500 bg-gray-800 border-gray-600 focus:ring-emerald-500"
                      />
                      <span className="text-gray-300">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2 text-sm">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="Enter Your Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  placeholder="Type Your Message"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Our Head Office Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-5 py-2.5 rounded-full mb-6 text-sm font-semibold border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
              Our Head Office
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visit Our Luxury Development
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1a1f26] to-[#151a20] rounded-3xl p-8 md:p-12 border border-gray-800/50"
          >
            <p className="text-xl text-gray-300 leading-relaxed text-center italic">
              "J7 Emporium, a distinguished development in B-17, seamlessly blends contemporary and modern architectural elements, enhancing its allure alongside a myriad of meticulously crafted features."
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Contact Us', 'FAQs', 'Privacy Policy'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>info@j7emporium.com</li>
                <li>+923377777700</li>
                <li>MR 9, Block C Multi Gardens<br/>B-17, Islamabad</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-2">
              <h3 className="text-white font-bold text-lg mb-4">Subscribe to our Newsletter</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Submit
                </button>
              </form>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                {[
                  { icon: Facebook, link: '#' },
                  { icon: Instagram, link: '#' },
                  { icon: Youtube, link: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            © 2025 J7 Emporium – All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
