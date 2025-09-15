import Image from 'next/image';
import Link from 'next/link';
import { WigglyText } from '@/app/components/ui/WigglyText';

export default function KnockOnWood() {
  const appUrl = 'https://apps.apple.com/de/app/knock-on-wood/id6749827019';
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <Link 
        href={appUrl}
        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
      >
        <div className="text-4xl font-bold">
          <WigglyText 
            text="knock on wood" 
            color="#E4D96F"
          />
        </div>
        <Image
          src="/knock_on_wood.png"
          alt="Knock on Wood icon"
          width={128}
          height={128}
          className="w-32 h-32"
        />
      </Link>

      {/* portraits */}
      <div className="absolute top-8 left-8 flex flex-col items-center gap-3" style={{
        padding: '15px',
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
        border: '2px solid #333333',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
      }}>
        <div className="w-24 h-24 relative" style={{
          border: '3px solid #666666',
          borderRadius: '50%',
          overflow: 'hidden',
          background: '#333333', // Placeholder background until image is provided
        }}>
          {/* Placeholder for portrait image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Image Coming Soon
          </div>
        </div>
        <div style={{
          fontFamily: 'Comic Sans MS, cursive',
          color: '#00ff00', // Matrix-style green
          textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00',
          textAlign: 'center',
          letterSpacing: '1px',
        }}>
          <div style={{ marginBottom: '4px' }}>Co created by</div>
          <div style={{
            fontSize: '1.2em',
            fontWeight: 'bold',
            marginBottom: '4px',
          }}>
            Eamon McKinney
          </div>
          <div style={{
            color: '#ff00ff', // Bright pink
            textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff',
          }}>
            #freeeamon
          </div>
        </div>
      </div>
    <div className="absolute top-8 right-8 flex flex-col items-center gap-3" style={{
        padding: '15px',
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
        border: '2px solid #333333',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
      }}>
        <div className="w-24 h-24 relative" style={{
          border: '3px solid #666666',
          borderRadius: '50%',
          overflow: 'hidden',
          background: '#333333', // Placeholder background until image is provided
        }}>
          {/* Placeholder for portrait image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Image Coming Soon
          </div>
        </div>
        <div style={{
          fontFamily: 'Comic Sans MS, cursive',
          color: '#00ff00', // Matrix-style green
          textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00',
          textAlign: 'center',
          letterSpacing: '1px',
        }}>
          <div style={{ marginBottom: '4px' }}>Co created by</div>
          <div style={{
            fontSize: '1.2em',
            fontWeight: 'bold',
            marginBottom: '4px',
          }}>
            Nicholas Sujecki
          </div>
          <div style={{
            color: '#ff00ff', // Bright pink
            textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff',
          }}>
            #developermode
          </div>
        </div>
      </div>

      {/* Support link */}
      <Link 
        href="https://therealbiggysmalls.github.io/"
        className="absolute bottom-6 left-6 text-xs text-[#6d8196] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        app support
      </Link>
    </div>
  );
}