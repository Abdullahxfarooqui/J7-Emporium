import React from 'react';
import BlogGrid from '@/components/sections/blog/BlogGrid';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0e1418]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center">
            <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300">Blog</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light" style={{ letterSpacing: '0.01em' }}>
              Insights on smart living, sustainable architecture, luxury real estate, and investment opportunities — powered by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-semibold">
                EcoSphere360
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <BlogGrid />
    </main>
  );
}
