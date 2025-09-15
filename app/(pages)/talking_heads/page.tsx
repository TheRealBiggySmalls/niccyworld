import { WigglyText } from '@/app/components/ui/WigglyText';

export default function TalkingHeads() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '50%',
            height: '50%',
            display: 'block',
            objectFit: 'contain',
            mixBlendMode: 'screen',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)', 
          }}
        >
          <source src="/3d/natty2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="text-3xl font-bold">
          <WigglyText 
            text="coming soon..." 
            color="#6d8196"
          />
        </div>
    </div>
  );
}