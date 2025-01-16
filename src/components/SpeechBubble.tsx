import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  message: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  duration?: number;
  onClose?: () => void;
}

export const SpeechBubble = ({
  message,
  position = 'top',
  className,
  duration = 3000,
  onClose
}: SpeechBubbleProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "absolute z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg",
        "animate-fadeIn before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white dark:before:bg-gray-800 before:transform",
        position === 'top' && "before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:rotate-45",
        position === 'bottom' && "before:-top-2 before:left-1/2 before:-translate-x-1/2 before:rotate-45",
        position === 'left' && "before:-right-2 before:top-1/2 before:-translate-y-1/2 before:rotate-45",
        position === 'right' && "before:-left-2 before:top-1/2 before:-translate-y-1/2 before:rotate-45",
        className
      )}
    >
      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{message}</p>
    </div>
  );
};