import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Map, PenTool, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  { icon: <Search />, title: "Descubrimiento", desc: "Analizo tu negocio, objetivos y competencia." },
  { icon: <Map />, title: "Planificación", desc: "Defino la arquitectura, tecnologías y cronograma." },
  { icon: <PenTool />, title: "Diseño UX/UI", desc: "Creo prototipos interactivos y diseño visual." },
  { icon: <Code />, title: "Desarrollo", desc: "Programo con las últimas tecnologías." },
  { icon: <TestTube />, title: "Pruebas", desc: "QA exhaustivo para garantizar calidad." },
  { icon: <Rocket />, title: "Implementación", desc: "Despliegue y monitoreo en producción." }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Mi <span className="text-gradient">Proceso</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Una metodología probada para transformar tu visión en un producto digital excepcional, paso a paso.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            style={{ height }}
          />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-16`}>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="glass-card p-8 rounded-3xl inline-block w-full"
                    >
                      <span className="text-primary font-bold text-lg mb-2 block">Paso 0{index + 1}</span>
                      <h3 className="text-2xl font-display font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Icon Marker */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="absolute left-8 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-16 h-16 rounded-full glass border-2 border-primary bg-background flex items-center justify-center z-10 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Empty space for alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
