import { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

export const DayNightBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cloudsRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const celestialBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });

      if (celestialBodyRef.current) {
        celestialBodyRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

    const createStar = () => {
      if (!starsRef.current) return;
      
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;
      
      starsRef.current.appendChild(star);
      
      setTimeout(() => star.remove(), 3000);
    };

    const cloudInterval = setInterval(createCloud, 10000);
    const starInterval = setInterval(createStar, 1000);
    
    for (let i = 0; i < 3; i++) createCloud();

    return () => {
      clearInterval(cloudInterval);
      clearInterval(starInterval);
      if (cloudsRef.current) {
        cloudsRef.current.innerHTML = '';
      }
      if (starsRef.current) {
        starsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div className="sky-background" />
      <Parallax speed={-5}>
        <div ref={celestialBodyRef} className="celestial-body transition-transform duration-300 ease-out" />
      </Parallax>
      <div ref={starsRef} className="stars" />
      <div className="aurora" />
      <div ref={cloudsRef} className="fixed inset-0 overflow-hidden pointer-events-none" />
    </>
  );
};