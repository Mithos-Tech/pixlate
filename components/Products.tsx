import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, Stamp, Package, Printer, BookOpen, Shirt, Palette, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const productsData = [
    { 
        name: "Agenda 2025", 
        description: "Agenda académica con calendario universitario completo.", 
        features: ["Calendario académico 2025 completo", "Secciones para horarios y notas", "Portada personalizable"],
        color: "#FF4D00", 
        icon: <Calendar size={40} />,
        imageUrl: "https://i.imgur.com/Ac3P08b.jpeg"
    },
    { 
        name: "Ploteo de Planos", 
        description: "Impresión profesional de planos arquitectónicos y técnicos.", 
        features: ["Formatos A0, A1, A2, A3", "Alta precisión en líneas", "Entrega en menos de 2 horas"],
        color: "#FF6B35", 
        icon: <Package size={40} />,
        imageUrl: "https://i.imgur.com/BOnOXhA.jpeg"
    },
    { 
        name: "Impresiones Láser", 
        description: "Impresiones de alta calidad en papel premium.",
        features: ["Papel bond 75g o couché 150g", "Resolución 1200 DPI", "Colores vibrantes y duraderos"],
        color: "#4A90E2", 
        icon: <Printer size={40} />,
        imageUrl: "https://i.imgur.com/yy6vUwg.jpeg"
    },
    { 
        name: "Gigantografías", 
        description: "Banners, roll-ups y material publicitario de gran formato.",
        features: ["Lonas hasta 3x6 metros", "Impresión UV resistente", "Instalación incluida opcional"],
        color: "#FF4D00", 
        icon: <Palette size={40} />,
        imageUrl: "https://i.imgur.com/vZlFiBM.jpeg"
    },
    { 
        name: "Sellos Profesionales", 
        description: "Sellos automáticos y tradicionales para uso profesional.",
        features: ["Modelos 4911, 3911, 4912", "Recarga de tinta incluida", "Garantía de 6 meses"],
        color: "#1B2951", 
        icon: <Stamp size={40} />,
        imageUrl: "https://i.imgur.com/7DDMojl.jpeg"
    },
    { 
        name: "Uniformes Médicos", 
        description: "Uniformes de alta calidad para profesionales de la salud.",
        features: ["Tela 100% algodón premium", "Bordado personalizado incluido", "Todas las tallas disponibles"],
        color: "#4A90E2", 
        icon: <Shirt size={40} />,
        imageUrl: "https://i.imgur.com/aIM2sKH.jpeg"
    },
    { 
        name: "Empastado Premium", 
        description: "Encuadernación profesional para tesis y documentos importantes.",
        features: ["Tapa dura con letras doradas", "Listo en 24-48 horas", "Incluye 1 copia anillada gratis"],
        color: "#1B2951", 
        icon: <BookOpen size={40} />,
        imageUrl: "https://i.imgur.com/G7scX3o.jpeg"
    }
];

const Products: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const updateItemsToShow = useCallback(() => {
        if (window.innerWidth < 768) {
            setItemsToShow(1);
        } else if (window.innerWidth < 1024) {
            setItemsToShow(2);
        } else {
            setItemsToShow(3);
        }
    }, []);
    
    useEffect(() => {
        window.addEventListener('resize', updateItemsToShow);
        updateItemsToShow();
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, [updateItemsToShow]);

    const totalSlides = productsData.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev >= totalSlides - itemsToShow ? 0 : prev + 1));
    }, [totalSlides, itemsToShow]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - itemsToShow : prev - 1));
    };
    
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="productos" className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <span className="inline-block bg-naranjaPrimario/10 text-naranjaPrimario text-sm font-semibold rounded-full px-4 py-1 mb-4">
                        Productos
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-poppins text-azulOscuro">Nuestros Especiales</h2>
                    <p className="text-lg text-grisTexto mt-2">Los más solicitados por nuestros clientes universitarios</p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden py-4">
                         <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${100 / itemsToShow * currentSlide}%)` }}>
                            {productsData.map((product, index) => (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                                    <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div style={{ color: product.color }} className="mb-2">{React.cloneElement(product.icon, { style: { color: product.color } })}</div>
                                            <h4 className="text-xl font-semibold font-poppins text-azulOscuro mb-2">{product.name}</h4>
                                            <p className="text-sm text-grisTexto mb-4">{product.description}</p>
                                            <ul className="space-y-2 mb-6 text-sm text-grisTexto">
                                                {product.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2">
                                                        <Check size={16} className="text-naranjaPrimario flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <a 
                                                href="#contacto"
                                                onClick={(e) => handleNavClick(e, '#contacto')}
                                                className="w-full mt-auto py-3 px-4 text-center rounded-full border-2 font-bold transition-colors duration-300"
                                                style={{ borderColor: product.color, color: product.color }} 
                                                onMouseOver={e => {e.currentTarget.style.backgroundColor = product.color; e.currentTarget.style.color = 'white'}} 
                                                onMouseOut={e => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = product.color}}
                                            >
                                                Cotizar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white z-10 hidden md:block">
                        <ChevronLeft className="text-azulOscuro" />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white z-10 hidden md:block">
                        <ChevronRight className="text-azulOscuro" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;