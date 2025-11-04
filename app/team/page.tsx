'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Sparkles, Linkedin, Github, Twitter, Award, Target, Heart, Quote } from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
  // Team Members Data
  const teamMembers = [
    {
      name: 'Mr. Maqbool Hussain',
      position: 'Chairman',
      organization: 'J7 Group',
      expertise: 'Visionary leader with 25+ years in luxury real estate development',
      description: 'Pioneering excellence through innovation and unwavering commitment to quality.',
      image: '/assets/images/team/J7-Group-Chairman-Maqbool-Hussain-1024x1024.webp',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Mr. Yaseen Masud',
      position: 'Chief Executive Officer',
      organization: 'J7 Group',
      expertise: 'Strategic operations expert transforming urban landscapes',
      description: 'Dedicated to exceeding expectations and enriching lives through exceptional development.',
      image: '/assets/images/team/J7-Group-CEO-Yaseen-Masud-1024x1024.webp',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Mr. Saad Khan',
      position: 'Project Director',
      organization: 'J7 Emporium',
      expertise: 'Master of architectural precision and project excellence',
      description: 'Passionate about perfection, ensuring every detail exceeds expectations.',
      image: '/assets/images/team/J7-Emporium-Director-Saad-Khan-1024x1024.webp',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Mr. Sohail Chohan',
      position: 'Director Finance',
      organization: 'J7 Emporium',
      expertise: 'Financial strategist driving sustainable growth and value',
      description: 'Committed to excellence, translating vision into financial reality.',
      image: '/assets/images/team/Sohail-Chohan-1024x1024.webp',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Mr. Hanif',
      position: 'Project Director',
      organization: 'J7 Emporium',
      expertise: 'Operations specialist ensuring flawless execution',
      description: 'Bringing luxury lifestyle visions to life with meticulous attention.',
      image: '/assets/images/team/J7-Emporium-Director-Ch-Hanif-1024x1024.webp',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  // Leadership Spotlight - Top 2 executives
  const leadership = [
    {
      name: 'Mr. Maqbool Hussain',
      position: 'Chairman, J7 Group',
      philosophy: 'I am proud to introduce J7 Emporium, a testament to J7 Group\'s expertise in crafting exceptional lifestyle experiences. This landmark project combines luxury, innovation, and elegance, redefining the urban landscape of Islamabad.',
      image: '/assets/images/team/J7-Group-Chairman-Maqbool-Hussain-1024x1024.webp',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Mr. Yaseen Masud',
      position: 'Chief Executive Officer, J7 Group',
      philosophy: 'J7 Emporium is more than a development – it\'s a lifestyle. We\'re dedicated to exceeding expectations, fostering connections, and enriching lives. Join us in witnessing a new standard of living in Islamabad.',
      image: '/assets/images/team/J7-Group-CEO-Yaseen-Masud-1024x1024.webp',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#111827] to-[#0D1117]">
      {/* 1️⃣ Hero / Intro Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Animated Particle Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950">
          {/* Floating Particles */}
          <div className="absolute top-20 right-10 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-40 w-3 h-3 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-60 right-20 w-2 h-2 bg-emerald-300/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-teal-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 left-40 w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 120 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-emerald-500/20 shadow-2xl shadow-emerald-500/20"
          >
            <Users className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold tracking-wider text-emerald-300 uppercase">Meet the Visionaries</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="text-white">Meet Our</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mt-3 animate-gradient">
              Exceptional Team
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-8 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A collective of passionate innovators, strategic thinkers, and industry leaders dedicated to crafting exceptional experiences. 
            Together, we don't just build properties — we create communities, foster connections, and shape the future of luxury living.
          </motion.p>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent" />
      </section>

      {/* 2️⃣ Team Grid Section */}
      <section className="py-20 px-6 relative">
        {/* Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Team Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 shadow-md hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500 pointer-events-none" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Circular Image */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-lg group-hover:blur-xl transition-all duration-500" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-emerald-500/50 transition-all duration-500 shadow-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        quality={95}
                        sizes="160px"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-medium mb-1">
                      {member.position}
                    </p>
                    <p className="text-xs text-gray-500 font-medium tracking-wide">
                      {member.organization}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-4" />

                  {/* Expertise */}
                  <p className="text-sm text-gray-400 mb-3 leading-relaxed text-center px-2">
                    {member.expertise}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed text-center italic px-2 mb-4">
                    "{member.description}"
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-3">
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group/icon"
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 group-hover/icon:text-emerald-400 transition-colors" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group/icon"
                    >
                      <Twitter className="w-4 h-4 text-gray-400 group-hover/icon:text-emerald-400 transition-colors" />
                    </motion.a>
                  </div>
                </div>

                {/* Card Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Leadership Highlight Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900 to-black" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-emerald-500/20"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-emerald-300 uppercase tracking-wider">Executive Leadership</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Visionaries Leading the Way
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto" />
          </motion.div>

          {/* Leadership Cards */}
          <div className="space-y-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-500 shadow-xl hover:shadow-emerald-500/10`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative aspect-square max-w-sm mx-auto">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-xl" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-lg text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-semibold mb-4">
                    {leader.position}
                  </p>
                  
                  <div className={`w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 ${index % 2 === 0 ? 'lg:mx-0' : 'lg:ml-auto'} mx-auto`} />
                  
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {leader.philosophy}
                  </p>
                  
                  {/* Social Links */}
                  <div className={`flex gap-3 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}>
                    <motion.a
                      href={leader.social.linkedin}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                    </motion.a>
                    <motion.a
                      href={leader.social.twitter}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 group"
                    >
                      <Twitter className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Culture / Behind the Scenes Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0a0e13] to-[#0D1117]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-emerald-500/20 shadow-xl shadow-emerald-500/10"
            >
              <Heart className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span className="text-sm font-bold text-emerald-300 uppercase tracking-wider">Our Culture & Values</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Where Creativity Meets Collaboration
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A workspace designed for <span className="text-emerald-400 font-semibold">innovation</span>, powered by <span className="text-teal-400 font-semibold">passion</span>, and driven by <span className="text-emerald-400 font-semibold">excellence</span>
            </p>
          </motion.div>

          {/* Enhanced Culture Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              { 
                icon: Target, 
                title: 'Innovation First', 
                desc: 'Pushing boundaries with cutting-edge solutions and forward-thinking strategies',
                color: 'from-emerald-500 to-teal-500',
                stats: '25+ Years'
              },
              { 
                icon: Users, 
                title: 'Team Spirit', 
                desc: 'Fostering collaboration that breeds excellence and builds lasting relationships',
                color: 'from-blue-500 to-cyan-500',
                stats: '100+ Projects'
              },
              { 
                icon: Award, 
                title: 'Quality Driven', 
                desc: 'Uncompromising commitment to perfection in every detail and delivery',
                color: 'from-violet-500 to-purple-500',
                stats: '50K+ Clients'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 shadow-xl hover:shadow-emerald-500/20"
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:opacity-30 transition-all duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -top-1 -right-1 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold shadow-lg`}>
                    {item.stats}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${item.color} rounded-full mb-4 group-hover:w-24 transition-all duration-500`} />
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Values Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl shadow-emerald-500/10 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-bold text-emerald-200 uppercase tracking-wider">Our Promise</span>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                "Excellence isn't just our goal — it's our <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">standard</span>"
              </h3>
              
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Every project we undertake reflects our unwavering dedication to quality, innovation, and client satisfaction. 
                We don't just meet expectations — we exceed them, creating lasting value and unforgettable experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ Closing Section / CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Cinematic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a4429] via-[#0f6039] to-[#061f15]" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-emerald-500/20 shadow-2xl shadow-emerald-500/20"
          >
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold tracking-wider text-emerald-300 uppercase">Join Our Journey</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Together, We Build More Than Properties
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-8 rounded-full"
          />
          
          <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-light">
            We craft <span className="font-semibold text-emerald-300">experiences</span>, foster <span className="font-semibold text-teal-300">communities</span>, and shape the <span className="font-semibold text-emerald-300">future</span> of luxury living.
          </p>
          
          <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Discover how our visionary leadership team is redefining Islamabad's urban landscape with innovation, integrity, and unmatched excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/careers">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white text-[#0f6039] px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Shine Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Join Our Team
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-transparent text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/5 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent" />
      </section>
    </div>
  );
}
