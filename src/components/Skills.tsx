import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Languages",
    items: ["Python", "Bash"],
  },
  {
    category: "Frameworks",
    items: ["Django", "Flask"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "GCP"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono gradient-text">
          Tech Toolbox
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.category} className="p-6 bg-secondary/50 backdrop-blur">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};