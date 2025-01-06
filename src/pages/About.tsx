import { Parallax } from 'react-scroll-parallax';
import { DayNightBackground } from "@/components/DayNightBackground";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DayNightBackground />
      <Parallax speed={-20}>
        <div className="fixed inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
      </Parallax>
      <div className="max-w-4xl mx-auto space-y-8 relative z-10 p-8">
        <Parallax speed={-10}>
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        </Parallax>
        
        <Parallax speed={-5}>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Who Am I?</h2>
            <p className="text-lg">
              I'm a skilled Python Developer specializing in Django, DevOps, and Data Structures & Algorithms (DSA). 
              With a passion for solving complex challenges and building scalable systems, I thrive at the intersection 
              of backend development, cloud automation, and performance optimization.
            </p>
          </section>
        </Parallax>

        <Parallax speed={-8}>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">My Journey</h2>
            <p className="text-lg">
              Throughout my career, I've focused on building robust, scalable systems that solve real-world problems. 
              I've worked extensively with Python, Django, and various cloud platforms, always striving to create 
              efficient and maintainable solutions.
            </p>
          </section>
        </Parallax>

        <Parallax speed={-6}>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">My Approach</h2>
            <p className="text-lg">
              I believe in writing clean, maintainable code that solves problems effectively. My experience in DevOps 
              has taught me the importance of automation and scalability, while my background in algorithms helps me 
              optimize solutions for performance.
            </p>
          </section>
        </Parallax>
      </div>
    </div>
  );
};

export default About;