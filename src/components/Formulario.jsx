import { useState, useEffect } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    gmail: "",
    contraseña: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert(`Bienvenido, ${formData.nombre}!`);
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />

            <input
              type="email"
              name="gmail"
              value={formData.gmail}
              onChange={handleChange}
              placeholder="Gmail"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />

            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              placeholder="Contraseña"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />

            <div className="mt-4 text-gray-600">
              <p>Contraseña: {formData.contraseña}</p>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600" 
              id="botonForm"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    )
  );
}
