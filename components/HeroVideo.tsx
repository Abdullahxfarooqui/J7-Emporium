'use client';

import React, { useRef, useEffect } from 'react';
import HeadingGradient from './HeadingGradient';

interface HeroVideoProps {
  videoSrc: string;
  posterSrc?: string;
  overlayText?: string;
  'data-testid'?: string;
}

/**
 * HeroVideo Component
 * Loads processed video with HTML text overlay replacing "Atlas" with "J7 Emporium"
 * Uses HeadingGradient for the text overlay
 * @param videoSrc - Path to processed video
 * @param posterSrc - Poster image for initial load
 * @param overlayText - Text to display (defaults to "J7 Emporium")
 */
const HeroVideo: React.FC<HeroVideoProps> = ({
  videoSrc,
  posterSrc,
  overlayText = 'J7 Emporium',
  'data-testid': testId,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" data-testid={testId}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* TODO: Add WebM format for better browser support */}
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Text Overlay - Replaces any "Atlas" branding */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <HeadingGradient level="h1" className="mb-4">
            {overlayText}
          </HeadingGradient>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
