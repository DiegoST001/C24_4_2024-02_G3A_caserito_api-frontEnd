import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Iniciar Sesión</Link> | 
      <Link to="/register">Registrarse</Link>
    </nav>
  );
};

export default Navigation;
