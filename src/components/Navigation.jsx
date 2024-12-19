import React, { useState } from 'react';
import logo from '../assets/logo.svg'; // Asegúrate de que la ruta sea correcta

const Navigation = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full top-0 shadow-md z-10 h-16">
      <div className="container mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12" />
        </div>

        {/* Navegación para pantallas grandes */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map(({ label, href, onClick }, index) => (
            <a
              key={index}
              href={href}
              onClick={onClick}
              className="text-sm sm:text-base md:text-lg text-black hover:text-gray-700"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Botón del menú móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {links.map(({ label, href, onClick }, index) => (
            <a
              key={index}
              href={href}
              onClick={onClick}
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
