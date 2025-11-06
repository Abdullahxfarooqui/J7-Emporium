'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  index: number;
}

export default function BlogCard({ slug, title, excerpt, date, author, image, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <div className="relative h-full flex flex-col rounded-2xl bg-gray-800/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Image - Responsive heights for different screen sizes including 1024x1366 */}
          <div className="relative h-48 sm:h-52 md:h-56 lg:h-52 xl:h-56 overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1418] via-[#0e1418]/50 to-transparent" />
          </div>

          {/* Content - Optimized spacing for 1024x1366 */}
          <div className="relative p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
            {/* Meta - Responsive text and wrapping */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <time dateTime={date} className="whitespace-nowrap">{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">Editorial Desk</span>
              </div>
            </div>

            {/* Title - Responsive sizing */}
            <h3 className="font-sora text-lg sm:text-xl font-bold text-white line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3 flex-1">
              {excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300 pt-2">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
