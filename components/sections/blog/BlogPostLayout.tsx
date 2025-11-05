'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  author: string;
  image: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, date, author, image, children }: BlogPostLayoutProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const handleShare = (platform: string) => {
    let url = '';
    const text = `${title} - J7 Emporium Blog`;
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <article className="min-h-screen bg-[#0e1418]">
      {/* Back to Blog */}
      <div className="bg-[#0D1117] border-b border-emerald-500/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1418] via-[#0e1418]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </div>
            <span className="text-emerald-500/40">•</span>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" />
              <span>{author}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-sora text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            {title}
          </h1>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-emerald-500/10">
            <span className="flex items-center gap-2 text-sm text-gray-400">
              <Share2 className="w-4 h-4" />
              Share:
            </span>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-lg bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600/40 hover:border-emerald-500/40 transition-all group"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-300 group-hover:text-emerald-400 transition-colors" />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-lg bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600/40 hover:border-emerald-500/40 transition-all group"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-300 group-hover:text-emerald-400 transition-colors" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-lg bg-gray-700/40 hover:bg-gray-700/60 border border-gray-600/40 hover:border-emerald-500/40 transition-all group"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-300 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert prose-lg max-w-none">
            {children}
          </div>

          {/* CTA Footer */}
          <div className="mt-12 pt-12 border-t border-emerald-500/10">
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
              <h3 className="font-sora text-2xl font-bold text-white mb-3">
                Ready to Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">J7 Emporium</span>?
              </h3>
              <p className="text-gray-300 mb-6">
                Discover how our smart living solutions powered by EcoSphere360 can transform your lifestyle and investment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/ecosphere360"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  Explore EcoSphere360
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gray-700/40 hover:bg-gray-700/60 text-white font-semibold rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Articles Section (Future Enhancement) */}
        <div className="mt-16 mb-24">
          <h3 className="font-sora text-2xl font-bold text-white mb-8">Related Articles</h3>
          <div className="bg-gray-800/20 border border-emerald-500/10 rounded-2xl p-8 text-center">
            <p className="text-gray-400">More related articles coming soon...</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-4 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Browse All Articles
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
