import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const problems = [
  "Procesos manuales lentos",
  "Pérdida de tiempo",
  "Información dispersa",
  "Falta de presencia digital",
  "Baja conversión de clientes"
];

const Problems = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0c]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-[128px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                El crecimiento de tu negocio está limitado por <span className="text-red-400">tecnología obsoleta</span>
              </h2>
              
              <div className="space-y-4 mb-12">
                {problems.map((prob, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 text-gray-400 p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <span className="text-lg">{prob}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full" />
              
              <div className="glass-card p-10 rounded-3xl relative z-10 border-white/10 text-center">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={inView ? { rotate: 0, scale: 1 } : {}}
                  transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/25"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="font-display text-3xl font-bold mb-6 text-white">
                  La Solución
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Nosotros convertimos esos problemas en <span className="text-white font-semibold">oportunidades</span> mediante software inteligente, escalable y diseñado para resultados.
                </p>
                
                <a 
                  href="https://wa.me/51980911325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium text-lg"
                >
                  Descubre cómo podemos ayudarte <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
