"use client";

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
    }}>
      <h1 style={{
        color: '#7fff00', // acid green
        fontSize: '4rem',
        fontWeight: 'bold',
        textShadow: '0 0 10px rgba(127, 255, 0, 0.5)',
        fontFamily: 'Arial, sans-serif',
      }}>
        Niccy World
      </h1>
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