import React, { useEffect, useState } from "react";
import { getToken, getUserData } from "../services/authService"; // Importa las funciones necesarias
import PanelUserComponent from "../components/PanelUserComponent";

const PanelEmpresa = () => {
  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

  // Obtener los datos del usuario cuando el componente se monta
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getToken(); // Obtén el token desde el almacenamiento local
        const data = await getUserData(token); // Obtén los datos del usuario
        setUserData(data); // Establece los datos en el estado
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData(); // Llama a la función para obtener los datos del usuario
  }, []); // Solo se ejecuta una vez al montar el componente

  // Si los datos del usuario no están disponibles, muestra un cargando o mensaje de error
  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="mt-[4.5rem] flex justify-center items-center flex-col pb-4">
      <PanelUserComponent tipo={"Username:"} dato={userData.usuario} />
      <PanelUserComponent tipo={"Email:"} dato={userData.email} />
      <PanelUserComponent tipo={"Dirección:"} dato={userData.direccion} />
      <PanelUserComponent tipo={"Telefono:"} dato={userData.telefono} />
      <PanelUserComponent tipo={"Avatar:"} dato={<img src={userData.avatar} alt="Avatar" className="w-12 h-12 rounded-full" />} />
    </div>
  );
};

export default PanelEmpresa;
