'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export default function CareersPage() {
  const openings = [
    {
      title: 'Senior Architect',
      department: 'Design & Planning',
      location: 'Islamabad, Pakistan',
      type: 'Full-time',
      description: 'Lead architectural design projects and collaborate with our development team.',
    },
    {
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Islamabad, Pakistan',
      type: 'Full-time',
      description: 'Drive sales growth and manage client relationships for our premium properties.',
    },
    {
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Islamabad, Pakistan',
      type: 'Full-time',
      description: 'Develop and execute marketing strategies to promote J7 Emporium.',
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Islamabad, Pakistan',
      type: 'Full-time',
      description: 'Oversee construction projects and ensure timely delivery.',
    },
    {
      title: 'Customer Support Specialist',
      department: 'Customer Service',
      location: 'Islamabad, Pakistan',
      type: 'Full-time',
      description: 'Provide exceptional support to our valued clients and handle inquiries.',
    },
    {
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Islamabad, Pakistan',
      type: 'Full-time',
      description: 'Analyze financial data and support strategic decision-making.',
    },
  ];

  const benefits = [
    'Competitive salary packages',
    'Health insurance coverage',
    'Performance bonuses',
    'Professional development opportunities',
    'Collaborative work environment',
    'Career growth potential',
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-primary">
      <div className="container-j7">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="heading-gradient text-5xl md:text-6xl lg:text-7xl font-sora font-bold mb-6">
            Join Our Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-start via-primary-mid to-primary-end mx-auto rounded-full mb-8" />
          <p className="text-xl text-text-body max-w-3xl mx-auto font-inter">
            Build your career with Pakistan's leading luxury real estate developer
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="card-premium p-8 md:p-12">
            <h2 className="text-3xl font-sora font-bold text-text-primary mb-8 text-center">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-mid mt-2 flex-shrink-0" />
                  <span className="text-text-body font-inter">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Job Openings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold text-text-primary text-center mb-12">
            Current Openings
          </h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="card-premium p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-sora font-bold text-text-primary mb-2">
                      {job.title}
                    </h3>
                    <p className="text-primary-mid font-inter font-semibold mb-3">
                      {job.department}
                    </p>
                    <p className="text-text-body font-inter mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted font-inter">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-base btn-primary whitespace-nowrap"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
