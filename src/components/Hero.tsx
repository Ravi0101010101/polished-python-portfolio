import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <div className="animate-fadeIn space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold font-mono gradient-text">
          Meet Ravi
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
          Python Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Specializing in Django, DevOps, and Data Structures & Algorithms (DSA).
          Building scalable systems and solving complex challenges.
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
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