import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard'; // Importamos el componente RestaurantCard
import Alert from '../components/Alert'; // Importamos el componente Alert
import { getAllRestaurants } from '../services/restaurantService'; // Servicio para obtener restaurantes

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);  // Estado para los restaurantes
  const [error, setError] = useState(null);  // Estado para el manejo de errores

  // Función para obtener el rol del usuario desde el almacenamiento local
  const getRole = () => {
    const roles = JSON.parse(localStorage.getItem('roles'));
    return roles && roles.length > 0 ? roles[0].roleEnum : null; // Si hay roles, devolvemos el primer rol
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setError(null); // Limpiar errores antes de hacer la solicitud
        const restaurantsData = await getAllRestaurants(); // Usamos el servicio para obtener restaurantes
        setRestaurants(restaurantsData); // Guardamos los restaurantes en el estado
      } catch (err) {
        setError('Error al cargar los restaurantes. Inténtalo nuevamente.');
        console.error('Error fetching restaurants:', err);
      }
    };

    fetchRestaurants();
  }, []); // Este efecto se ejecuta solo una vez al cargar el componente

  const role = getRole();  // Obtenemos el rol del usuario

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl font-bold mb-5">Lista de Restaurantes</h1>
      
      {error && <Alert msg={error} />} {/* Mostrar error si ocurre */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.pk_restaurante} // Usamos pk_restaurante como clave
            name={restaurant.nombre}         // Usamos nombre para el nombre del restaurante
            address={restaurant.ubicacion}   // Usamos ubicacion para la dirección
            rating={restaurant.rating}       // Asegúrate de tener un campo de rating en la respuesta
            contact={restaurant.usuario.telefono}  // Usamos el teléfono de usuario para el contacto
          />
        ))}
      </div>
      
      {role && (
        <p className="mt-5 text-center text-sm text-gray-500">
          Estás viendo esta página como: <strong>{role}</strong>
        </p>
      )}
    </div>
  );
};

export default Home;
