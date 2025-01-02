import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 font-mono gradient-text">About Me</h1>
      <div className="space-y-8">
        <Card className="bg-secondary/50 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">My Story</h2>
            <p className="text-lg text-gray-300">
              I'm a Python Developer with a passion for problem-solving and a flair for creating high-performance, 
              scalable systems. I specialize in Django, DevOps, and Data Structures & Algorithms (DSA)—bridging 
              the gap between logic, automation, and creativity.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondary/50 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">My Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Understand & Strategize</h3>
                <p className="text-gray-300">
                  I dive deep into understanding your needs, analyzing the core challenges, and crafting 
                  a roadmap tailored to your goals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Design & Build</h3>
                <p className="text-gray-300">
                  Every line of code is intentional, balancing performance, scalability, and simplicity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Deliver & Evolve</h3>
                <p className="text-gray-300">
                  I ensure that what I build today can scale and evolve for tomorrow. Post-deployment, 
                  I continue refining for long-term success.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;