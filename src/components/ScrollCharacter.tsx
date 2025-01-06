import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

export const ScrollCharacter = () => {
  const [expression, setExpression] = useState<'smile' | 'neutral' | 'sad'>('smile');
  const characterRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState(true);

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

  return (
    <div 
      ref={characterRef}
      className={cn(
        "fixed right-8 bottom-8 z-50 pointer-events-none transition-all duration-300",
        isFloating ? "translate-y-0" : "translate-y-2"
      )}
    >
      <div className="w-16 h-16 bg-primary rounded-full relative shadow-lg">
        {/* Character Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/80 rounded-full" />
        
        {/* Glasses */}
        <div className="absolute top-5 left-2 w-12 h-3 flex space-x-1">
          <div className="w-4 h-3 border-2 border-white rounded-full" />
          <div className="w-4 h-3 border-2 border-white rounded-full" />
        </div>
        
        {/* Expression */}
        <div className="absolute bottom-4 left-4 w-8 h-2">
          {expression === 'smile' && (
            <div className="w-8 h-2 border-b-2 border-white rounded-full" />
          )}
          {expression === 'neutral' && (
            <div className="w-8 h-0.5 bg-white rounded-full" />
          )}
          {expression === 'sad' && (
            <div className="w-8 h-2 border-t-2 border-white rounded-full" />
          )}
        </div>
        
        {/* Hoodie */}
        <div className="absolute -bottom-2 -left-2 -right-2 h-6 bg-primary/80 rounded-full" />
      </div>
    </div>
  );
};