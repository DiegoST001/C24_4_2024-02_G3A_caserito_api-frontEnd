import React, { useEffect } from 'react';

const MapaRuta = () => {
  useEffect(() => {
    let map, directionsService, directionsRenderer;

    // Coordenadas de origen y destino
    const origin = { lat: -12.0653052, lng: -77.0593631 }; // Origen
    const destination = { lat: -12.0511717, lng: -77.1256883 }; // Destino

    // Función para inicializar el mapa
    function initMap() {
      // Configuración del mapa
      map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: origin, // El mapa está centrado en el origen
      });

      // Crear el servicio de direcciones y el renderizador de direcciones
      directionsService = new window.google.maps.DirectionsService();
      directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      // Configurar la solicitud de ruta entre el origen y el destino
      const request = {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING, // Tipo de transporte: conduciendo
      };

      // Ejecutar la solicitud de ruta
      directionsService.route(request, function(result, status) {
        if (status === window.google.maps.DirectionsStatus.OK) {
          // Si la ruta es válida, renderiza la dirección en el mapa
          directionsRenderer.setDirections(result);
        } else {
          // Si ocurre un error, muestra un mensaje
          alert("No se pudo calcular la ruta: " + status);
        }
      });
    }

    // Asegúrate de que la API de Google Maps se haya cargado antes de inicializar el mapa
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Si la API de Google Maps no está cargada, carga el script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAKF0oCPCnn45d3tXsxUaYoJCB9rQZMl5s&callback=initMap&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = initMap;
    }
  }, []);

  return (
    <div>
      <h1>Ruta al Restaurante</h1>

      {/* Mapa */}
      <div id="map" style={{ height: '500px', width: '100%', borderRadius: '10px' }}></div>
    </div>
  );
};

export default MapaRuta;
