import React from 'react';

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "MongoDB", "Firebase", "Tailwind CSS", "Docker", "AWS",
  "React Native", "GraphQL", "Redis", "Figma"
];

const TechStack = () => {
  return (
    <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <h2 className="text-center font-display text-2xl text-gray-400 font-medium">
          Tecnologías que dominamos
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Gradients for smooth fade effect at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent" />

        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {technologies.map((tech, i) => (
            <span key={i} className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-wider hover:from-primary/50 hover:to-accent/50 transition-all duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
          {technologies.map((tech, i) => (
            <span key={`clone-${i}`} className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-wider hover:from-primary/50 hover:to-accent/50 transition-all duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
