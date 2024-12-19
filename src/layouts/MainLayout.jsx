// src/layouts/MainLayout.jsx
import { useState, useEffect } from 'react'; // Importa useState y useEffect
import { getRoles, getUsername, getToken, getUserData } from '../services/authService'; // Importa getUserData si no lo tienes
import Navigation from '../components/Navigation';
import Footer from '../components/WELCOME/Footer';

const MainLayout = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [roles, setRoles] = useState([]);
  const [avatar, setAvatar] = useState(null); // Estado para el avatar

  // Llama a las funciones de authService dentro de useEffect
  useEffect(() => {
    const storedUsername = getUsername(); // Obtén el nombre de usuario desde authService
    const storedRoles = getRoles(); // Obtén los roles del usuario desde authService
    setUsername(storedUsername);
    setRoles(storedRoles);

    const fetchUserData = async () => {
      try {
        const token = getToken(); // Obtener el token del localStorage
        const userData = await getUserData(token); // Obtén los datos del usuario, incluyendo el avatar
        setAvatar(userData.avatar); // Establece el avatar desde los datos del usuario
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData(); // Llama a la función para obtener los datos del usuario
  }, []); // Solo se ejecuta una vez al montar el componente

  // Lógica para determinar los enlaces según los roles
  let links = [];

  if (roles.includes('USER')) {
    // Enlaces para usuarios regulares
    links = [
      { label: <i class="bi bi-box-arrow-left"></i>, href: '/logout' },
      { label: <i class="bi bi-house-door-fill"></i>, href: '/home' },
      {
        label: (
          <div className="space-x-2 rounded-full border w-10 h-10 flex justify-center items-center border-oscure hover:bg-textoPincipal">
            {/* Si avatar está disponible, lo muestra; si no, muestra el ícono predeterminado */}
            {avatar ? (
              <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
            ) : (
              <i className="bi bi-person-fill text-xl text-oscure" />  // Ícono predeterminado si no hay avatar
            )}
          </div>
        ),
        href: '/PanelUser'
      },
    ];
  }

  if (roles.includes('EMPRESA')) {
    // Enlaces para empresas
    links = [
      { label: <i class="bi bi-box-arrow-left"></i>, href: '/logout' },
      { label: <i class="bi bi-house-door-fill"></i>, href: '/home' },
      {
        label: (
          <div className="space-x-2 rounded-full border w-10 h-10 flex justify-center items-center border-oscure hover:bg-textoPincipal">
            {/* Si avatar está disponible, lo muestra; si no, muestra el ícono predeterminado */}
            {avatar ? (
              <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
            ) : (
              <i className="bi bi-person-fill text-xl text-gray-500" />  // Ícono predeterminado si no hay avatar
            )}
          </div>
        ),
        href: '/PanelUser'
      },
    ];
  }

  if (!roles.length) {
    // Enlaces para usuarios no autenticados
    links = [
      { label: 'Registrar', href: '/register' },
      { label: 'Iniciar sesión', href: '/login' },
    ];
  }

  return (
    <div>
      <Navigation links={links} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
