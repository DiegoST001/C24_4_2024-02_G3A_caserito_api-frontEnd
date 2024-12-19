import React from 'react';

const CardRestaurantB = ({ restaurant }) => {
  return (
    <div className="border rounded-lg mb-4 shadow-lg hover:shadow-xl duration-500 cursor-pointer flex flex-col" onClick={() => {}}>
      <img className="w-full h-48 object-cover rounded-t-lg" src={restaurant.img} alt={restaurant.nombre} />
      <div className="p-4 flex flex-col space-y-3">
        <h3 className="font-semibold text-xl truncate">{restaurant.nombre}</h3>
        <p className="text-sm text-gray-600">{restaurant.tipo}</p>
        <p className="text-sm text-gray-600">{restaurant.ubicacion}</p>
        <p className="text-sm text-gray-600">Horario: {restaurant.horaApertura} - {restaurant.horaCierre}</p>
        <p className="text-sm text-gray-600">Distancia: {restaurant.distancia}</p>
        <p className="text-sm text-gray-600">Tiempo estimado: {restaurant.tiempo}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{restaurant.calificacion}</span>
          <span className="ml-2 text-gray-500">/ 5.0</span>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurantB;
