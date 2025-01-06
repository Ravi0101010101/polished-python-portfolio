import { Parallax } from 'react-scroll-parallax';
import { Projects as ProjectsComponent } from "@/components/Projects";
import { DayNightBackground } from "@/components/DayNightBackground";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DayNightBackground />
      <Parallax speed={-20}>
        <div className="fixed inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
      </Parallax>
      <div className="relative z-10">
        <ProjectsComponent />
      </div>
    </div>
  );
};

export default Projects;