// src/services/authService.js
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
  localStorage.setItem("jwt", jwt);
  localStorage.setItem("roles", JSON.stringify(roles));
  localStorage.setItem("username", username);
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
    throw new Error("Token no encontrado. Por favor, inicia sesión.");
  }
  return token;
};

// Función para obtener los roles del almacenamiento local
export const getRoles = () => {
  const roles = localStorage.getItem("roles");
  return roles ? JSON.parse(roles) : [];
};

export const getUsername = () => {
  return localStorage.getItem("username");
};

// Función para verificar si un usuario tiene un rol específico
export const hasRole = (role) => {
  const roles = getRoles();
  return roles.some((r) => r.roleEnum === role);
};
