import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate(); // Hook de React Router para redirigir

  const handleLogout = () => {
    // Eliminar todo lo almacenado en localStorage
    localStorage.clear();

    // Redirigir al usuario a la página principal ("/")
    navigate('/');
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return null; // No necesitamos mostrar nada, ya que solo estamos redirigiendo
};

export default Logout;
