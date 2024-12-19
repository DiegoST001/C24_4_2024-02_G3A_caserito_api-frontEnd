// src/pages/Welcome.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout'; // Asegúrate de importar el MainLayout
import Buscar from '../components/WELCOME/buscador';
import Slider from '../components/WELCOME/slider';
import Acerca from '../components/WELCOME/acerca';
import SliderWithCards from '../components/WELCOME/SliderWithCards';
import SliderWithCards2 from '../components/WELCOME/SliderWithCards2';
import Aplicacion from '../components/WELCOME/aplicacion';
import SectionDivider from '../components/WELCOME/SectionDivider';

const Welcome = () => {
  return (
    <MainLayout>
      <div className="bg-primary min-h-screen">
        <div className="container mx-auto px-4 flex flex-col justify-center">
          <div className="">
            <Buscar />
          </div>
          <SectionDivider />

          <div className="">
            <Slider />
          </div>
          <SectionDivider />

          <div className="">
            <SliderWithCards />
          </div>
          <SectionDivider />

          <div className="">
            <SliderWithCards2 />
          </div>
          <SectionDivider />

          <div className="flex flex-col justify-center items-center">
            <Acerca />
          </div>
          <SectionDivider />

          <div className="">
            <Aplicacion />
          </div>
          <SectionDivider />
        </div>
      </div>
    </MainLayout>
  );
};

export default Welcome;
