import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export const ScrollCharacter = () => {
  const [expression, setExpression] = useState<'smile' | 'neutral' | 'sad'>('smile');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const characterRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      if (scrollPercentage < 0.33) {
        setExpression('smile');
      } else if (scrollPercentage < 0.66) {
        setExpression('neutral');
      } else {
        setExpression('sad');
      }

      // Toggle floating animation periodically
      setIsFloating(prev => !prev);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
    setIsFloating(false);
    toast({
      title: "Character is now draggable!",
      description: "Move me anywhere on the screen",
      duration: 2000,
    });
  };

  const handleDragStop = (e: any, data: { x: number; y: number }) => {
    setIsDragging(false);
    setIsFloating(true);
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      onStart={handleDragStart}
      onStop={handleDragStop}
      position={position}
      bounds="parent"
    >
      <div 
        ref={characterRef}
        className={cn(
          "fixed z-50 cursor-move touch-none select-none transition-all duration-300",
          isFloating && !isDragging ? "animate-float" : "",
          isDragging ? "scale-110" : ""
        )}
        style={{
          right: '2rem',
          bottom: '2rem',
        }}
      >
        <div className={cn(
          "w-16 h-16 bg-primary rounded-full relative shadow-lg transition-all duration-300",
          isDragging ? "shadow-xl" : ""
        )}>
          {/* Character Base with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/80 rounded-full" />
          
          {/* Tech Accessories - Glasses */}
          <div className="absolute top-5 left-2 w-12 h-3 flex space-x-1">
            <div className="w-4 h-3 border-2 border-white rounded-full" />
            <div className="w-4 h-3 border-2 border-white rounded-full" />
          </div>
          
          {/* Laptop (when not dragging) */}
          {!isDragging && (
            <div className="absolute -right-4 bottom-2 w-6 h-4 bg-white/90 rounded-sm transform -rotate-12">
              <div className="w-full h-0.5 bg-primary/20 rounded-full mt-1" />
            </div>
          )}
          
          {/* Expression */}
          <div className="absolute bottom-4 left-4 w-8 h-2">
            {expression === 'smile' && (
              <div className="w-8 h-2 border-b-2 border-white rounded-full animate-fadeIn" />
            )}
            {expression === 'neutral' && (
              <div className="w-8 h-0.5 bg-white rounded-full animate-fadeIn" />
            )}
            {expression === 'sad' && (
              <div className="w-8 h-2 border-t-2 border-white rounded-full animate-fadeIn" />
            )}
          </div>
          
          {/* Hoodie */}
          <div className="absolute -bottom-2 -left-2 -right-2 h-6 bg-primary/80 rounded-full">
            <div className="absolute inset-x-0 top-1 h-1 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>
    </Draggable>
  );
};