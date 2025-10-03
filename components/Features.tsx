import React from 'react';
import { Award, Zap, MapPin } from 'lucide-react';

const featuresData = [
    {
        icon: <Award size={48} className="text-naranjaPrimario" />,
        title: "Calidad Garantizada",
        description: "Equipos de última generación y materiales premium para resultados profesionales en cada trabajo."
    },
    {
        icon: <Zap size={48} className="text-naranjaPrimario" />,
        title: "Entrega Express",
        description: "La mayoría de nuestros servicios listos el mismo día. Tu tiempo es valioso y lo respetamos."
    },
    {
        icon: <MapPin size={48} className="text-naranjaPrimario" />,
        title: "Ubicación Estratégica",
        description: "A solo 2 cuadras de UTP, UCH, UCV y UPN. Fácil acceso para todos los estudiantes."
    }
];

const Features: React.FC = () => {
    return (
        <section id="caracteristicas" className="bg-transparent py-20 relative z-20 -mt-24">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="bg-white rounded-tl-3xl rounded-br-3xl p-8 text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl sm:text-2xl font-semibold font-poppins text-azulOscuro mb-2">{feature.title}</h4>
                            <p className="text-base text-grisTexto">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;