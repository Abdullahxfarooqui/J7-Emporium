'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import Image from 'next/image';

const ConstructionUpdatesSection = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Construction Start',
      description: 'Foundation work and structural planning commenced',
      icon: Calendar,
      status: 'completed',
    },
    {
      year: '2024',
      title: '30 Slabs Completed',
      description: 'Major structural work completed with premium quality standards',
      icon: CheckCircle2,
      status: 'completed',
    },
    {
      year: '2025',
      title: 'Completion Date',
      description: 'Final finishing and handover to valued clients',
      icon: Clock,
      status: 'upcoming',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0f1418] via-[#141a1f] to-[#181e23]">
      {/* Subtle Background Image with Heavy Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/const-bg.png"
          alt="Construction Background"
          fill
          className="object-cover opacity-[0.07] blur-sm"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container-j7 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Poppins',_'Inter',_sans-serif]">
            Construction Updates
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-['Inter',_sans-serif]">
            Track our journey from groundbreaking to completion with transparency and excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0f5132] to-[#1a7a4a] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Timeline with Perfectly Aligned Icons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="relative flex items-center space-x-6"
              >
                {/* Timeline Connector Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-[23px] top-[52px] w-[2px] h-[72px] bg-gradient-to-b from-[#0f5132] to-[#0f5132]/20" />
                )}

                {/* Icon Container - Fixed Size 48px */}
                <div className="flex flex-col items-center space-y-2 z-10 flex-shrink-0">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${milestone.status === 'completed' 
                      ? 'bg-gradient-to-br from-[#0f5132] to-[#1a7a4a] shadow-lg shadow-[#0f5132]/30' 
                      : 'bg-[#1f2937] border-2 border-gray-600'
                    }
                  `}>
                    <milestone.icon className={`w-6 h-6 ${
                      milestone.status === 'completed' ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-[#1a2028] hover:bg-[#1f2630] transition-all duration-300 p-6 rounded-xl border border-gray-700/50 shadow-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`
                      text-sm font-bold px-3 py-1 rounded-full font-['Inter',_sans-serif]
                      ${milestone.status === 'completed' 
                        ? 'bg-[#0f5132]/20 text-[#1a7a4a]' 
                        : 'bg-gray-700 text-gray-300'
                      }
                    `}>
                      {milestone.year}
                    </span>
                    {milestone.status === 'completed' && (
                      <span className="text-xs text-[#1a7a4a] font-semibold font-['Inter',_sans-serif]">
                        ✓ Completed
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-['Poppins',_sans-serif]">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-['Inter',_sans-serif]">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Construction Image + Progress Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Full-Size Construction Image - 16:9 Aspect Ratio */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-[#1a2028]">
              <div className="relative w-full aspect-video">
                <Image
                  src="/assets/images/const.png"
                  alt="J7 Emporium Construction Site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  quality={95}
                  priority
                />
              </div>
            </div>

            {/* Progress Chart with Dark Green Bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#1a2028] rounded-2xl shadow-2xl p-8 border border-gray-700/50"
            >
              {/* Progress Bars */}
              <div className="space-y-8 mb-6">
                {/* Interior Progress: 74% */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-white font-['Poppins',_sans-serif]">
                      Interior Completed
                    </h4>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#0f5132] to-[#1a7a4a] bg-clip-text text-transparent font-['Poppins',_sans-serif]">
                      74%
                    </span>
                  </div>
                  <div className="relative h-4 bg-[#0f1418] rounded-full overflow-hidden border border-gray-700/30">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '74%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0f5132] to-[#1a7a4a] rounded-full shadow-lg shadow-[#0f5132]/40"
                    />
                  </div>
                </div>

                {/* Exterior Progress: 95% */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-white font-['Poppins',_sans-serif]">
                      Exterior Completed
                    </h4>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#0f5132] to-[#1a7a4a] bg-clip-text text-transparent font-['Poppins',_sans-serif]">
                      95%
                    </span>
                  </div>
                  <div className="relative h-4 bg-[#0f1418] rounded-full overflow-hidden border border-gray-700/30">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0f5132] to-[#1a7a4a] rounded-full shadow-lg shadow-[#0f5132]/40"
                    />
                  </div>
                </div>
              </div>

              {/* Progress Description */}
              <div className="pt-6 border-t border-gray-700/50">
                <p className="text-sm text-gray-300 leading-relaxed text-center font-['Inter',_sans-serif]">
                  Construction is progressing steadily with <span className="font-semibold text-white">74% interior</span> and <span className="font-semibold text-white">95% exterior</span> work completed. Expected project completion: <span className="font-semibold text-[#1a7a4a]">2025</span>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionUpdatesSection;
