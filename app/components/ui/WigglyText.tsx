'use client';

import React from 'react';
import styles from './WigglyText.module.css';

interface WigglyTextProps {
  text: string;
  className?: string;
  color?: string;
  fontFamily?: string;
}

export const WigglyText: React.FC<WigglyTextProps> = ({ 
  text, 
  className = '',
  color,
  fontFamily,
}) => {
  return (
    <span 
      className={`${styles.wigglyContainer} ${className}`}
      style={{
        color: color,
        fontFamily: fontFamily,
      }}
    >
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className={styles.wigglyChar}
          style={{ 
            animationDelay: `${index * 0.1}s`,
            ...(char === ' ' ? { display: 'inline-block', width: '0.3em' } : {}),
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};