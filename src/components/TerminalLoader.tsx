import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const messages = [
  "Initializing portfolio...",
  "Loading Django modules...",
  "Fetching projects...",
  "Setting up backend...",
  "Ready to deploy 🚀"
];

export const TerminalLoader = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setIsComplete(true), 1000);
    }
  }, [currentMessageIndex]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 font-mono text-green-500 space-y-2">
        {messages.slice(0, currentMessageIndex).map((message, index) => (
          <div key={index} className="animate-fadeIn">
            <span className="text-green-300">$</span> {message}
          </div>
        ))}
        <div className={cn(
          "h-4 w-2 bg-green-500 inline-block ml-1",
          showCursor && "animate-pulse"
        )} />
      </div>
    </div>
  );
};