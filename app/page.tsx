"use client";
import { ScrollingBanner } from './components/ui/ScrollingBanner';
import { useState, useEffect } from 'react';

export default function Home() {
  const repeatingText = "niccy world   •   you are 'online'   •   welcome to niccy world   •   niccy world is 'online'   •   ";
  const [bannerPosition, setBannerPosition] = useState(0);

  useEffect(() => {
    setBannerPosition(window.innerHeight - 100);
    
    const handleResize = () => {
      setBannerPosition(window.innerHeight - 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      position: 'relative',
    }}>
      {/*<h1 style={{
        color: '#7fff00', // acid green
        fontSize: '4rem',
        fontWeight: 'bold',
        textShadow: '0 0 10px rgba(127, 255, 0, 0.5)',
        fontFamily: 'Arial, sans-serif',
      }}>
        Niccy World
      </h1>*/}
      <ScrollingBanner
        text={repeatingText.repeat(3)} // Repeat the text multiple times to ensure continuous scrolling
        color="#6d8196"
        speed={45} // Increased from 30 to 45 to make it slower (2/3 original speed)
        position={bannerPosition} // Position 100px from bottom
        fontSize="1.2rem"
        backgroundColor="transparent"
      />
      <div style={{
          width: '450px',
          height: '450px',
          position: 'fixed',
          animation: 'float 3s ease-in-out infinite',
        }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'contain',
            mixBlendMode: 'screen',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)', // Enable alpha in WebKit
          }}
        >
          <source src="/rose_alpha.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}