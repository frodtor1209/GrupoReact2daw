import React, { useState } from 'react';
import Card from '../components/Card';
import Componentes from '../components/Componentes';

const David = () => {
  const [image, setImage] = useState("prueba.jpg");
  
  const cambiarImagen = () => {
    if (image === "prueba.jpg") {
      setImage("imagenCambiadaDavid.png");
    } else {
      setImage("prueba.jpg");
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Página de David</h1>
      <Componentes 
      titulo="Componente prueba estados" 
      ChildComponent={Card}
      nombre="Componente prueba estados" 
      descripcion="Usa el boton de abajo para modificar la imagen" 
      img={image}  />
            <button 
        onClick={cambiarImagen} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
        Cambiar Imagen
      </button>
    </div>
  );
};

export default David;
