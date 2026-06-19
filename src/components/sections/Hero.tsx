import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // Parallax background stars/particles effect using GSAP
    const ctx = gsap.context(() => {
      gsap.to('.particle', {
        y: 'random(-100, 100)',
        x: 'random(-100, 100)',
        opacity: 'random(0.2, 0.8)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 5,
          from: 'random'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const titleWords = "Transformo Ideas en Software que Genera Resultados".split(" ");

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white rounded-full mix-blend-screen"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
        >
          <span className="text-xl">🚀</span>
          <span className="text-sm font-medium text-gray-200">
            Desarrollo Web, Mobile y Software Empresarial
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.1,
                type: "spring",
                bounce: 0.4
              }}
              className="inline-block mr-[0.2em] last:mr-0"
              style={{ transformOrigin: "bottom" }}
            >
              {word === 'Software' || word === 'Resultados' ? (
                <span className="text-gradient">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Diseño aplicaciones web, aplicaciones móviles y sistemas empresariales que optimizan procesos, aumentan productividad y ayudan a escalar negocios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
              Ver Proyectos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="https://wa.me/51980911325"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass border-white/10 hover:bg-white/10 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            Solicitar Cotización
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
