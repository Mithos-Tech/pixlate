import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
    { question: "¿Cuánto tiempo toman los empastados?", answer: "La mayoría de empastados están listos en 24-48 horas. Para tesis con acabados especiales, pueden tomar hasta 3 días laborables." },
    { question: "¿Hacen entregas a domicilio?", answer: "Sí, ofrecemos delivery en Lima Metropolitana. El costo varía según la distancia y el volumen del pedido. Consulta por WhatsApp." },
    { question: "¿Tienen descuentos para estudiantes?", answer: "¡Por supuesto! Contamos con precios especiales para estudiantes universitarios. Además, tenemos paquetes promocionales que te permiten ahorrar hasta 20%." },
    { question: "¿Aceptan pagos con tarjeta?", answer: "Aceptamos efectivo, tarjetas Visa/Mastercard, Yape, Plin y transferencias bancarias. Elige el método que prefieras." },
    { question: "¿Cuál es el horario de atención?", answer: "Atendemos de lunes a sábado de 8:00 AM a 8:00 PM. Los domingos estamos cerrados. Puedes cotizar por WhatsApp 24/7." }
];

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-grisMedio">
            <button
                className="w-full flex justify-between items-center text-left py-4"
                onClick={onClick}
            >
                <h5 className="font-semibold font-poppins text-lg text-azulOscuro">{question}</h5>
                <ChevronDown size={24} className={`text-naranjaPrimario transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-grisTexto leading-relaxed pb-4 pr-6">{answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block bg-naranjaPrimario/10 text-naranjaPrimario text-sm font-semibold rounded-full px-4 py-1 mb-4">
                           Dudas
                        </span>
                        <h2 className="text-4xl font-bold font-poppins text-azulOscuro mt-2 mb-8">Preguntas Frecuentes</h2>
                        <div className="space-y-2">
                            {faqData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={activeIndex === index}
                                    onClick={() => toggleAccordion(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block">
                         <div className="rounded-tl-3xl rounded-br-3xl shadow-xl overflow-hidden">
                            <img 
                                src="https://i.imgur.com/RqhDmbX.png"
                                alt="Estudiantes sonriendo mientras colaboran en un proyecto"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
