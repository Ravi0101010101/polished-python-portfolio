import { Parallax } from 'react-scroll-parallax';
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { ContactForm } from "@/components/ContactForm";
import { Background3D } from "@/components/Background3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-background/50 relative">
      <Background3D />
      
      <div className="relative z-10">
        <Parallax speed={-20}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-background pointer-events-none" />
        </Parallax>
        
        <Hero />
        
        <Parallax speed={-10}>
          <About />
        </Parallax>
        
        <Parallax speed={-5}>
          <Skills />
        </Parallax>
        
        <Projects />
        
        <Parallax speed={-10}>
          <Experience />
        </Parallax>
        
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;