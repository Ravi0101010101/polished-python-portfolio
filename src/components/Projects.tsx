import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "CI/CD Pipeline Automation",
    description: "Built a seamless CI/CD pipeline integrating Docker, Kubernetes, and Jenkins. Reduced deployment times by 40%, ensuring smooth production updates.",
    tech: ["Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "E-Commerce Backend with Django",
    description: "Developed a secure, high-performance backend for a dynamic e-commerce platform. Implemented user authentication, product filtering, and payment gateway integrations.",
    tech: ["Django", "PostgreSQL", "REST API"],
  },
  {
    title: "Algo Trading Bot",
    description: "Designed an advanced Python-based trading bot leveraging market trends and DSA principles. Generated a 15% ROI within 3 months of deployment.",
    tech: ["Python", "Data Analysis", "APIs"],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono gradient-text">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-secondary/50 backdrop-blur hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};