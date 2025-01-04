import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { useToast } from './ui/use-toast';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([0.5]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const togglePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play().catch(() => {
          toast({
            title: "Playback blocked",
            description: "Please interact with the page first to enable audio.",
            variant: "destructive"
          });
        });
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0];
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg md:p-3">
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        className="hover:scale-110 transition-transform"
      >
        {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>
      
      <div className="hidden md:block w-24">
        <Slider
          value={volume}
          onValueChange={handleVolumeChange}
          max={1}
          step={0.1}
          className="cursor-pointer"
        />
      </div>

      <audio
        ref={audioRef}
        loop
        src="/ambient-typing.mp3"
        className="hidden"
      />
    </div>
  );
};