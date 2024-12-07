import React, { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard'; // Importamos el componente RestaurantCard
import Alert from '../components/Alert'; // Importamos el componente Alert
import { getAllRestaurants } from '../services/restaurantService'; // Servicio para obtener restaurantes

const Home = () => {
  const [restaurants, setRestaurants] = useState([]); // Estado para los restaurantes
  const [error, setError] = useState(null); // Estado para el manejo de errores

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setError(null); // Limpiar errores antes de hacer la solicitud
        const restaurantsData = await getAllRestaurants(); // Usamos el servicio para obtener restaurantes
        setRestaurants(restaurantsData); // Guardamos los restaurantes en el estado
      } catch (err) {
        const errorMessage =
          err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : 'Error al cargar los restaurantes. Inténtalo nuevamente.';
        setError(errorMessage);
        console.error('Error fetching restaurants:', err);
      }
    };

    fetchRestaurants();
  }, []); // Este efecto se ejecuta solo una vez al cargar el componente

  return (
    <main className="p-5 ">
      <h1 className="text-center text-3xl font-bold mb-5">Lista de Restaurantes</h1>

      {error && <Alert msg={error} />} {/* Mostrar error si ocurre */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.restaurantId} // ID único para React
              nombre={restaurant.nombre} // Nombre del restaurante
              descripcion={restaurant.descripcion} // Descripción del restaurante
              ubicacion={restaurant.ubicacion} // Ubicación del restaurante
              tipo={restaurant.tipo} // Tipo de comida o categoría
              img={restaurant.img}
            />
          ))
        ) : (
          !error && <p className="text-center text-gray-500">No hay restaurantes disponibles.</p>
        )}
      </div>
    </main>
  );
};

export default Home;
