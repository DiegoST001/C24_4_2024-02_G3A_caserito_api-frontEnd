import React, { useEffect, useState } from 'react';
import { obtenerRestaurantesFavoritos, obtenerTodosRestaurantes, buscarRestaurantesPorNombre } from '../services/RestauranteService'; // Importar los servicios
import Buscar from '../components/WELCOME/buscador';
import SliderWithCards from '../components/WELCOME/SliderWithCards';
import SliderWithCards2 from '../components/WELCOME/SliderWithCards2';
import SectionDivider from '../components/WELCOME/SectionDivider';
import CardRestaurant from '../components/CardRestaurant';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]); // Todos los restaurantes
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]); // Restaurantes favoritos
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Restaurantes filtrados por búsqueda
  const [searchQuery, setSearchQuery] = useState(''); // Término de búsqueda

  // Obtener todos los restaurantes
  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const data = await obtenerTodosRestaurantes();
        setRestaurants(data);
        setFilteredRestaurants(data); // Inicialmente mostramos todos los restaurantes
      } catch (error) {
        console.error('Error al obtener todos los restaurantes:', error);
      }
    };

    fetchAllRestaurants();
  }, []);

  // Obtener los restaurantes favoritos
  useEffect(() => {
    const fetchFavoriteRestaurants = async () => {
      try {
        const data = await obtenerRestaurantesFavoritos();
        setFavoriteRestaurants(data); // Guardamos los restaurantes favoritos
      } catch (error) {
        console.error('Error al obtener los restaurantes favoritos:', error);
      }
    };

    fetchFavoriteRestaurants();
  }, []);

  // Función para manejar la búsqueda de restaurantes
  const handleSearch = async (nombre) => {
    setSearchQuery(nombre);  // Actualizamos el estado del término de búsqueda

    if (nombre === '') {
      setFilteredRestaurants(restaurants);  // Si no hay búsqueda, mostramos todos los restaurantes
    } else {
      try {
        const results = await buscarRestaurantesPorNombre(nombre);  // Llamamos al servicio de búsqueda
        setFilteredRestaurants(results);  // Mostramos los resultados filtrados
      } catch (error) {
        console.error('Error al buscar restaurantes:', error);
      }
    }
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="container mx-auto px-4 flex flex-col justify-center">
        {/* Componente de búsqueda, pasamos handleSearch como prop */}
        <div>
          <Buscar onSearch={handleSearch} />
        </div>
        <SectionDivider />

        <div>
          {/* Mostrar los restaurantes favoritos en el slider */}
          <SliderWithCards restaurants={favoriteRestaurants} />
        </div>
        <SectionDivider />
      </div>

      <div className="mb-4 p-5">
        {/* Mostrar los restaurantes filtrados en una cuadrícula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <CardRestaurant key={restaurant.restaurantId} restaurant={restaurant} />
            ))
          ) : (
            <div>No se encontraron resultados para "{searchQuery}".</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
