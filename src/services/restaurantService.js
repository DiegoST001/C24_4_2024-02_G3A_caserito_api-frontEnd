import axios from "axios";
import BASE_URL from "./config";
import { getToken } from "./authService";  // Asegúrate de importar la función getToken

// Función para agregar un restaurante
export const addRestaurant = async (restaurantData) => {
  try {
    const token = getToken();  // Obtener el JWT del localStorage
    const response = await axios.post(
      `${BASE_URL}/restaurante/create`,
      restaurantData,
      {
        headers: {
          Authorization: `Bearer ${token}`,  // Incluye el token en la cabecera
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding restaurant", error);
    throw error;
  }
};

// Función para obtener todos los restaurantes
export const getAllRestaurants = async () => {
  try {
    const token = getToken();  // Obtener el JWT del localStorage
    const response = await axios.get(`${BASE_URL}/restaurante/all`, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Incluye el token en la cabecera
      }
    });
    return response.data;  // Devuelve la respuesta con los restaurantes
  } catch (error) {
    console.error("Error fetching all restaurants", error);
    throw error;  // Lanza el error para ser manejado por el componente
  }
};

// Función para obtener la lista de restaurantes del usuario autenticado
export const getMyRestaurants = async () => {
  try {
    const token = getToken();  // Obtener el JWT del localStorage
    const response = await axios.get(`${BASE_URL}/restaurante/mis-restaurantes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user's restaurants", error);
    throw error;
  }
};

// Función para editar la información de un restaurante
export const editRestaurant = async (restaurantId, restaurantData) => {
  try {
    const token = getToken();  // Obtener el JWT del localStorage
    const response = await axios.put(
      `${BASE_URL}/restaurante/update/${restaurantId}`,
      restaurantData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error editing restaurant", error);
    throw error;
  }
};

// Función para eliminar un restaurante
export const deleteRestaurant = async (restaurantId) => {
  try {
    const token = getToken();  // Obtener el JWT del localStorage
    const response = await axios.delete(
      `${BASE_URL}/restaurante/delete/${restaurantId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting restaurant", error);
    throw error;
  }
};
