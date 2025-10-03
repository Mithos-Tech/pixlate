import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Mail } from 'lucide-react';

const serviceCategories = [
    "Servicios Académicos",
    "Diseño e Impresión Publicitaria",
    "Uniformes y Accesorios",
    "Servicios Técnicos",
    "Consulta General"
];

const Contact: React.FC = () => {
    // NOTE: In a real project, use environment variables for sensitive data.
    // Example: const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const formspreeEndpoint = `https://formspree.io/f/YOUR_FORM_ID_HERE`;

    // Example: const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const whatsappLink = `https://wa.me/51987654321?text=¡Hola!%20Me%20interesa%20cotizar%20un%20servicio`;

    return (
        <section id="contacto" className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #1B2951 0%, #2A3B6B 100%)' }}>
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <span className="inline-block bg-naranjaPrimario/10 text-naranjaPrimario text-sm font-semibold rounded-full px-4 py-1 mb-4">
                           Contacto
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-8">Visítanos o Escríbenos</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-naranjaPrimario flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold">Nuestra Ubicación</h5>
                                    <p className="text-white/80">Av. Universitaria 1234, San Miguel - A 2 cuadras de UTP y UCH</p>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <Clock className="text-naranjaPrimario flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold">Horario de Atención</h5>
                                    <p className="text-white/80">Lunes a Sábado: 8:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-naranjaPrimario flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold">Teléfono / WhatsApp</h5>
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-naranjaClaro transition-colors">+51 987 654 321</a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="text-naranjaPrimario flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold">Email</h5>
                                    <a href="mailto:contacto@pixlate.pe" className="text-white/80 hover:text-naranjaClaro transition-colors">contacto@pixlate.pe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form action={formspreeEndpoint} method="POST" className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                                    <input type="text" id="name" name="name" required className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none placeholder-white/50" placeholder="Tu nombre completo" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" id="email" name="email" required className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none placeholder-white/50" placeholder="tu.correo@ejemplo.com" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Asunto</label>
                                    <select id="subject" name="subject" required className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none appearance-none" style={{ color: 'white' }}>
                                        <option value="" disabled selected style={{ backgroundColor: '#2A3B6B' }}>Selecciona un servicio...</option>
                                        {serviceCategories.map(cat => <option key={cat} value={cat} style={{ backgroundColor: '#2A3B6B' }}>{cat}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                                    <textarea id="message" name="message" rows={4} required className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none placeholder-white/50" placeholder="¿En qué podemos ayudarte?"></textarea>
                                </div>
                                <button type="submit" className="w-full px-6 py-3 rounded-full text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" style={{ background: 'linear-gradient(135deg, #FF4D00 0%, #FF6B35 100%)' }}>
                                    Enviar Consulta
                                </button>
                            </div>
                        </form>
                        <p className="text-xs text-white/60 mt-4 text-center">
                            Tus datos se utilizarán únicamente para responder a tu consulta y no se compartirán con terceros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;