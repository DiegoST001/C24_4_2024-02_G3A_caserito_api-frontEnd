import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAuthData } from '../services/authService'; // Importa la función de tu servicio

const Logout = () => {
  const navigate = useNavigate(); // Hook de React Router para redirigir

  const handleLogout = () => {
    // Llama a la función para limpiar datos de autenticación
    clearAuthData();

    // Redirigir al usuario a la página principal ("/")
    navigate('/');
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return null; // No necesitamos mostrar nada, ya que solo estamos redirigiendo
};

export default Logout;
