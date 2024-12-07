// src/components/Footer.js
import Logo from '../../assets/icons/logo.svg';
import React from 'react';
import FacebookIcon from '../../assets/icons/Facebook.svg';
import InstagramIcon from '../../assets/icons/Instragram.svg';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src={Logo} className="h-8 mr-3" alt="FlowBite Logo" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black uppercase">¿Quiénes somos?</h2>
                            <ul className="text-black font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">Información de contacto</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">¿Tienes restaurante?</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Preguntas frecuentes</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Trabaja con nosotros</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black uppercase">Legal</h2>
                            <ul className="text-black font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Términos y Condiciones (Usuario)</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Términos y Condiciones (Negocios)</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Política de privacidad</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="mb-6 text-sm font-semibold text-black uppercase">Síguenos</h2>
                            <div className="flex space-x-5">
                                <a href="#" className="text-black hover:text-gray-900">
                                    <img src={FacebookIcon} alt="Facebook" />
                                </a>
                                <a href="#" className="text-black hover:text-gray-900">
                                    <img src={InstagramIcon} alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black sm:text-center">
                        © 2024 <a href="#" className="hover:underline">Caserito</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-black hover:text-gray-900 ml-5">
                            {/* Facebook icon */}
                        </a>
                        <a href="#" className="text-black hover:text-gray-900 ml-5">
                            {/* Twitter icon */}
                        </a>
                        <a href="#" className="text-black hover:text-gray-900 ml-5">
                            {/* GitHub icon */}
                        </a>
                        <a href="#" className="text-black hover:text-gray-900 ml-5">
                            {/* Dribbble icon */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;