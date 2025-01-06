import { Parallax } from 'react-scroll-parallax';
import { DayNightBackground } from "@/components/DayNightBackground";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DayNightBackground />
      <Parallax speed={-20}>
        <div className="fixed inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
      </Parallax>
      <div className="relative z-10">
        <Parallax speed={-10}>
          <h1 className="text-4xl font-bold mb-8 text-center pt-8">Contact Me</h1>
        </Parallax>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;