import React, { useState } from 'react';

const buscador = ({ onSearch }) => {
  const [nombre, setNombre] = useState('');

  const handleSearch = () => {
    onSearch(nombre); // Llamamos a onSearch para enviar el término de búsqueda a Home
  };

  return (
    <div className="bg-green-200 font-body p-8 sm:p-6 md:p-8 lg:p-10 mt-20 sm:mt-20 md:mt-36 rounded-lg flex flex-col items-center max-w-full md:max-w-[1281px] h-auto md:h-[493px] mx-auto justify-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-center">Descubre el mejor Restaurante de tu zona</h2>
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-[700px] h-auto sm:h-[100px]">
        <input
          type="text"
          placeholder="Escribe tu búsqueda"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}  // Actualizamos el estado del input
          className="px-4 py-2 w-full sm:w-[600px] h-12 sm:h-[60px] border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none"
        />
        <button
          onClick={handleSearch}  // Llamamos a handleSearch al hacer clic
          className="bg-green-300 w-full sm:w-[100px] h-12 sm:h-[60px] px-4 py-2 text-black rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-green-400"
        >
          Búsqueda
        </button>
      </div>
    </div>
  );
};

export default buscador;
