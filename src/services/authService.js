import axios from "axios";
import BASE_URL from "./config";

// Función para registrar un usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/authentication/sign-up`, userData);
    return response.data; // Retorna la respuesta de la API
  } catch (error) {
    console.error("Error registering user", error);
    throw error; // Lanza el error para que sea manejado por el componente
  }
};

// Función para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/authentication/log-in`, credentials);
    saveAuthData(response.data); // Guarda los datos de autenticación en localStorage
    return response.data; // Retorna la respuesta de la API
  } catch (error) {
    console.error("Error logging in", error);
    throw error; // Lanza el error para que sea manejado por el componente
  }
};

// Función para guardar los datos de autenticación en localStorage
export const saveAuthData = ({ jwt, roles, username }) => {
  if (jwt && roles && username) {
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("roles", JSON.stringify(roles));
    localStorage.setItem("username", username);
  } else {
    console.error("Error: Missing authentication data.");
  }
};

// Función para limpiar los datos de autenticación (logout)
export const clearAuthData = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("roles");
  localStorage.removeItem("username");
};

// Función para obtener el token del almacenamiento local
export const getToken = () => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("Error: Token not found.");
    throw new Error("Token no encontrado. Por favor, inicia sesión.");
  }
  return token;
};

// Función para obtener los roles del almacenamiento local
// Función para obtener los roles del almacenamiento local
export const getRoles = () => {
  const roles = localStorage.getItem("roles");
  return roles ? JSON.parse(roles) : []; // Devuelve un arreglo vacío si no existen roles
};


// Función para obtener el nombre de usuario del almacenamiento local
export const getUsername = () => {
  return localStorage.getItem("username");
};

// Función para verificar si el usuario tiene un rol específico
export const hasRole = (role) => {
  const roles = getRoles();
  return roles.includes(role); // Compara directamente con los roles almacenados como cadenas
};


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

