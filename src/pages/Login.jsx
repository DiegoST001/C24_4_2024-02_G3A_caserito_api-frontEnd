import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { loginUser } from '../services/authService';
import logo from '../assets/logo.svg';
import fondo from '../assets/fondoOne.png';
import Alert from '../components/Alert';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    // Limpia el error antes de intentar iniciar sesión
    setError(null);

    try {
      // Realiza el login
      const response = await loginUser({ username, password });

      // Almacena datos en localStorage
      localStorage.setItem('jwt', response.jwt);
      localStorage.setItem('roles', JSON.stringify(response.roles)); // Guarda los roles como string
      localStorage.setItem('username', response.username);

      console.log('Login successful:', response);

      // Redirige a la página Home después del login exitoso
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response && error.response.data) {
        setError(error.response.data.msg);
      } else {
        setError('Error desconocido');
      }
    }
  };

  return (
    <>
      {error && <Alert msg={error} />} {/* Solo muestra el Alert si hay un error */}
      <main className="flex flex-grow h-full">
        <article
          className="w-full h-full bg-cover bg-center bg-fixed max-md:hidden"
          style={{ backgroundImage: `url(${fondo})` }}
        ></article>
        <article className="w-full h-full flex flex-col justify-center items-center">
          <a href="/"><img className="mb-5" src={logo} alt="Logo" /></a>
          <form onSubmit={handleLogin} className="flex flex-col w-[80%]">
            <label className="font-secondary mb-4" htmlFor="username">
              Usuario:
            </label>
            <input
              className="border-none h-14 font-secondary rounded-md text-center"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="font-secondary mb-4 mt-5" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="border-none h-14 font-secondary rounded-md text-center"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="mt-5 mb-5 bg-greenPasteTwo hover:bg-greenPasteOne cursor-pointer rounded-lg h-16"
              type="submit"
            >
              Login
            </button>
            <a className="text-center font-body text-sm" href="/register">
              ¿Aún no eres miembro? Registrarse ahora
            </a>
          </form>
        </article>
      </main>
    </>
  );
};

export default Login;
