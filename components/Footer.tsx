import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Servicios', href: '#servicios' },
        { name: 'Productos', href: '#productos' },
        { name: 'Testimonios', href: '#testimonios' },
        { name: 'Contacto', href: '#contacto' },
    ];

    // NOTE: In a real project deployed with Vite/Next.js, use an environment variable.
    // Example: const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const whatsappLink = `https://wa.me/51987654321`;

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-azulOscuro text-white pt-16 pb-8">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Columna 1: Logo e Info */}
                    <div className="space-y-4">
                        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3">
                            <img src="https://i.imgur.com/qRZkmfX.png" alt="Pixlate Logo" className="h-12 w-auto" />
                            <div>
                                <span className="text-white font-poppins font-bold text-lg">Pixlate</span>
                                <p className="text-xs text-white/70 -mt-1">Multiservicios</p>
                            </div>
                        </a>
                        <p className="text-sm text-gray-400">
                            Soluciones de impresión, diseño y uniformes para la comunidad universitaria de Lima.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div>
                        <h5 className="font-bold font-poppins text-lg mb-4">Enlaces Rápidos</h5>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-400 hover:text-naranjaPrimario transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h5 className="font-bold font-poppins text-lg mb-4">Contacto</h5>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-naranjaPrimario flex-shrink-0 mt-1" />
                                <span className="text-gray-400">Av. Universitaria 1234, San Miguel, Lima</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-naranjaPrimario flex-shrink-0" />
                                <a href={whatsappLink} className="text-gray-400 hover:text-naranjaPrimario transition-colors">+51 987 654 321</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-naranjaPrimario flex-shrink-0" />
                                <a href="mailto:contacto@pixlate.pe" className="text-gray-400 hover:text-naranjaPrimario transition-colors">contacto@pixlate.pe</a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes Sociales */}
                    <div>
                        <h5 className="font-bold font-poppins text-lg mb-4">Síguenos</h5>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-naranjaPrimario transition-colors"><Facebook size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-naranjaPrimario transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-naranjaPrimario transition-colors"><Linkedin size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-6 mt-8 flex justify-center text-center">
                    <p className="text-sm text-gray-400">&copy; 2025 Pixlate. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;