import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Productos', href: '#productos' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const desktopNavLinks = navLinks.filter(link => link.name !== 'Inicio'); // Hide 'Inicio' on desktop as logo serves this purpose

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-azulOscuro shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3">
              <img src="https://i.imgur.com/qRZkmfX.png" alt="Pixlate Logo" className="h-14 w-auto" />
              <div>
                <span className="text-white font-poppins font-bold text-xl">Pixlate</span>
                <p className="text-xs text-white/80 -mt-1">Multiservicios</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {desktopNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-medium transition-colors text-white hover:text-naranjaClaro"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="px-6 py-3 rounded-full text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" style={{ background: 'linear-gradient(135deg, #FF4D00 0%, #FF6B35 100%)' }}>
                Cotizar Ahora
              </a>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-colors text-white"
                aria-label="Abrir menú"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-azulOscuro/90 backdrop-blur-xl transition-opacity duration-300 flex justify-center items-center p-4 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      >
        <div 
          className="bg-white/5 border border-white/20 rounded-3xl p-8 w-full max-w-xs sm:max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { handleNavClick(e, link.href); closeMenu(); }}
                className="text-white text-2xl font-poppins font-medium hover:text-naranjaClaro transition-all duration-300 transform hover:scale-110"
              >
                {link.name}
              </a>
            ))}
            <div className="w-1/2 h-px bg-white/20 my-2"></div>
            <a
              href="#contacto"
              onClick={(e) => { handleNavClick(e, '#contacto'); closeMenu(); }}
              className="px-8 py-4 rounded-full text-white font-bold text-lg flex items-center gap-3 transition-transform duration-300 transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF4D00 0%, #FF6B35 100%)' }}
            >
              <Phone size={20} />
              Cotizar Ahora
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;