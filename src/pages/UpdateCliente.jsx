import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { updateUserData } from '../services/User'; // Asegúrate de importar el servicio de actualización
import { getUserData } from '../services/authService'; // Para obtener los datos actuales del usuario
import Alert from '../components/Alert'; // Asegúrate de importar el componente de alerta

const UpdateCliente = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    telefono: '',
    direccion: '',
    avatar: '',
    password: ''  // Añadido para la contraseña
  });

  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState(''); // Estado para el mensaje de alerta
  const navigate = useNavigate(); // Usar useNavigate para redirigir

  // Llama a este efecto para cargar los datos del usuario cuando el componente se monte
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Obtén el token del almacenamiento local
        const userData = await getUserData(token); // Obtén los datos del usuario
        // Asegurarse de que los datos no sean undefined
        setFormData({
          username: userData?.usuario || '',  // Si no hay usuario, usa un valor predeterminado
          email: userData?.email || '',
          telefono: userData?.telefono || '',
          direccion: userData?.direccion || '',
          avatar: userData?.avatar || '',
          password: ''  // Inicia el campo de contraseña vacío
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Creamos una copia de los datos del formulario
      const updatedData = { ...formData };

      // Si la contraseña está vacía, eliminamos el campo 'password'
      if (!updatedData.password) {
        delete updatedData.password;
      }

      // Llamamos al servicio para actualizar los datos del usuario
      const result = await updateUserData(updatedData);

      // Si la actualización falla, capturamos el mensaje de error
      if (result.status === false) {
        setAlertMsg(result.msg); // Guardamos el mensaje de error en el estado de alerta
      } else {
        const { token, usuario, role } = result;

        // Actualizamos el token en localStorage
        localStorage.setItem('jwt', token);
        localStorage.setItem('username', usuario);
        localStorage.setItem('role', role);

        setAlertMsg('Datos actualizados correctamente'); // Mensaje de éxito
        navigate('/logout'); // Redirige a /logout
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      setAlertMsg('Error al actualizar los datos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Mostrar la alerta si existe un mensaje */}
      {alertMsg && <Alert msg={alertMsg} />}

      <form onSubmit={handleSubmit} className='mt-20 w-full flex justify-center items-center flex-col'>
        <div className="border p-8 rounded-md hover:bg-white mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex flex-row items-center w-[90%]">
          <label htmlFor="username" className="block w-40">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username || ''}  // Asegurarse de que el valor nunca sea undefined
            onChange={handleInputChange}
            className="w-full p-2 border border-greenPasteFour rounded"
          />
        </div>

        <div className="border p-8 rounded-md hover:bg-white mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex flex-row items-center w-[90%]">
          <label htmlFor="email" className="block w-40">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}  // Asegurarse de que el valor nunca sea undefined
            onChange={handleInputChange}
            className="w-full p-2 border border-greenPasteFour rounded"
          />
        </div>

        <div className="border p-8 rounded-md hover:bg-white mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex flex-row items-center w-[90%]">
          <label htmlFor="telefono" className="block w-40">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono || ''}  // Asegurarse de que el valor nunca sea undefined
            onChange={handleInputChange}
            className="w-full p-2 border border-greenPasteFour rounded"
          />
        </div>

        <div className="border p-8 rounded-md hover:bg-white mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex flex-row items-center w-[90%]">
          <label htmlFor="direccion" className="block w-40">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion || ''}  // Asegurarse de que el valor nunca sea undefined
            onChange={handleInputChange}
            className="w-full p-2 border border-greenPasteFour rounded"
          />
        </div>

        <div className="border p-8 rounded-md hover:bg-white mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex flex-row items-center w-[90%]">
          <label htmlFor="avatar" className="block w-40">Avatar:</label>
          <input
            type="url"
            id="avatar"
            name="avatar"
            value={formData.avatar || ''}  // Asegurarse de que el valor nunca sea undefined
            onChange={handleInputChange}
            className="w-full p-2 border border-greenPasteFour rounded"
          />
        </div>

        {/* Campo para la contraseña */}
        <div className="border p-8 rounded-md hover:bg-white mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex flex-row items-center w-[90%]">
          <label htmlFor="password" className="block w-40">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password || ''}  // Asegurarse de que el valor nunca sea undefined
            onChange={handleInputChange}
            className="w-full p-2 border border-greenPasteFour rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="border p-6 rounded-lg hover:bg-greenPasteFour mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex justify-center items-center bg-greenPasteTwo flex-row w-[60%]"
        >
          {loading ? 'Actualizando...' : 'Actualizar'}
        </button>
      </form>
    </>
  );
};

export default UpdateCliente;
