import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Smartphone, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Desarrollo Web",
    features: ["Landing pages", "Sitios corporativos", "Ecommerce", "Portales empresariales"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Aplicaciones Móviles",
    features: ["Android", "iOS", "React Native"],
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Software Empresarial",
    features: ["ERP", "CRM", "Automatización", "Gestión de procesos"],
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Integraciones",
    features: ["APIs", "Pasarelas de pago", "WhatsApp", "Sistemas externos"],
    color: "from-orange-500 to-yellow-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Soluciones Tecnológicas para <br />
            <span className="text-gradient">Impulsar tu Negocio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Combinamos diseño excepcional con ingeniería de vanguardia para crear productos digitales que destacan.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative h-full p-8 glass-card rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-white/20">
                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-display font-semibold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
