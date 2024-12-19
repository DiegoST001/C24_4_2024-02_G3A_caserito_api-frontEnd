// src/services/hasRoles.jsx

import { getRoles } from "./authService"; // Importa desde el servicio donde tienes la lógica para obtener roles

/**
 * Verifica si un usuario tiene un rol específico
 * @param {string} role - El rol a verificar (por ejemplo, "ADMIN", "USER").
 * @returns {boolean} - Retorna true si el usuario tiene el rol, de lo contrario false.
 */
const hasRole = (role) => {
  const roles = getRoles(); // Obtiene los roles del almacenamiento local
  return roles.includes(role); // Verifica si el rol está en la lista
};

export default hasRole;
