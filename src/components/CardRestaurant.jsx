import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate();  // Hook de navegación

  const handleClick = () => {
    // Navegar a la página de detalles con el nombre del restaurante como parámetro
    navigate(`/detalleRestaurante/${restaurant.nombre}`);
  };

  return (
    <div className="border rounded-lg mb-4 shadow-lg hover:shadow-xl duration-500 cursor-pointer flex flex-col" onClick={handleClick}>
      {/* Imagen del restaurante */}
      <img className="w-full h-48 object-cover rounded-t-lg" src={restaurant.img} alt={restaurant.nombre} />
      
      <div className="p-4 flex flex-col space-y-3">
        {/* Nombre del restaurante */}
        <h3 className="font-semibold text-xl truncate">{restaurant.nombre}</h3>
        {/* Tipo de comida */}
        <p className="text-sm text-gray-600">{restaurant.tipo}</p>
        {/* Ubicación */}
        <p className="text-sm text-gray-600">{restaurant.ubicacion}</p>
        {/* Horario */}
        <p className="text-sm text-gray-600">Horario: {restaurant.horaApertura} - {restaurant.horaCierre}</p>
        {/* Distancia */}
        <p className="text-sm text-gray-600">Distancia: {restaurant.distancia}</p>
        {/* Tiempo estimado */}
        <p className="text-sm text-gray-600">Tiempo estimado: {restaurant.tiempo}</p>

        {/* Calificación */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{restaurant.calificacion}</span>
          <span className="ml-2 text-gray-500">/ 5.0</span>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurant;
