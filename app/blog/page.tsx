import React from 'react';
import Image from 'next/image';
import BlogGrid from '@/components/sections/blog/BlogGrid';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0e1418] w-full overflow-x-hidden pt-20">
      {/* Hero Section - Optimized for 1024x1366 */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-18 lg:pt-28 lg:pb-20 overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0 top-0">
          <Image
            src="/assets/images/j7-journal.png"
            alt="J7 Emporium Journal"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1418]/30 via-[#0e1418]/50 to-[#0e1418]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
          <div className="text-center">
            {/* Updated title: The Emporium Journal */}
            <h1 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300">Emporium Journal</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light px-4" style={{ letterSpacing: '0.01em' }}>
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
