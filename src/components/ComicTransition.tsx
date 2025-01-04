import { useEffect } from 'react';
import gsap from 'gsap';

export const ComicTransition = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      gsap.from(section, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return null;
};