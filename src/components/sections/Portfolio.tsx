import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Afrivet",
    category: "Web & Sistema",
    desc: "Empresa veterinaria y servicios especializados.",
    link: "https://afrivet.vercel.app/",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Clínica GoKids",
    category: "Plataforma Médica",
    desc: "Centro médico infantil. Sistema de reservas e información.",
    link: "https://clinicagokids.vercel.app/",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "BlueKids",
    category: "Web Educativa",
    desc: "Educación y desarrollo infantil. Plataforma interactiva.",
    link: "https://bluekids.vercel.app/",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Crece con tu Bebé",
    category: "Comunidad & Portal",
    desc: "Acompañamiento para padres y bebés.",
    link: "https://crececontubebe.com/",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Chocados Contreras",
    category: "Ecommerce & Catálogo",
    desc: "Venta de vehículos usados en Chile. Catálogo dinámico.",
    link: "https://chocadoscontreras.cl/",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000",
    color: "from-red-500/20 to-rose-500/20"
  },
  {
    title: "Baby Hydro Spa",
    category: "Web Corporativa",
    desc: "Spa especializado para bebés en Perú. Sistema de citas.",
    link: "https://babyhydrospa.pe/",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

const PortfolioCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 ease-out h-[450px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-background z-0" />
        
        {/* Background Image with Cinematic Zoom */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-20`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Content */}
        <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end translate-z-[50px]">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-3 block">
              {project.category}
            </span>
            <h3 className="font-display text-3xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
              {project.desc}
            </p>
          </div>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 left-8 right-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 border-t border-white/10 pt-4"
          >
            <span className="text-white font-medium">Visitar Proyecto</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md hover:bg-primary transition-colors">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative bg-[#020202]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Casos de <span className="text-gradient">Éxito</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Proyectos reales que han transformado negocios. Diseñamos experiencias digitales que cautivan y convierten.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
