import React from 'react';
import { Tag } from 'lucide-react';

const Cta: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-20 overflow-hidden bg-cover bg-center" 
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(255, 77, 0, 0.9) 0%, rgba(255, 107, 53, 0.85) 100%), url('https://i.imgur.com/ZWSmu5r.png')` 
      }}
    >
      <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold font-poppins text-white">Precios Especiales para Estudiantes</h2>
        <p className="text-lg text-white/95 leading-relaxed mt-4">
          Descuentos exclusivos en paquetes de servicios para estudiantes universitarios. Agenda 2025 + Fotocheck + Separatas desde solo S/ 45. Aprovecha nuestras promociones y ahorra en todos tus proyectos académicos.
        </p>
        <div className="mt-8">
          <a href="#productos" onClick={(e) => handleNavClick(e, '#productos')} className="inline-flex items-center gap-3 bg-white text-naranjaPrimario px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 hover:bg-azulOscuro hover:text-white shadow-lg">
            <Tag size={22} />
            Ver Promociones
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;