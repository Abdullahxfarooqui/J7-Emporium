'use client';

import React from 'react';

interface HeadingGradientProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

/**
 * HeadingGradient Component
 * Applies J7 Emporium heading gradient via background-clip
 * @param level - HTML heading level (h1-h6)
 * @param children - Text content
 * @param className - Additional CSS classes
 */
const HeadingGradient: React.FC<HeadingGradientProps> = ({
  level,
  children,
  className = '',
  'data-testid': testId,
}) => {
  const Tag = level;
  
  const baseStyles = 'heading-gradient font-sora font-bold';
  
  const sizeStyles = {
    h1: 'text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-4xl md:text-5xl lg:text-6xl',
    h3: 'text-3xl md:text-4xl lg:text-5xl',
    h4: 'text-2xl md:text-3xl lg:text-4xl',
    h5: 'text-xl md:text-2xl lg:text-3xl',
    h6: 'text-lg md:text-xl lg:text-2xl',
  };

  return (
    <Tag
      className={`${baseStyles} ${sizeStyles[level]} ${className}`}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};

export default HeadingGradient;
