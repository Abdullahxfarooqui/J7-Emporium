'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, MapPin, TrendingUp, Award, Users, Sparkles, Quote, ChevronDown } from 'lucide-react';

/**
 * Home Page - Stunning, Modern Landing Experience
 * Redesigned with premium UI, smooth animations, and emotional engagement
 */
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const features = [
    {
      icon: Building2,
      title: 'Architectural Masterpiece',
      description: '30-storey marvel with contemporary design and world-class architecture',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Strategic position in Sector B-17, Islamabad with excellent connectivity',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'High ROI Potential',
      description: 'Premium investment opportunity with exceptional appreciation prospects',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'World-Class Amenities',
      description: 'Luxury facilities including spa, gym, restaurants, and more',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const stats = [
    { value: '30', label: 'Storeys', suffix: '' },
    { value: '46', label: 'Kanal', suffix: '' },
    { value: '100', label: 'Success Rate', suffix: '%' },
    { value: '500', label: 'Happy Clients', suffix: '+' },
  ];

  const testimonials = [
    {
      quote: "J7 Emporium represents the pinnacle of luxury living in Islamabad. The attention to detail is extraordinary.",
      author: "Ahmed Hassan",
      position: "Property Investor",
      image: "/assets/images/j7-logo.jpg",
    },
    {
      quote: "An investment that exceeded all expectations. The location and amenities are simply unmatched.",
      author: "Sarah Khan",
      position: "Business Owner",
      image: "/assets/images/j7-logo.jpg",
    },
    {
      quote: "The perfect blend of commercial and residential excellence. J7 Group has truly redefined modern living.",
      author: "Imran Ali",
      position: "Real Estate Developer",
      image: "/assets/images/j7-logo.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1117] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/images/j7-emporium-bg.webp"
            alt="J7 Emporium"
            fill
            priority
            className="object-cover"
            quality={75}
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/70 via-[#0D1117]/50 to-[#0D1117]" />
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-emerald-500/20"
            >
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">Premium Luxury Living</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight px-4">
              <span 
                className="relative inline-block"
                style={{
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
                  backgroundImage: 'url(/assets/images/j7-emporium-bg.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  filter: 'brightness(1.2) contrast(1.1)',
                  textShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                }}
              >
                J7 Emporium
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mt-2">
                Where Dreams Rise
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              A breathtaking 30-storey architectural marvel in B-17 Islamabad, 
              redefining luxury living with world-class amenities and unparalleled elegance
            </p>

            {/* EcoSphere360 Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
              className="mb-10"
            >
              <div className="inline-flex items-center justify-center space-x-2 bg-gray-800/40 border border-emerald-500/20 px-5 py-2 rounded-full backdrop-blur-md shadow-lg hover:border-emerald-500/40 transition-all duration-300 group">
                <motion.svg
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="w-4 h-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </motion.svg>
                <span className="text-sm md:text-base font-medium tracking-wide">
                  <span className="text-gray-300">Powered by</span>
                  {' '}
                  <span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-semibold group-hover:from-emerald-300 group-hover:to-teal-200 transition-all duration-300"
                  >
                    EcoSphere360
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex justify-center items-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-emerald-500/30 flex items-center gap-2"
                >
                  Explore Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-emerald-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/j7-emporium-bg.webp"
                  alt="J7 Emporium Architecture"
                  fill
                  className="object-cover"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">46</div>
                  <div className="text-sm text-white/80">Kanal Area</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/20">
                <Building2 className="w-4 h-4" />
                About J7 Emporium
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Redefining Modern Living in Islamabad
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />

              <p className="text-lg text-gray-400 leading-relaxed">
                J7 Group proudly presents <span className="text-emerald-400 font-semibold">J7 Emporium</span>, 
                a breathtaking 30-storey marvel in Sector B-17, Islamabad. Spanning an 
                expansive 46 kanal, this iconic project is a testament to our unwavering dedication to 
                excellence, innovation, and luxury.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                J7 Emporium redefines modern living and commercial sophistication, offering an unparalleled 
                blend of world-class amenities, cutting-edge architecture, and strategic connectivity.
              </p>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="mt-4 inline-flex items-center gap-2 text-emerald-400 font-semibold"
                >
                  Discover More
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* World-Class Amenities Section - Sophisticated & Professional */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0a0f13] to-[#0D1117]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.06 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm text-emerald-300 px-5 py-2.5 rounded-full mb-6 text-sm font-semibold border border-emerald-500/20 shadow-lg shadow-emerald-500/5"
            >
              <Sparkles className="w-4 h-4" />
              World-Class Facilities
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Premium Amenities & Services
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6 rounded-full" />
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience exceptional facilities meticulously designed for refined living and sophisticated comfort
            </p>
          </motion.div>

          {/* Professional Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
            {[
              { 
                name: 'State-of-the-Art Fitness Center', 
                icon: Building2, 
                gradient: 'from-emerald-500 to-teal-600',
                desc: 'Premium equipment & training'
              },
              { 
                name: 'Infinity Swimming Pool', 
                icon: Sparkles, 
                gradient: 'from-blue-500 to-cyan-600',
                desc: 'Panoramic city views'
              },
              { 
                name: 'Luxury Spa & Wellness', 
                icon: Award, 
                gradient: 'from-purple-500 to-pink-600',
                desc: 'Rejuvenation suites'
              },
              { 
                name: 'Smart Parking System', 
                icon: Building2, 
                gradient: 'from-gray-600 to-slate-700',
                desc: 'EV charging stations'
              },
              { 
                name: 'Rooftop Sky Lounge', 
                icon: TrendingUp, 
                gradient: 'from-amber-500 to-orange-600',
                desc: 'Fine dining & events'
              },
              { 
                name: 'Family Recreation Center', 
                icon: Users, 
                gradient: 'from-pink-500 to-rose-600',
                desc: 'Safe play areas'
              },
              { 
                name: 'Advanced Security', 
                icon: Award, 
                gradient: 'from-emerald-600 to-teal-700',
                desc: '24/7 surveillance'
              },
              { 
                name: 'High-Speed Connectivity', 
                icon: Sparkles, 
                gradient: 'from-indigo-500 to-purple-600',
                desc: 'Fiber-optic network'
              },
              { 
                name: 'International Food Court', 
                icon: Building2, 
                gradient: 'from-yellow-500 to-orange-600',
                desc: 'Global cuisine'
              },
              { 
                name: 'Luxury Retail Mall', 
                icon: TrendingUp, 
                gradient: 'from-violet-500 to-purple-600',
                desc: 'Premium boutiques'
              },
              { 
                name: 'Business Executive Hub', 
                icon: Building2, 
                gradient: 'from-slate-500 to-gray-700',
                desc: 'Professional spaces'
              },
              { 
                name: 'Landscaped Gardens', 
                icon: Sparkles, 
                gradient: 'from-green-500 to-emerald-600',
                desc: 'Zen walking paths'
              },
            ].map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1] as any
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${amenity.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                
                <div className="relative z-10">
                  {/* Icon with Shadow */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${amenity.gradient} rounded-xl flex items-center justify-center mb-4 shadow-xl shadow-black/20 group-hover:shadow-2xl transition-shadow duration-300`}>
                    <amenity.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-emerald-300 transition-colors duration-300">
                    {amenity.name}
                  </h3>
                  
                  {/* Divider */}
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${amenity.gradient} rounded-full mb-3 group-hover:w-16 transition-all duration-500`} />
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    {amenity.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-[#1a1f26]/90 to-[#151a20]/90 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-gray-800/50 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent" />
              
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-emerald-500/20 mx-auto mb-6" />
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-6">
                  Every facility at J7 Emporium reflects our commitment to excellence. We've meticulously crafted an environment where <span className="text-emerald-400 font-medium">architectural sophistication</span> meets <span className="text-teal-400 font-medium">functional luxury</span>, creating spaces that redefine premium urban living.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-500/50" />
                  <span className="text-sm text-emerald-400 font-semibold tracking-wider">J7 GROUP MANAGEMENT</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-500/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-4 py-2 rounded-full mb-6 text-sm font-semibold border border-emerald-500/20">
              <Award className="w-4 h-4" />
              Key Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose J7 Emporium
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unparalleled luxury with premium investment opportunities and strategic location
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-[#1a1f26] rounded-2xl p-8 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10 rounded-2xl`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Highlight Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-[#0a0f13]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-4 py-2 rounded-full mb-6 text-sm font-semibold border border-emerald-500/20">
              <Users className="w-4 h-4" />
              Our Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visionary Team Behind Success
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Driven by passion, guided by excellence, and committed to creating extraordinary experiences
            </p>
            <Link href="/team">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm text-emerald-300 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-4 py-2 rounded-full mb-6 text-sm font-semibold border border-emerald-500/20">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trusted by hundreds of satisfied clients who chose excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-[#1a1f26] rounded-2xl p-8 border border-gray-800/50 relative"
              >
                <Quote className="w-10 h-10 text-emerald-500/20 mb-4" />
                
                <p className="text-gray-400 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gradient-to-br from-emerald-500 to-teal-600">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800" />
        <div className="absolute inset-0 bg-[url('/assets/images/j7-emporium-bg.webp')] bg-cover bg-center opacity-10" />
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Discover your dream space at J7 Emporium. Contact us today for exclusive opportunities.
          </p>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white text-emerald-700 font-bold text-lg rounded-full shadow-2xl inline-flex items-center gap-3"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
