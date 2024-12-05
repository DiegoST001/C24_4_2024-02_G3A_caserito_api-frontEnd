import axios from "axios";
import BASE_URL from "./config";

// Función para agregar un restaurante
export const addRestaurant = async (restaurantData) => {
  try {
    // Recuperar el token del localStorage
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.log('No token found. Please login.');
      return;
    }

    const response = await axios.post(
      `${BASE_URL}/restaurante/create`,
      restaurantData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding restaurant", error);
    throw error;
  }
};

// Función para obtener la lista de restaurantes
export const getAllRestaurants = async () => {
  try {
    // Recuperar el token del localStorage
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.log('No token found. Please login.');
      return;
    }

    const response = await axios.get(`${BASE_URL}/restaurante/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching all restaurants", error);
    throw error;
  }
};

// Función para obtener la lista de restaurantes del usuario autenticado
export const getMyRestaurants = async () => {
  try {
    // Recuperar el token del localStorage
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.log('No token found. Please login.');
      return;
    }

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
    // Recuperar el token del localStorage
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.log('No token found. Please login.');
      return;
    }

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
    // Recuperar el token del localStorage
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.log('No token found. Please login.');
      return;
    }

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
