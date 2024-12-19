import React from "react";
import { useParams } from "react-router-dom";  // Importa useParams para obtener parámetros de la URL
import MapaRuta from "../components/MapaRuta";

const DetalleRestaurante = () => {
  const { nombre } = useParams();  // Obtén el nombre desde la URL

  return (
    <div className="bg-primary mt-16 p-5">
      <h1 className="text-2xl font-bold">{nombre}</h1> {/* Muestra el nombre como título */}
      <MapaRuta />
    </div>
  );
};

export default DetalleRestaurante;
