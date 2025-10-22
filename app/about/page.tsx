'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

export default function AboutPage() {
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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="min-h-screen bg-gradient-to-b from-[#0f1418] via-[#141a1f] to-[#181e23] text-white overflow-x-hidden"
    >
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/j7-emporium-bg.webp"
            alt="J7 Emporium Background"
            fill
            className="object-cover opacity-[0.08]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1418]/90 via-[#141a1f]/85 to-[#181e23]" />
        </div>

        <div className="container-j7 max-w-6xl mx-auto relative z-10">
          {/* Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora heading-gradient mb-8 tracking-tight leading-tight px-4">
              Welcome to J7 Emporium
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed px-4 mb-8"
            >
              Welcome to J7 Emporium, a pioneering development that sets a new standard for luxury and innovation in Islamabad's Sector B-17. This iconic 30-storey complex is a masterclass in urban design, seamlessly integrating retail, entertainment, and lifestyle elements. Showcasing cutting-edge amenities and breathtaking views, J7 Emporium redefines the urban experience. As a beacon of excellence, this landmark project offers a unique blend of sophistication and functionality, catering to the discerning tastes of its residents and visitors. Experience the epitome of luxury living, where every detail is crafted to perfection.
            </motion.p>
          </motion.div>

          {/* Secondary Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto text-center font-inter leading-loose px-4"
          >
            J7 Emporium is set to become a benchmark for retail and entertainment in the region. Boasting state-of-the-art amenities, including infinity pools, world-class gym, Zen gardens, and rooftop restaurants, J7 Emporium offers an unparalleled lifestyle experience in the heart of Islamabad.
          </motion.p>
        </div>
      </section>

      {/* End-to-End Service Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="py-16 px-6 lg:px-12"
      >
        <div className="container-j7 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-sora heading-gradient mb-3">
            END-TO-END
          </h2>
          <p className="text-lg md:text-xl text-gray-200 font-inter font-medium">
            Don't move, We'll Handle Everything
          </p>
        </div>
      </motion.section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 px-6 lg:px-12 relative">
        {/* Background Construction Image as Subtle Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <Image
            src="/assets/images/const.png"
            alt="Construction Background"
            fill
            className="object-cover"
            quality={80}
          />
        </div>

        <div className="container-j7 max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#1a2028]/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800/50 hover:border-[#0f5132]/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0f5132] to-[#1a7a4a] flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-sora heading-gradient mb-4 text-center">
                OUR MISSION
              </h3>
              <p className="text-gray-300 font-inter text-base leading-relaxed text-center">
                At J7 Emporium, our mission is to create extraordinary experiences that enrich lives. We're dedicated to crafting luxurious spaces that inspire connection, innovation, and community, always striving for excellence in everything we do.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#1a2028]/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800/50 hover:border-[#0f5132]/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0f5132] to-[#1a7a4a] flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-sora heading-gradient mb-4 text-center">
                OUR VISION
              </h3>
              <p className="text-gray-300 font-inter text-base leading-relaxed text-center">
                Empowering a luxurious lifestyle, J7 Emporium revolutionizes urban living, blending innovation, sustainability, and elegance, creating a vibrant hub for discerning individuals and communities.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#1a2028]/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800/50 hover:border-[#0f5132]/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0f5132] to-[#1a7a4a] flex items-center justify-center shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-sora heading-gradient mb-4 text-center">
                OUR VALUES
              </h3>
              <p className="text-gray-300 font-inter text-base leading-relaxed text-center">
                J7 Emporium value excellence, innovation, and luxury, fostering a culture of integrity, sustainability, and customer-centricity to enrich lives and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Invest Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="py-20 px-6 lg:px-12"
      >
        <div className="container-j7 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-sora heading-gradient mb-12 text-center">
            How To Invest in J7 Emporium
          </h2>
          <div className="space-y-6">
            {investmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a2028]/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800/50 hover:border-[#0f5132]/30 transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#0f5132] to-[#1a7a4a] flex items-center justify-center font-bold text-white text-sm shadow-md">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white font-sora mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action - Register Interest */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="py-20 px-6 lg:px-12"
      >
        <div className="container-j7 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0f5132]/20 to-[#1a7a4a]/10 rounded-3xl p-12 border border-[#0f5132]/30 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold font-sora heading-gradient mb-4">
              Ready to move? Register Your Interest Now
            </h3>
            <p className="text-base md:text-lg text-gray-300 font-inter leading-relaxed mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis eu arcu sagittis, id sagittis justo suscipit.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="btn-base btn-primary font-semibold text-base px-10 py-4 rounded-xl shadow-2xl inline-flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5" />
                Register Your Interest
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Architectural Statement */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="py-16 px-6 lg:px-12"
      >
        <div className="container-j7 max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-400 font-inter leading-loose italic">
            J7 Emporium, a distinguished development in B-17, seamlessly blends contemporary and modern architectural elements, enhancing its allure alongside a myriad of meticulously crafted features.
          </p>
        </div>
      </motion.section>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 text-center text-gray-500 text-sm font-inter border-t border-gray-800/50"
      >
        This website and its content are copyright of J7 Emporium – © 2025. All rights reserved.
      </motion.div>
    </motion.main>
  );
}
