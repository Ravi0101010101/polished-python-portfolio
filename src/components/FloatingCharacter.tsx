import { useEffect, useState } from 'react';
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

interface FloatingCharacterProps {
  className?: string;
  onClick?: () => void;
}

export const FloatingCharacter = ({ className, onClick }: FloatingCharacterProps) => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 });
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 2000);
    onClick?.();
  };

  return (
    <div
      className={cn(
        "fixed w-16 h-16 transition-all duration-[2000ms] ease-in-out cursor-pointer",
        isWaving && "animate-wave",
        className
      )}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`
      }}
      onClick={handleClick}
    >
      <div className={cn(
        "w-full h-full rounded-full relative overflow-hidden",
        "bg-gradient-to-b from-primary to-primary/80",
        "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/10 before:to-transparent",
        "hover:scale-110 transition-transform duration-300"
      )}>
        {/* Face Features */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Eyes */}
          <div className="flex space-x-2 mb-2">
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          {/* Mouth */}
          <div className={cn(
            "w-4 h-2 border-2 border-white rounded-full transform",
            theme === 'dark' ? "-rotate-12" : "rotate-12"
          )} />
        </div>
      </div>
    </div>
  );
};