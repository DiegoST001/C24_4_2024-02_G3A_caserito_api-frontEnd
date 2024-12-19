import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 cursor-pointer">
      <img className="w-full h-56 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SliderWithCards = ({ restaurants }) => {
  const navigate = useNavigate();  // Usamos useNavigate para redirigir

  const handleCardClick = (restaurantName) => {
    navigate(`/detalleRestaurante/${restaurantName}`);  // Navegar a la ruta con el nombre del restaurante
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto my-10 p-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-4 hover:text-gray-700">
        Restaurantes Favoritos
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {restaurants.map((restaurant) => (
          <div key={restaurant.favoriteId} onClick={() => handleCardClick(restaurant.nombre)}> {/* Al hacer clic, navega a la página de detalle */}
            <Card
              title={restaurant.nombre}
              description={restaurant.descripcion}
              image={restaurant.img}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 focus:outline-none"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 focus:outline-none"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default SliderWithCards;
