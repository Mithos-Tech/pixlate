import React, { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
    const fullText = "Tus Trabajos Perfectos y a Tiempo";
    const [typedText, setTypedText] = useState('');
    
    // NOTE: In a real project deployed with Vite/Next.js, use an environment variable.
    // Example: const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const whatsappLink = `https://wa.me/51987654321?text=¡Hola!%20Me%20interesa%20cotizar%20un%20servicio`;

    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeoutId = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [typedText]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pb-24" style={{ background: 'linear-gradient(135deg, #1B2951 0%, #2A3B6B 100%)' }}>
            {/* Clean Background */}
            <div className="absolute inset-0 overflow-hidden z-0"></div>

            <div className="container mx-auto max-w-7xl px-4 relative z-10 pt-32 pb-20">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                            <p className="text-sm font-medium">✨ Servicio rápido y de calidad</p>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight">
                            {typedText}
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">Impresión, empastados, diseño y uniformes cerca de UTP, UCH, UCV y UPN.</p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-md mx-auto lg:mx-0">
                            <div className="bg-white/5 backdrop-blur p-4 rounded-xl flex items-center gap-4">
                                <MapPin className="text-naranjaPrimario" size={24} />
                                <div>
                                    <h3 className="font-bold">Cerca de Ti</h3>
                                    <p className="text-sm text-gray-300">UTP, UCH, UCV, UPN</p>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur p-4 rounded-xl flex items-center gap-4">
                                <Phone className="text-azulAcento" size={24} />
                                <div>
                                    <h3 className="font-bold">Atención Rápida</h3>
                                    <p className="text-sm text-gray-300">Lun - Sáb 8AM-8PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full text-white font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #FF4D00 0%, #FF6B35 100%)' }}>
                                <Phone size={22} /> Cotizar por WhatsApp
                            </a>
                            <a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="px-8 py-4 rounded-full font-bold border-2 border-white text-white hover:bg-white hover:text-azulOscuro transition-colors duration-300 flex items-center justify-center">
                                Ver Servicios
                            </a>
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="flex items-center justify-center order-1 lg:order-2">
                         <img 
                            src="https://i.imgur.com/IIxpsrn.png" 
                            alt="Estudiante universitario con laptop y trabajos de impresión" 
                            className="w-full max-w-sm mx-auto lg:max-w-lg xl:max-w-xl animate-slideInFromRight"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;