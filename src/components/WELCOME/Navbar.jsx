// src/components/Navbar.js
import React, { useState } from 'react';
import logo from '../../assets/icons/logo.svg'; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full top-0 shadow-md z-10 h-16">
      <div className="container mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12" />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/register" className="text-sm sm:text-base md:text-lg text-black hover:text-gray-700">Registrar</a>
          <a href="/login">
            <button className="bg-green-200 rounded-lg px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base hover:bg-green-300">
              Iniciar sesión
            </button>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="/contact" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Registrar mi restaurante</a>
          <button className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">Iniciar sesión</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;