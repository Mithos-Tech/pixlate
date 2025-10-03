import React, { useState, useEffect, useRef } from 'react';
import { FileCheck, Calendar, Grid3x3, Users } from 'lucide-react';

interface CounterProps {
  target: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          if (start === end) return;

          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString('es-PE')}+</span>;
};

const statsData = [
    { target: 5000, label: "Trabajos Realizados con Éxito", icon: <FileCheck size={32} className="text-naranjaPrimario" />, color: "text-naranjaPrimario" },
    { target: 5, label: "Años Sirviendo a Estudiantes", icon: <Calendar size={32} className="text-azulOscuro" />, color: "text-azulOscuro" },
    { target: 50, label: "Servicios Diferentes Disponibles", icon: <Grid3x3 size={32} className="text-azulAcento" />, color: "text-azulAcento" },
    { target: 2000, label: "Estudiantes Satisfechos", icon: <Users size={32} className="text-naranjaClaro" />, color: "text-naranjaClaro" },
];

const Trajectory: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative flex justify-center items-end min-h-[400px]">
                        <img 
                            src="https://i.imgur.com/nwdTtcS.png" 
                            alt="Miembro del equipo de Pixlate sonriendo" 
                            className="max-w-full h-auto object-contain lg:max-w-md"
                        />
                    </div>
                    <div>
                        <span className="inline-block bg-naranjaPrimario/10 text-naranjaPrimario text-sm font-semibold rounded-full px-4 py-1 mb-4">
                            Trayectoria
                        </span>
                        <h2 className="text-4xl font-bold font-poppins text-azulOscuro mt-2 mb-6">Más de 5 Años de Experiencia</h2>
                        <p className="text-grisTexto leading-relaxed mb-8">
                            Pixlate es el centro de impresión y servicios universitarios que transforma tus ideas en realidad. Desde copias hasta empastados profesionales, ofrecemos soluciones completas para estudiantes y profesionales, garantizando calidad y rapidez en cada proyecto.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {statsData.map((stat, index) => (
                                <div key={index} className="bg-grisClaro rounded-xl p-6">
                                    <div className="flex items-center gap-4 mb-2">
                                        {stat.icon}
                                        <p className={`text-4xl font-bold font-poppins ${stat.color}`}>
                                            <Counter target={stat.target} />
                                        </p>
                                    </div>
                                    <p className="text-sm text-grisTexto">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trajectory;