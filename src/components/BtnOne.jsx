import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const BtnOne = ({ navigateTo }) => { // Recibe el prop navigateTo que será la ruta a la que navegar
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleClick = () => {
    navigate(navigateTo); // Redirige a la ruta pasada como prop
  };

  return (
    <div 
      onClick={handleClick}  // Añade un manejador de clic que llama a handleClick
      className="border p-8 rounded-lg hover:bg-greenPasteFour mb-4 shadow-sm hover:shadow-md duration-500 cursor-pointer flex justify-center items-center bg-greenPasteTwo  flex-row w-[60%]"
    >
      <p>Editar perfil</p>
    </div>
  );
};

export default BtnOne;
