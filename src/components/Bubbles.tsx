import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Bubbles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.width = `${Math.random() * 50 + 20}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = '-50px';
      
      containerRef.current?.appendChild(bubble);

      gsap.to(bubble, {
        y: -(window.innerHeight + 100),
        x: (Math.random() - 0.5) * 200,
        duration: Math.random() * 4 + 4,
        ease: "power1.out",
        onComplete: () => {
          bubble.remove();
        }
      });
    };

    const interval = setInterval(createBubble, 2000);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="bubble-container" />;
};