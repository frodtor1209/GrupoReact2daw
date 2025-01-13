
function Card({ nombre, descripcion, img }) {
  return (
    <div className="max-w-xs mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img src={`../../public/${img}`} alt={nombre} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{nombre}</h2>
        <p className="text-gray-600 mt-2 text-base">{descripcion}</p>
      </div>
    </div>
  );
}

export default Card;
