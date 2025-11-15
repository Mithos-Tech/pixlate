import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';

const serviceCategories = [
    "Servicios Académicos",
    "Diseño e Impresión Publicitaria",
    "Uniformes y Accesorios",
    "Servicios Técnicos",
    "Consulta General"
];

const Contact: React.FC = () => {
    // 🔒 VARIABLES DE ENTORNO - Seguras y centralizadas
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT 
        ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ENDPOINT}`
        : `https://formspree.io/f/YOUR_FORM_ID_HERE`;
    
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '51987654321';
    const businessEmail = import.meta.env.VITE_BUSINESS_EMAIL || 'contacto@pixlate.pe';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=¡Hola!%20Me%20interesa%20cotizar%20un%20servicio`;

    // 🎯 Estados para el formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // 📝 Manejar cambios en inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // 📤 Manejar envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Resetear mensaje después de 5 segundos
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    return (
        <section id="contacto" className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #1B2951 0%, #2A3B6B 100%)' }}>
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* 📍 Información de contacto */}
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
                                    <a 
                                        href={whatsappLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-white/80 hover:text-naranjaClaro transition-colors inline-flex items-center gap-2"
                                    >
                                        +{whatsappNumber}
                                        <MessageCircle size={16} />
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="text-naranjaPrimario flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold">Email</h5>
                                    <a 
                                        href={`mailto:${businessEmail}`} 
                                        className="text-white/80 hover:text-naranjaClaro transition-colors"
                                    >
                                        {businessEmail}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 📝 Formulario de contacto */}
                    <div>
                        {/* Mensajes de estado */}
                        {submitStatus === 'success' && (
                            <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl backdrop-blur-sm flex items-center gap-3 animate-fade-in">
                                <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                                <div>
                                    <p className="font-semibold">¡Mensaje enviado exitosamente!</p>
                                    <p className="text-sm text-white/80">Te contactaremos pronto.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl backdrop-blur-sm flex items-center gap-3 animate-fade-in">
                                <XCircle className="text-red-400 flex-shrink-0" size={24} />
                                <div>
                                    <p className="font-semibold">Error al enviar el mensaje</p>
                                    <p className="text-sm text-white/80">Por favor, intenta de nuevo o contáctanos por WhatsApp.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                                        Nombre <span className="text-naranjaPrimario">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        disabled={isSubmitting}
                                        className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none placeholder-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all" 
                                        placeholder="Tu nombre completo" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email <span className="text-naranjaPrimario">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                        disabled={isSubmitting}
                                        className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none placeholder-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all" 
                                        placeholder="tu.correo@ejemplo.com" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                        Asunto <span className="text-naranjaPrimario">*</span>
                                    </label>
                                    <select 
                                        id="subject" 
                                        name="subject" 
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required 
                                        disabled={isSubmitting}
                                        className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none appearance-none disabled:opacity-50 disabled:cursor-not-allowed transition-all" 
                                        style={{ color: 'white' }}
                                    >
                                        <option value="" disabled style={{ backgroundColor: '#2A3B6B' }}>
                                            Selecciona un servicio...
                                        </option>
                                        {serviceCategories.map(cat => (
                                            <option key={cat} value={cat} style={{ backgroundColor: '#2A3B6B' }}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                                        Mensaje <span className="text-naranjaPrimario">*</span>
                                    </label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows={4} 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required 
                                        disabled={isSubmitting}
                                        className="w-full bg-white/20 border border-white/30 rounded-md p-3 focus:ring-2 focus:ring-naranjaPrimario focus:outline-none placeholder-white/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all" 
                                        placeholder="¿En qué podemos ayudarte?"
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 rounded-full text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2" 
                                    style={{ background: 'linear-gradient(135deg, #FF4D00 0%, #FF6B35 100%)' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Enviando...
                                        </>
                                    ) : (
                                        'Enviar Consulta'
                                    )}
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