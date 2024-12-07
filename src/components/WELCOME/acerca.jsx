// ./components/acerca.js
import React from 'react';

const Acerca = () => {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-center mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="content">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-4 hover:text-gray-700">
          Acerca de Caserito
        </h2>
        <p className="text pl-1">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      {/* Agrega la sección de "Únete a Caserita" aquí */}
    </div>
  );
};

export default Acerca;