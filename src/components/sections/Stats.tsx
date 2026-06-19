import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { value: 20, suffix: '+', label: "Proyectos Entregados", color: "text-blue-400" },
  { value: 95, suffix: '%', label: "Clientes Satisfechos", color: "text-cyan-400" },
  { value: 1000, suffix: '+', label: "Horas Ahorradas", color: "text-emerald-400" },
  { value: 5, suffix: '+', label: "Países Alcanzados", color: "text-purple-400" }
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <section className="py-20 relative border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${stat.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    useEasing={true}
                    separator=","
                  />
                ) : "0"}
                {stat.suffix}
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
