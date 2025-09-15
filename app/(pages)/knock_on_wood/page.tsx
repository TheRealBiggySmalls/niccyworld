import Image from 'next/image';
import Link from 'next/link';
import { WigglyText } from '@/app/components/ui/WigglyText';

export default function KnockOnWood() {
  const appUrl = 'https://apps.apple.com/de/app/knock-on-wood/id6749827019';
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link 
        href={appUrl}
        className="flex items-center gap-8 hover:opacity-80 transition-opacity"
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
    </div>
  );
}