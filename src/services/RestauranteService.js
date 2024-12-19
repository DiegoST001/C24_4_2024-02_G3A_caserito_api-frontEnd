import axios from "axios";
import BASE_URL from "./config";
import { getToken } from "./authService"; // Asegúrate de importar la función getToken

// Función para obtener los datos completos del usuario (incluyendo el avatar)

export const buscarRestaurantesPorNombre = async (nombre) => {
  try {
    const token = getToken();  // Obtener el token desde el localStorage o donde lo almacenes
    console.log("Token en la solicitud:", token);  // Verificar el token en la consola
    
    const response = await axios.get(`${BASE_URL}/caserito_api/restaurante/buscar`, {
      params: {
        nombre: nombre,  // Nombre del restaurante como parámetro
      },
      headers: {
        Authorization: `Bearer ${getToken()}`, // Si es necesario, pasa el token de autenticación
      },
    });
    
    return response.data;  // Devuelve la respuesta con los restaurantes
  } catch (error) {
    console.error("Error buscando restaurantes", error);  // Muestra el error en consola
    throw error;
  }
};



export const obtenerRutaRestaurante = async (id, origin, destination, apiKey) => {
  try {
    // Construir la URL para la solicitud
    const url = `${BASE_URL}/caserito_api/restaurante/${id}/ruta`;

    // Realizar la solicitud GET al endpoint
    const response = await axios.get(url, {
      params: {
        apiKey: apiKey,        // Pasar la API Key
        origin: JSON.stringify(origin),   // Pasar las coordenadas de origen
        destination: JSON.stringify(destination)  // Pasar las coordenadas de destino
      },
      headers: {
        Authorization: `Bearer ${getToken()}`, // Si es necesario, pasa el token de autenticación
      },
    });

    return response.data; // Retorna los datos de la ruta
  } catch (error) {
    console.error("Error obteniendo la ruta del restaurante", error);
    throw error; // Lanza el error para manejarlo en el componente donde se llame
  }
};

export const obtenerMisDatos = async () => {
  try {
    const token = getToken();  // Asegúrate de obtener el token de autenticación
    const response = await axios.get(`${BASE_URL}/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;  // Retorna los datos del usuario
  } catch (error) {
    console.error("Error obteniendo los datos del usuario", error);
    throw error;
  }
};

// Función para agregar un restaurante
export const agregarRestaurante = async (nombre, ubicacion, descripcion, tipo, img, horaApertura, horaCierre) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${BASE_URL}/restaurante/create`,
      {
        nombre,
        ubicacion,
        descripcion,
        tipo,
        img,
        horaApertura,
        horaCierre,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Retorna la respuesta con el restaurante creado
  } catch (error) {
    console.error("Error al agregar el restaurante", error);
    throw error;
  }
};

// Función para ver la lista de restaurantes del usuario
export const obtenerMisRestaurantes = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}/restaurante/mis-restaurantes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;  // Retorna la lista de restaurantes del usuario
  } catch (error) {
    console.error("Error obteniendo la lista de restaurantes", error);
    throw error;
  }
};

// Función para obtener todos los restaurantes
export const obtenerTodosRestaurantes = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}/restaurante/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;  // Retorna la lista completa de restaurantes
  } catch (error) {
    console.error("Error obteniendo todos los restaurantes", error);
    throw error;
  }
};

// Función para editar la información de un restaurante
export const editarRestaurante = async (id, nombre) => {
  try {
    const token = getToken();
    const response = await axios.put(
      `${BASE_URL}/restaurante/update/${id}`,
      { nombre },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;  // Retorna los datos del restaurante actualizado
  } catch (error) {
    console.error("Error editando el restaurante", error);
    throw error;
  }
};

// Función para eliminar un restaurante
export const eliminarRestaurante = async (id) => {
  try {
    const token = getToken();
    const response = await axios.delete(`${BASE_URL}/restaurante/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;  // Retorna la respuesta con la confirmación de eliminación
  } catch (error) {
    console.error("Error eliminando el restaurante", error);
    throw error;
  }
};

// Función para obtener la calificación de un restaurante
export const obtenerCalificacionRestaurante = async (id) => {
  try {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}/calificacion/restaurante/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;  // Retorna las calificaciones del restaurante
  } catch (error) {
    console.error("Error obteniendo la calificación", error);
    throw error;
  }
};

// Función para agregar una calificación a un restaurante
export const agregarCalificacion = async (restauranteId, calificacion) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${BASE_URL}/calificacion/agregar`,
      { restauranteId, calificacion },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Retorna la respuesta con la calificación agregada
  } catch (error) {
    console.error("Error agregando la calificación", error);
    throw error;
  }
};

// Función para agregar un restaurante a favoritos
export const agregarFavorito = async (restauranteId) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${BASE_URL}/favorito/agregar`,
      { restauranteId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Retorna la respuesta con el restaurante agregado a favoritos
  } catch (error) {
    console.error("Error agregando el restaurante a favoritos", error);
    throw error;
  }
};

// Función para obtener los restaurantes favoritos
export const obtenerRestaurantesFavoritos = async () => {
    try {
      const token = getToken();
      const response = await axios.get(`${BASE_URL}/favorito`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;  // Retorna la lista de restaurantes favoritos
    } catch (error) {
      console.error("Error obteniendo los restaurantes favoritos", error);
      throw error;
    }
  };
// Función para eliminar un restaurante de favoritos
export const eliminarFavorito = async (favoritoId) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${BASE_URL}/favorito/eliminar`,
      { favoritoId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Retorna la respuesta con el restaurante eliminado de favoritos
  } catch (error) {
    console.error("Error eliminando el restaurante de favoritos", error);
    throw error;
  }
};
