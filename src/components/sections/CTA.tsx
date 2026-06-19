import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="glass-card max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center border-white/10 relative overflow-hidden"
        >
          {/* Inner glowing edge */}
          <div className="absolute inset-0 border-2 border-white/5 rounded-[3rem] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[3rem] pointer-events-none" />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight"
          >
            ¿Listo para llevar tu negocio al <br />
            <span className="text-gradient">siguiente nivel?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Construyamos juntos una solución digital moderna, rápida y escalable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="https://wa.me/51980911325"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold rounded-full flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              <Calendar className="w-5 h-5" />
              Agendar Reunión
            </a>
            <a 
              href="https://wa.me/51980911325"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full flex items-center justify-center gap-3 transition-all hover:scale-105 border border-white/20"
            >
              <Mail className="w-5 h-5" />
              Solicitar Cotización
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Disponibilidad Inmediata
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
            <div className="hidden sm:block">Respuesta en 24h</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
