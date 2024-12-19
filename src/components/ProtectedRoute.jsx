import React from "react";
import { Navigate } from "react-router-dom";
import { getToken, hasRole } from "../services/authService";

const ProtectedRoute = ({ children, allowedRoles }) => {
  // Intentamos obtener el token de autenticación
  const token = getToken();
  // Si no hay token, el usuario no está autenticado
  if (!token) {
    console.error("Usuario no autenticado: token no encontrado");
    return <Navigate to="/login" />;  // Redirigir al login
  }

  try {
    // Verificamos si el usuario tiene al menos uno de los roles permitidos
    const isAuthorized = allowedRoles.some((role) => hasRole(role));

    // Si no tiene un rol autorizado, redirigimos a la página de inicio o login
    if (!isAuthorized) {
      console.error("Usuario no autorizado: rol no permitido");
      console.log(localStorage);

      return <Navigate to="/" />;  // O podrías redirigir a una página de acceso denegado
    }

    // Si está autenticado y tiene el rol adecuado, mostramos el contenido
    return children;
  } catch (error) {
    // En caso de error (por ejemplo, problemas con la verificación de roles)
    console.error("Error al verificar la autorización:", error.message);
    return <Navigate to="/login" />;  // Redirigir a login si ocurre un error
  }
};

export default ProtectedRoute;
