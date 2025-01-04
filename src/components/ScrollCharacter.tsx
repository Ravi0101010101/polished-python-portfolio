import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollCharacter = () => {
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!characterRef.current) return;

    gsap.to(characterRef.current, {
      y: '100vh',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });
  }, []);

  return (
    <div 
      ref={characterRef} 
      className="fixed left-4 z-50 pointer-events-none"
      style={{ top: '-100px' }}
    >
      <div className="w-16 h-16 bg-primary rounded-full animate-bounce">
        <div className="w-4 h-4 bg-white rounded-full absolute top-3 left-3" />
        <div className="w-4 h-4 bg-white rounded-full absolute top-3 right-3" />
        <div className="w-8 h-2 bg-white rounded-full absolute bottom-4 left-4" />
      </div>
    </div>
  );
};