// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { getUsername, getRoles } from "../services/authService";

// Creamos el contexto de usuario
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Estado para el usuario y roles
  const [username, setUsername] = useState(null);
  const [roles, setRoles] = useState([]);

  // Cargar los datos del usuario desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedUsername = getUsername();
    const storedRoles = getRoles();

    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedRoles.length > 0) {
      setRoles(storedRoles);
    }
  }, []);

  // Proporcionar el contexto a los componentes hijos
  return (
    <UserContext.Provider value={{ username, roles }}>
      {children}
    </UserContext.Provider>
  );
};
