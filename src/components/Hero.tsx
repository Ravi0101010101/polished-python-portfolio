import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Parallax } from 'react-scroll-parallax';
import { useEffect } from "react";
import gsap from "gsap";

export const Hero = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.social-button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        gsap.to(e.currentTarget, {
          scale: 1.1,
          rotation: 6,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
      
      button.addEventListener('mouseleave', (e) => {
        gsap.to(e.currentTarget, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
      <Parallax speed={-15}>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
      </Parallax>
      
      <div className="animate-fadeIn space-y-6 max-w-3xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-mono gradient-text cartoon-hover">
          Meet Ravi
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 cartoon-hover">
          Python Developer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Specializing in Django, DevOps, and Data Structures & Algorithms (DSA).
          Building scalable systems and solving complex challenges.
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="social-button cartoon-hover transition-all duration-300 hover:bg-background/80"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="social-button cartoon-hover transition-all duration-300 hover:bg-background/80"
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="social-button cartoon-hover transition-all duration-300 hover:bg-background/80"
          >
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};