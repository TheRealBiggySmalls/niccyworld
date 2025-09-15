import { WigglyText } from '@/app/components/ui/WigglyText';

export default function TalkingHeads() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-3xl font-bold">
          <WigglyText 
            text="coming soon..." 
            color="#6d8196"
          />
        </div>
    </div>
  );
}