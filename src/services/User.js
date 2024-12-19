import axios from "axios";
import BASE_URL from "./config";
import { getToken } from "./authService";  // Asegúrate de importar la función getToken

// Función para obtener los datos completos del usuario (incluyendo el avatar)
export const getUserData = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data;  // Devuelve los datos completos del usuario (incluyendo el avatar)
    } catch (error) {
      console.error('Error fetching user data', error);
      throw error;  // Lanza el error para que se maneje en el `handleLogin`
    }
};

// Función para actualizar los datos del usuario
export const updateUserData = async (userData) => {
    try {
      const token = getToken(); // Obtiene el token del almacenamiento local

      // Verifica si el token existe antes de hacer la solicitud
      if (!token) {
        console.error("No token found. Please log in again.");
        throw new Error("Token not found. Please log in.");
      }

      const response = await axios.post(`${BASE_URL}/user/update-user`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Asegura que el contenido sea JSON
        },
      });

      // Si la API devuelve un nuevo token, lo actualizamos en el localStorage
      const newToken = response.data?.token;  // Asegúrate de que la API devuelva un nuevo token
      if (newToken) {
        localStorage.setItem('jwt', newToken);  // Actualiza el token en localStorage
      }

      // Si el nombre de usuario ha cambiado, actualízalo también en localStorage
      const newUsername = response.data?.usuario;  // Asegúrate de que la API devuelva el nombre de usuario actualizado
      if (newUsername) {
        localStorage.setItem('username', newUsername);  // Actualiza el username en localStorage
      }

      return response.data; // Devuelve los datos actualizados del usuario

    } catch (error) {
      console.error("Error updating user data", error);
      throw error; // Lanza el error para manejarlo en el componente
    }
};
