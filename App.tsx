
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Cta from './components/Cta';
import Products from './components/Products';
import Trajectory from './components/Trajectory';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-blanco text-grisTexto font-inter">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Cta />
        <Products />
        <Trajectory />
        <Testimonials />
        <Faq />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
