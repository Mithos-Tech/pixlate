import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
    { name: "María González Pérez", university: "UTP", career: "Estudiante de Psicología", rating: 5, comment: "Siempre encuentro todo lo que necesito para mis trabajos académicos. Los empastados quedan perfectos y el servicio es súper rápido. El personal es muy amable y me orientan en todo.", avatarUrl: "https://i.imgur.com/ogtpePA.png" },
    { name: "Carlos Mendoza Silva", university: "UCV", career: "Estudiante de Ingeniería Civil", rating: 5, comment: "Los ploteos de mis planos son de excelente calidad y precisión. Recomiendo 100% para estudiantes de ingeniería y arquitectura. Precios muy accesibles comparado con otros lugares.", avatarUrl: "https://i.imgur.com/QP1NJyQ.png" },
    { name: "Ana Torres Vega", university: "UCH", career: "Estudiante de Administración", rating: 5, comment: "El alquiler de uniformes me salvó en mis prácticas profesionales. Los uniformes están siempre impecables y tienen todas las tallas. Excelente atención al cliente.", avatarUrl: "https://i.imgur.com/x9yfz81.png" },
    { name: "Diego Ramírez Castro", university: "UPN", career: "Estudiante de Diseño Gráfico", rating: 5, comment: "Para mis proyectos de diseño necesito impresiones de alta calidad y aquí siempre cumplen. Los colores salen exactos y el papel couché es excelente para presentaciones.", avatarUrl: "https://i.imgur.com/os3LolP.png" }
];

const Testimonials: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(current => (current === 0 ? testimonialsData.length - 1 : current - 1));
    };

    const nextSlide = () => {
        setCurrentSlide(current => (current === testimonialsData.length - 1 ? 0 : current + 1));
    };

    return (
        <section id="testimonios" className="bg-grisUltraClaro py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <span className="inline-block bg-naranjaPrimario/10 text-naranjaPrimario text-sm font-semibold rounded-full px-4 py-1 mb-4">
                        Testimonios
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-poppins text-azulOscuro">Lo que Dicen Nuestros Clientes</h2>
                    <p className="text-lg text-grisTexto mt-2">La confianza de estudiantes y profesionales nos respalda</p>
                </div>

                <div className="relative overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                                <div className="bg-white rounded-tl-3xl rounded-br-3xl p-6 shadow-md relative mt-8 mx-auto max-w-2xl">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                        <img 
                                            src={testimonial.avatarUrl}
                                            alt={testimonial.name}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                    </div>
                                    <div className="pt-10">
                                        <div className="flex justify-center mb-3">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star key={i} size={20} className="text-naranjaPrimario fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-grisTexto italic mb-4 text-center">"{testimonial.comment}"</p>
                                        <div className="text-center border-t border-grisMedio pt-4">
                                            <h5 className="font-bold font-poppins text-azulOscuro">{testimonial.name}</h5>
                                            <p className="text-sm text-grisTexto">{testimonial.career}</p>
                                            <span className="mt-2 inline-block bg-naranjaPrimario/10 text-naranjaPrimario rounded-full px-3 py-1 text-xs font-medium">{testimonial.university}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="flex justify-center gap-4 mt-8">
                    <button onClick={prevSlide} className="p-3 rounded-full border-2 border-naranjaPrimario text-naranjaPrimario hover:bg-naranjaPrimario hover:text-white transition-colors duration-300">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-3 rounded-full bg-naranjaPrimario text-white hover:bg-naranjaHover transition-colors duration-300">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;