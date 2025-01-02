import { Card } from "@/components/ui/card";

const experiences = [
  {
    period: "2022 - Present",
    role: "Senior Python Developer",
    company: "Tech Solutions Inc.",
    description: "Leading backend development team, implementing microservices architecture, and optimizing system performance.",
  },
  {
    period: "2020 - 2022",
    role: "DevOps Engineer",
    company: "Cloud Systems Ltd.",
    description: "Managed CI/CD pipelines, containerized applications, and automated deployment processes.",
  },
  {
    period: "2018 - 2020",
    role: "Python Developer",
    company: "Software Innovations",
    description: "Developed and maintained Django applications, implemented RESTful APIs, and optimized database queries.",
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono gradient-text">
          Professional Journey
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:scale-[1.02] transition-transform duration-300 bg-secondary/50 backdrop-blur">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/4">
                  <span className="text-blue-400 font-mono">{exp.period}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                  <h4 className="text-blue-400 mb-2">{exp.company}</h4>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};