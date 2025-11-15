import React from 'react';
import { BookOpen, Palette, Shirt, Settings, CheckCircle } from 'lucide-react';

const servicesData = [
    {
        category: "Servicios Académicos",
        icon: <BookOpen size={48} className="text-naranjaPrimario" />,
        imageUrl: "https://i.imgur.com/gs8x8qq.png",
        items: [
            "Copias en B/N y Color", "Impresiones Láser A3-A4", "Separatas y Manuales", 
            "Empastados y Anillados", "Espiralados", "Compendios Escolares"
        ]
    },
    {
        category: "Diseño e Impresión Publicitaria",
        icon: <Palette size={48} className="text-naranjaPrimario" />,
        imageUrl: "https://i.imgur.com/4NBCS1D.png",
        items: [
            "Gigantografías", "Volantes y Afiches", "Tarjetas de Presentación", 
            "Lonas y Vinil", "Trípticos", "Diseño Personalizado"
        ]
    },
    {
        category: "Uniformes y Accesorios",
        icon: <Shirt size={48} className="text-naranjaPrimario" />,
        imageUrl: "https://i.imgur.com/vjVROZa.png",
        items: [
            "Mandiles y Guardapolvos", "Chaquetas Profesionales", "Conjuntos de Psicología", 
            "Fotochecks Personalizados", "Alquiler de Uniformes", "Serigrafía en Prendas"
        ]
    },
    {
        category: "Servicios Técnicos",
        icon: <Settings size={48} className="text-naranjaPrimario" />,
        imageUrl: "https://i.imgur.com/W9dO6Lu.png",
        items: [
            "Ploteo de Planos A0-A1-A2-A3", "Escaneos Profesionales", "Quemado de CD/DVD", 
            "Enmicados", "Sellos Automáticos", "Tipeos y Modificaciones"
        ]
    }
];

const Services: React.FC = () => {
    // NOTE: In a real project deployed with Vite/Next.js, use an environment variable.
    // Example: const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '51987654321';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=¡Hola!%20Me%20interesa%20cotizar%20un%20servicio`;

    return (
        <section id="servicios" className="bg-grisClaro py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <span className="inline-block bg-naranjaPrimario/10 text-naranjaPrimario text-sm font-semibold rounded-full px-4 py-1 mb-4">
                        Servicios
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-poppins text-azulOscuro">Nuestra Oferta Completa</h2>
                    <p className="text-lg text-grisTexto mt-2">Soluciones integrales para tu vida académica y profesional</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="group relative flex flex-col rounded-tl-3xl rounded-br-3xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div 
                                style={{ backgroundImage: `url(${service.imageUrl})` }}
                                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-azulOscuro/95 via-azulOscuro/80 to-transparent"></div>
                            <div className="relative z-10 p-6 flex flex-col h-full text-white">
                                <div>
                                    <div className="mb-4">{service.icon}</div>
                                    <h4 className="text-2xl font-semibold font-poppins mb-4 min-h-[4rem] flex items-center">{service.category}</h4>
                                    <ul className="space-y-2 mb-6">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle size={18} className="text-naranjaClaro flex-shrink-0" />
                                                <span className="text-base text-white/90">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full mt-auto text-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-full transition-colors duration-300">
                                    Whatsapp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;