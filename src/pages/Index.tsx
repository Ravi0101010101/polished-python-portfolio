import { Parallax } from 'react-scroll-parallax';
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { ContactForm } from "@/components/ContactForm";
import { ScrollCharacter } from "@/components/ScrollCharacter";
import { ComicTransition } from "@/components/ComicTransition";
import { useCartoonEffects } from "@/components/CartoonEffects";

const Index = () => {
  useCartoonEffects();

  return (
    <div className="min-h-screen relative">
      <ScrollCharacter />
      <ComicTransition />
      
      <div className="relative z-10">
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