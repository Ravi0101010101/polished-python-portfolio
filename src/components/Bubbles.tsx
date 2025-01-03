import { useEffect, useRef } from 'react';

export const Bubbles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create bubbles
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size between 20px and 60px
      const size = Math.random() * 40 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = '-100px';
      
      // Random animation duration between 8 and 12 seconds
      bubble.style.animationDuration = `${8 + Math.random() * 4}s`;
      
      container.appendChild(bubble);

      // Remove bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, 12000);
    };

    // Create bubbles periodically
    const interval = setInterval(createBubble, 2000);

    // Initial bubbles
    for (let i = 0; i < 5; i++) {
      setTimeout(createBubble, i * 1000);
    }

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="bubble-container" />;
};