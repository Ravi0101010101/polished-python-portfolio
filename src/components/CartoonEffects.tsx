import { useEffect } from 'react';
import gsap from 'gsap';
import { Howl } from 'howler';

// Sound effects
const sounds = {
  hover: new Howl({ src: ['/sounds/boop.mp3'] }),
  click: new Howl({ src: ['/sounds/pop.mp3'] }),
  success: new Howl({ src: ['/sounds/success.mp3'] }),
};

export const useCartoonEffects = () => {
  useEffect(() => {
    // Add hover effects to all interactive elements
    const elements = document.querySelectorAll('.cartoon-hover');
    
    elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        sounds.hover.play();
        gsap.to(element, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)"
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)"
        });
      });

      element.addEventListener('click', () => {
        sounds.click.play();
        gsap.to(element, {
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1
        });
      });
    });
  }, []);
};