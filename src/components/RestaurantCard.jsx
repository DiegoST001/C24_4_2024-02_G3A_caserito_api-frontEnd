const RestaurantCard = ({ nombre, descripcion, ubicacion, tipo, img }) => (
  <div className="border p-4 rounded-md shadow-lg flex flex-row">
    <div className="w-full flex justify-center items-center">
      <img src={img} alt="" />
    </div>
    <div className="w-full pl-2">
      <h2 className="text-xl w-full text-center font-header">{nombre}</h2>
      <p className="text-gray-600 font-body">{descripcion}</p>
      
      <p className="text-gray-700">{tipo}</p>
      
      <p className="text-gray-500 font-body text-sm">{ubicacion}</p>
    </div>

  </div>
);


export default RestaurantCard;
