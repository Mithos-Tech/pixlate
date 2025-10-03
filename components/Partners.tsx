import React from 'react';

const partners = [
    { name: "UTP", logoUrl: "https://i.imgur.com/czThOwH.png" },
    { name: "UPN", logoUrl: "https://i.imgur.com/lQnbX4J.png" },
    { name: "UCH", logoUrl: "https://i.imgur.com/lEccJFE.png" },
    { name: "UCV", logoUrl: "https://i.imgur.com/FYxuqiL.png" },
    { name: "USIL", logoUrl: "https://i.imgur.com/30Sh0gS.png" },
];

const Partners: React.FC = () => {
    return (
        <section 
            className="py-16"
            style={{ background: 'linear-gradient(135deg, #FF4D00 0%, #FF6B35 100%)' }}
        >
            <div className="container mx-auto max-w-7xl px-4">
                 <h3 className="text-center text-xl font-semibold text-white mb-8">
                    Universidades que Confían en Nosotros
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {partners.map((partner) => (
                        <img 
                            key={partner.name}
                            src={partner.logoUrl}
                            alt={partner.name}
                            className="h-16 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        />
                    ))}
                </div>
                <p className="text-center text-sm text-white/80 mt-8">Más de 2,000 estudiantes nos prefieren cada año</p>
            </div>
        </section>
    );
};

export default Partners;