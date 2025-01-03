import { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';

export const DayNightBackground = () => {
  const cloudsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createCloud = () => {
      if (!cloudsRef.current) return;
      
      const cloud = document.createElement('div');
      cloud.className = 'cloud';
      cloud.style.width = `${Math.random() * 200 + 100}px`;
      cloud.style.height = `${Math.random() * 60 + 30}px`;
      cloud.style.left = '-200px';
      cloud.style.top = `${Math.random() * 40}%`;
      cloud.style.borderRadius = '20px';
      
      cloudsRef.current.appendChild(cloud);

      let position = -200;
      const speed = Math.random() * 0.5 + 0.1;
      
      const moveCloud = () => {
        position += speed;
        cloud.style.transform = `translateX(${position}px)`;
        
        if (position < window.innerWidth + 200) {
          requestAnimationFrame(moveCloud);
        } else {
          cloud.remove();
        }
      };

      requestAnimationFrame(moveCloud);
    };

    const interval = setInterval(createCloud, 10000);
    for (let i = 0; i < 3; i++) createCloud();

    return () => {
      clearInterval(interval);
      if (cloudsRef.current) {
        cloudsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div className="sky-background" />
      <Parallax speed={-5}>
        <div className="celestial-body" />
      </Parallax>
      <div className="stars" />
      <div className="aurora" />
      <div ref={cloudsRef} className="fixed inset-0 overflow-hidden pointer-events-none" />
    </>
  );
};