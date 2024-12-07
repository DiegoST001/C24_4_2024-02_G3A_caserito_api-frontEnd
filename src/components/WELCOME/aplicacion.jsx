import React from "react";
import Playstore from "../../assets/icons/google-play-badge-logo-svgrepo-com.svg";

const JoinCaserita = () => {
  return (
    <div className="bg-green-200 p-4 sm:p-6 md:p-8 lg:p-10 text-center rounded-lg max-w-4xl mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">ÚNETE A CASERITA</h2>
      <p className="text-sm sm:text-base md:text-lg mb-6">COME, AHORRA Y DISFRUTA EN LA PLAY STORE</p>
      <div className="flex justify-center">
        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={Playstore} 
            alt="Descargar en Google Play" 
            className="h-40 w-auto py-4" // Mantén la altura fija y el ancho automático
          />
        </a>
      </div>
    </div>
  );
};

export default JoinCaserita;