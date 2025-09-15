'use client';

import React from 'react';
import styles from './ScrollingBanner.module.css';

interface ScrollingBannerProps {
  text: string;
  speed?: number; // Duration in seconds for one complete scroll
  position?: number; // Position from top of the page in pixels
  className?: string;
  color?: string;
  fontSize?: string;
  backgroundColor?: string;
}

export const ScrollingBanner: React.FC<ScrollingBannerProps> = ({
  text,
  speed = 20,
  position = 100,
  className = '',
  color = 'inherit',
  fontSize = '2rem',
  backgroundColor = 'transparent',
}) => {
  return (
    <div 
      className={`${styles.bannerContainer} ${className}`}
      style={{
        top: `${position}px`,
        backgroundColor,
      }}
    >
      <div 
        className={styles.scrollingText}
        style={{
          animation: `${styles.scrollText} ${speed}s linear infinite`,
          color,
          fontSize,
        }}
      >
        {text}
      </div>
    </div>
  );
};