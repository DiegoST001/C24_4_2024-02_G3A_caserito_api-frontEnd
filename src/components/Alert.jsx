import React, { useState, useEffect } from 'react';

const Alert = ({ msg }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Activamos la animación de temblor antes de desaparecer
      setShake(true);

      // Después de 1 segundo (duración de la animación), ocultamos el componente
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Duración de la animación (en milisegundos)
    }, 4000); // Se espera 4 segundos antes de iniciar el temblor

    // Limpiar el timeout si el componente se desmonta antes de que termine
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div
        className={`flex justify-center items-center fixed z-10 bg-greenPasteTwo w-60 h-20 rounded-md top-4 right-4 opacity-60 ${
          shake ? 'animate-shake' : ''
        }`}
      >
        <h1>{msg}</h1>
      </div>
    )
  );
};

export default Alert;
