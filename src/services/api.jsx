import axios from 'axios';

const API_URL = 'http://localhost:8080/caserito_api';

// Configuración del cliente Axios
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicio para registrar usuario
export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/authentication/sign-up", userData);
    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error.response || error);
    throw error.response?.data || "Error desconocido al registrar usuario.";
  }
};

// Servicio para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/authentication/log-in', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error al iniciar sesión';
  }
};

// Utilidades para manejar sesión
export const saveSessionData = (token, roles) => {
  localStorage.setItem('jwtToken', token);
  localStorage.setItem('roles', JSON.stringify(roles));
};

export const getToken = () => localStorage.getItem('jwtToken');
export const getRoles = () => JSON.parse(localStorage.getItem('roles')) || [];
export const clearSession = () => {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('roles');
};
