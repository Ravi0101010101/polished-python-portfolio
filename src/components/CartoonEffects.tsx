import { useEffect } from 'react';
import gsap from 'gsap';
import { Howl } from 'howler';

const sounds = {
  hover: new Howl({ src: ['/sounds/boop.mp3'], volume: 0.5 }),
  click: new Howl({ src: ['/sounds/pop.mp3'], volume: 0.5 }),
  success: new Howl({ src: ['/sounds/success.mp3'], volume: 0.5 })
};

export const useCartoonEffects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.cartoon-hover');
    
    const handleMouseEnter = (element: Element) => {
      sounds.hover.play();
      gsap.to(element, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
    };

    const handleMouseLeave = (element: Element) => {
      gsap.to(element, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
    };

    const handleClick = (element: Element) => {
      sounds.click.play();
      gsap.to(element, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    };

    elements.forEach(element => {
      element.addEventListener('mouseenter', () => handleMouseEnter(element));
      element.addEventListener('mouseleave', () => handleMouseLeave(element));
      element.addEventListener('click', () => handleClick(element));
    });

    // Cleanup
    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseenter', () => handleMouseEnter(element));
        element.removeEventListener('mouseleave', () => handleMouseLeave(element));
        element.removeEventListener('click', () => handleClick(element));
      });
    };
  }, []);
};