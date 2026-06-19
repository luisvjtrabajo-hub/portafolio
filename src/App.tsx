import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Problems from './components/sections/Problems';
import Stats from './components/sections/Stats';
import Portfolio from './components/sections/Portfolio';
import Process from './components/sections/Process';
import TechStack from './components/sections/TechStack';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as any);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Problems />
        <Stats />
        <Portfolio />
        <Process />
        <TechStack />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
