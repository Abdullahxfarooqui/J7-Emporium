'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Award, CheckCircle, Building2, Users, TrendingUp, Shield, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const investmentSteps = [
    {
      title: 'Explore Investment Packages',
      description: 'Discover the suite ownership options available, considering your investment goals and preferences.',
    },
    {
      title: 'Consultation and Assistance',
      description: 'The project offers consultation services to guide potential investors through the process, answering queries and providing insights into the investment structure.',
    },
    {
      title: 'Secure Your Investment',
      description: 'Once you\'ve selected the investment package that suits you, securing your suite is a straightforward process facilitated by the project\'s dedicated investment team.',
    },
    {
      title: 'Enjoy the Benefits',
      description: 'As construction progresses and the project reaches fruition, investors can start enjoying the benefits outlined in their investment package.',
    },
  ];

  const coreValues = [
    {
      icon: Building2,
      title: 'Architectural Excellence',
      description: 'Pushing boundaries with innovative design and world-class architecture.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Your satisfaction and trust are at the heart of everything we create.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Investment Value',
      description: 'Delivering exceptional returns through prime locations and quality.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency and reliability.',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#0a0e10] via-[#0f1418] to-[#141a1f] text-white overflow-x-hidden"
    >
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/assets/images/j7-emporium-bg.webp"
            alt="J7 Emporium"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0f1418]" />
        </motion.div>

        {/* Animated Overlay Elements */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0f6039] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1a8b52] rounded-full blur-[120px]"
          />
        </div>

        {/* Hero Content */}
        <div className="container-j7 max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0f6039]/20 to-[#1a8b52]/20 border border-[#0f6039]/30 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-5 h-5 text-[#0f6039]" />
              <span className="text-sm font-inter font-semibold text-gray-300 tracking-wide">ABOUT J7 EMPORIUM</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sora mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Redefining Luxury
              </span>
              <span className="block bg-gradient-to-r from-[#0f6039] via-[#1a8b52] to-[#0f6039] bg-clip-text text-transparent animate-gradient">
                In Islamabad
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed mb-12"
            >
              A pioneering development that sets a new standard for luxury and innovation. 
              This iconic 30-storey complex is a masterclass in urban design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="#our-story">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(15, 96, 57, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-gradient-to-r from-[#0f6039] to-[#1a8b52] rounded-2xl font-inter font-semibold text-lg shadow-2xl hover:shadow-[#0f6039]/50 transition-all duration-300"
                >
                  Discover Our Story
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl font-inter font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 0.8, duration: 0.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="relative py-32 px-6 overflow-hidden">
        <div className="container-j7 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-sm font-inter font-semibold text-[#0f6039] uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The J7 Emporium Story
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0f6039] to-[#1a8b52] mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/j7-emporium-bg.webp"
                  alt="J7 Emporium Building"
                  fill
                  className="object-cover"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#0f6039] to-[#1a8b52] p-8 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <p className="text-5xl font-bold font-sora mb-2">30</p>
                  <p className="text-sm font-inter opacity-90">Storeys High</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p variants={itemVariants} className="text-lg text-gray-300 font-inter leading-relaxed">
                Welcome to J7 Emporium, a pioneering development that sets a new standard for luxury and innovation in Islamabad's Sector B-17. This iconic 30-storey complex is a masterclass in urban design, seamlessly integrating retail, entertainment, and lifestyle elements.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg text-gray-300 font-inter leading-relaxed">
                Showcasing cutting-edge amenities and breathtaking views, J7 Emporium redefines the urban experience. As a beacon of excellence, this landmark project offers a unique blend of sophistication and functionality.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg text-gray-300 font-inter leading-relaxed">
                J7 Emporium is set to become a benchmark for retail and entertainment in the region. Boasting state-of-the-art amenities, including infinity pools, world-class gym, Zen gardens, and rooftop restaurants.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-6">
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#0f6039]" />
                  <span className="font-inter font-semibold">46 Kanal Prime Location</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#141a1f] to-[#0f1418]">
        <div className="container-j7 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-sm font-inter font-semibold text-[#0f6039] uppercase tracking-wider mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#0f6039]/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-sora font-bold mb-4 group-hover:text-[#0f6039] transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-gray-400 font-inter leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section - Enhanced */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0a0f13] to-[#0D1117]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-3xl" />
        
        {/* Subtle Construction Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.015]">
          <Image
            src="/assets/images/const.png"
            alt="Construction Background"
            fill
            className="object-cover"
            quality={80}
          />
        </div>

        <div className="container-j7 max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
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
              transition={{ duration: 0.3, type: 'spring', stiffness: 150 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-emerald-500/20 shadow-xl shadow-emerald-500/10"
            >
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-emerald-300 uppercase tracking-wider">What Defines Us</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Mission, Vision & Values
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The core principles that drive our commitment to excellence and shape the future of luxury living
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a2028]/95 to-[#141a1f]/95 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 h-full overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-xs font-bold text-gray-900">
                    01
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold font-sora mb-4 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500" />
                  <p className="text-gray-400 font-inter leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                    At J7 Emporium, our mission is to create <span className="text-emerald-400 font-semibold">extraordinary experiences</span> that enrich lives. We're dedicated to crafting luxurious spaces that inspire connection, innovation, and community, always striving for excellence in everything we do.
                  </p>
                  
                  {/* Key Points */}
                  <ul className="mt-6 space-y-3">
                    {['Excellence', 'Innovation', 'Community'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-emerald-400 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Vision Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a2028]/95 to-[#141a1f]/95 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-blue-500/50 transition-all duration-500 h-full overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-2xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-bold text-gray-900">
                    02
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold font-sora mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500" />
                  <p className="text-gray-400 font-inter leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                    Empowering a <span className="text-blue-400 font-semibold">luxurious lifestyle</span>, J7 Emporium revolutionizes urban living, blending innovation, sustainability, and elegance, creating a vibrant hub for discerning individuals and thriving communities.
                  </p>
                  
                  {/* Key Points */}
                  <ul className="mt-6 space-y-3">
                    {['Revolution', 'Sustainability', 'Elegance'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Values Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.18 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/10 rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a2028]/95 to-[#141a1f]/95 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-violet-500/50 transition-all duration-500 h-full overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-violet-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-violet-400 flex items-center justify-center text-xs font-bold text-gray-900">
                    03
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold font-sora mb-4 bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent">
                    Our Values
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500" />
                  <p className="text-gray-400 font-inter leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                    J7 Emporium values <span className="text-violet-400 font-semibold">excellence, innovation, and luxury</span>, fostering a culture of integrity, sustainability, and customer-centricity that enriches lives and strengthens communities.
                  </p>
                  
                  {/* Key Points */}
                  <ul className="mt-6 space-y-3">
                    {['Integrity', 'Luxury', 'Customer-Centric'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-violet-400 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-violet-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Banner - Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 blur-2xl" />
              <div className="relative bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-violet-500/5 backdrop-blur-sm rounded-2xl px-12 py-8 border border-white/10">
                <p className="text-xl md:text-2xl font-light text-gray-300 italic">
                  "Building <span className="text-emerald-400 font-semibold not-italic">tomorrow's landmarks</span>, enriching <span className="text-blue-400 font-semibold not-italic">today's communities</span>"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Invest Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0f1418] to-[#141a1f]">
        <div className="container-j7 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-inter font-semibold text-[#0f6039] uppercase tracking-wider mb-4">
              Investment Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How To Invest in J7 Emporium
              </span>
            </h2>
            <p className="text-gray-400 font-inter max-w-2xl mx-auto">
              A seamless investment journey designed for your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0f6039]/50 transition-all duration-500"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f6039] to-[#1a8b52] flex items-center justify-center font-bold text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {index + 1}
                </div>

                <div className="pl-4">
                  <h3 className="text-xl font-bold text-white font-sora mb-3 group-hover:text-[#0f6039] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-inter leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#0f6039]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Register Interest */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-[#0f6039] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a8b52] rounded-full blur-[120px]"
          />
        </div>

        <div className="container-j7 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f6039]/20 to-[#1a8b52]/10 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#1a2028]/95 to-[#141a1f]/95 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-[#0f6039]/30 shadow-2xl text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles className="w-12 h-12 text-[#0f6039] mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sora mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to Move?
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#0f6039] to-[#1a8b52] bg-clip-text text-transparent">
                    Register Your Interest Now
                  </span>
                </h3>
                <p className="text-lg text-gray-300 font-inter leading-relaxed mb-10 max-w-2xl mx-auto">
                  Take the first step towards luxury living. Connect with our team to explore exclusive investment opportunities.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(15, 96, 57, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#0f6039] to-[#1a8b52] rounded-2xl font-inter font-bold text-lg shadow-2xl hover:shadow-[#0f6039]/50 transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Register Your Interest
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architectural Statement - Enhanced Professional Design */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0a0f13] to-[#0D1117]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="container-j7 max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-5 py-2.5 rounded-full mb-6 text-sm font-semibold border border-emerald-500/20">
              <Building2 className="w-4 h-4" />
              Architectural Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contemporary Design Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Enhanced Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
              className="relative group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/j7-emporium-bg.webp"
                  alt="J7 Emporium Architectural Design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/80 via-[#0D1117]/20 to-transparent" />
                
                {/* Decorative Frame Elements */}
                <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-emerald-500/40 rounded-tl-2xl" />
                <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-emerald-500/40 rounded-br-2xl" />
              </div>
              
              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">30</div>
                  <div className="text-sm text-white/90 font-medium">Storey Marvel</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-transparent rounded-full" />
                
                <blockquote className="pl-8 space-y-6">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                    "J7 Emporium, a distinguished development in B-17, seamlessly blends <span className="text-emerald-400 font-semibold">contemporary and modern architectural elements</span>, enhancing its allure alongside a myriad of meticulously crafted features."
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                    <span className="text-sm text-emerald-400 font-semibold tracking-wide">Premium Architecture</span>
                  </div>
                </blockquote>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: '30 Storeys', value: 'Height' },
                  { label: '46 Kanal', value: 'Area' },
                  { label: 'B-17', value: 'Location' },
                  { label: 'Premium', value: 'Class' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.06 }}
                    className="bg-[#1a1f26] rounded-xl p-4 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm text-emerald-300 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-all font-semibold"
                >
                  Explore Architecture
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-8 text-center text-gray-500 text-sm font-inter border-t border-gray-800/30">
        This website and its content are copyright of J7 Emporium – © 2025. All rights reserved.
      </div>
    </motion.main>
  );
}
