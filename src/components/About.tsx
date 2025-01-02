export const About = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-mono gradient-text">
          About Me
        </h2>
        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            I'm a passionate Python Developer with expertise in Django, DevOps, and Data Structures & Algorithms. 
            With a strong foundation in backend development and system architecture, I specialize in building 
            scalable, efficient solutions that solve real-world problems.
          </p>
          <p className="leading-relaxed">
            My journey in software development began with a fascination for automation and problem-solving. 
            Today, I leverage my skills in Python, Django, and various DevOps tools to create robust 
            applications that deliver exceptional performance and user experience.
          </p>
        </div>
      </div>
    </section>
  );
};