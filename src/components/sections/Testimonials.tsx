import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const testimonials = [
  {
    name: "Carlos Mendoza",
    company: "Director Clínica GoKids",
    text: "El equipo de VVWEB transformó por completo nuestra gestión de pacientes. La plataforma es intuitiva, rápida y nos ha ahorrado cientos de horas administrativas.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Ana Silva",
    company: "CEO Afrivet",
    text: "Buscábamos una agencia que entendiera nuestras necesidades, pero VVWEB superó todas las expectativas. El diseño es premium y el rendimiento impecable.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Roberto Contreras",
    company: "Fundador Chocados Contreras",
    text: "Nuestras ventas online aumentaron un 150% después del rediseño del catálogo. La experiencia de usuario es exactamente lo que queríamos.",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    name: "María Paz",
    company: "Baby Hydro Spa",
    text: "Profesionalismo puro. Desde la primera reunión hasta el lanzamiento, nos guiaron en cada paso. Nuestra web ahora refleja la calidad de nuestro servicio.",
    avatar: "https://i.pravatar.cc/150?u=4"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative bg-[#0a0a0c] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen <span className="text-gradient">nuestros clientes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full sm:w-[400px] md:w-[500px] pb-16"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card p-10 rounded-3xl h-full flex flex-col relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
                  
                  <p className="text-lg text-gray-300 mb-8 flex-grow leading-relaxed">
                    "{testi.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testi.avatar} 
                      alt={testi.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
                    />
                    <div>
                      <h4 className="text-white font-bold">{testi.name}</h4>
                      <p className="text-primary text-sm">{testi.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
