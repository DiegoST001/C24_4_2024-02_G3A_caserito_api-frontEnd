import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('jwt'); // Verificar el JWT en localStorage
  const roles = JSON.parse(localStorage.getItem('roles')); // Recuperar los roles desde localStorage

  if (!token || !roles) {
    return <Navigate to="/" />; // Redirigir a login si no está autenticado
  }

  const hasAccess = roles.some((role) => allowedRoles.includes(role)); // Verificar si el rol está permitido

  return hasAccess ? children : <Navigate to="/" />; // Si tiene acceso, mostrar el componente, si no, redirigir
};

export default ProtectedRoute;
