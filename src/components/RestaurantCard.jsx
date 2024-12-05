const RestaurantCard = ({ name, address, rating, contact }) => (
  <div className="p-4 border rounded-lg shadow-sm bg-white">
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-sm text-gray-500">{address}</p>
    <p className="text-sm">Calificación: {rating} / 5</p>
    <p className="text-sm text-blue-600">Contacto: {contact}</p>
  </div>
);

export default RestaurantCard;
