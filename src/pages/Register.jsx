import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import fondo from '../assets/fondoOne.png';
import Alert from '../components/Alert';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null); // Limpia errores previos

    try {
      const data = await registerUser({ username, password, email, telefono, direccion });

      if (data.status) {
        // Almacena datos en localStorage
        localStorage.setItem('jwt', data.jwt);
        localStorage.setItem('roles', JSON.stringify(data.roles));
        localStorage.setItem('username', data.username);

        console.log('Registro exitoso:', data);

        // Redirige al home
        navigate('/home');
      } else {
        setError('Error en el registro: ' + data.msg); // Muestra el mensaje del backend
      }
    } catch (err) {
      setError('Error al registrar: intenta nuevamente.');
    }
  };

  return (
    <>
      {error && <Alert msg={error} />}
      <main className="flex flex-grow h-full">
        <article
          className="w-full h-full bg-cover bg-center bg-fixed max-md:hidden"
          style={{ backgroundImage: `url(${fondo})` }}
        ></article>
        <article className="w-full h-full flex flex-col justify-center items-center">
          <a href="/"><img className="mb-5" src={logo} alt="Logo" /></a>
          <form onSubmit={handleRegister} className="flex flex-col w-[80%]">
            <label className="font-secondary mb-1" htmlFor="username">
              Usuario:{' '}
            </label>
            <input
              className="border-none h-14 font-secondary rounded-md text-center"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="font-secondary mb-1 mt-2" htmlFor="email">
              Correo:{' '}
            </label>
            <input
              className="border-none h-14 font-secondary rounded-md text-center"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="font-secondary mb-1 mt-2" htmlFor="telefono">
              Teléfono:{' '}
            </label>
            <input
              className="border-none h-14 font-secondary rounded-md text-center"
              id="telefono"
              type="text"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label className="font-secondary mb-1 mt-2" htmlFor="direccion">
              Dirección:{' '}
            </label>
            <input
              className="border-none h-14 font-secondary rounded-md text-center"
              id="direccion"
              type="text"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <label className="font-secondary mb-1 mt-2" htmlFor="password">
              Contraseña:{' '}
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
              Registrarse
            </button>
            <a
              className="text-center font-body text-sm hover:text-greenPasteTwo"
              href="/login"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </a>
          </form>
        </article>
      </main>
    </>
  );
};

export default Register;
