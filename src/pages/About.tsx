const About = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Who Am I?</h2>
          <p className="text-lg">
            I'm a skilled Python Developer specializing in Django, DevOps, and Data Structures & Algorithms (DSA). 
            With a passion for solving complex challenges and building scalable systems, I thrive at the intersection 
            of backend development, cloud automation, and performance optimization.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">My Journey</h2>
          <p className="text-lg">
            Throughout my career, I've focused on building robust, scalable systems that solve real-world problems. 
            I've worked extensively with Python, Django, and various cloud platforms, always striving to create 
            efficient and maintainable solutions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">My Approach</h2>
          <p className="text-lg">
            I believe in writing clean, maintainable code that solves problems effectively. My experience in DevOps 
            has taught me the importance of automation and scalability, while my background in algorithms helps me 
            optimize solutions for performance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;