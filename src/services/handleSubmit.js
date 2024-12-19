// Maneja el envío del formulario
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Creamos un objeto con los datos del formulario
      const updatedData = { ...formData };
  
      // Verificamos si la contraseña está vacía y la eliminamos del objeto si es así
      if (!updatedData.password) {
        delete updatedData.password;  // Si no hay contraseña, no la enviamos
      }
  
      // Llamar al servicio para actualizar los datos
      const result = await updateUserData(updatedData);
  
      // Suponiendo que el servicio de actualización devuelve un objeto con el nuevo token y otros datos
      const { token, usuario, role } = result;  // Cambia según la respuesta de tu API
  
      // Actualiza el token en localStorage
      localStorage.setItem('jwt', token);
  
      // Actualiza los datos del usuario en localStorage si es necesario
      localStorage.setItem('username', usuario);  // Actualiza el username
      localStorage.setItem('role', role);  // Actualiza el role (si aplica)
  
      alert('Datos actualizados correctamente');
  
      // Redirige a la página de logout después de la actualización
      navigate('/logout');  // Redirige a /logout
  
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Error al actualizar los datos');
    } finally {
      setLoading(false);
    }
  };
  