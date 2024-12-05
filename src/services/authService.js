// src/services/authService.js
import axios from "axios";
import BASE_URL from "./config";

// Función para registrar un usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/authentication/sign-up`, userData);
    return response.data;  // Retorna la respuesta de la API
  } catch (error) {
    console.error("Error registering user", error);
    throw error;  // Lanza el error para que sea manejado por el componente
  }
};

// Función para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/authentication/log-in`, credentials);
    return response.data;  // Retorna la respuesta de la API, que incluirá el token y los roles
  } catch (error) {
    console.error("Error logging in", error);
    throw error;  // Lanza el error para que sea manejado por el componente
  }
};

// Función para obtener el token del almacenamiento local
export const getToken = () => {
  return localStorage.getItem('jwt');
};

// Función para obtener los roles del almacenamiento local
export const getRoles = () => {
  const roles = localStorage.getItem('roles');
  return roles ? JSON.parse(roles) : [];
};
