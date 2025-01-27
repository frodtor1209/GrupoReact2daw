import React from 'react';
import Card from '../components/Card';
import Componentes from '../components/Componentes';
import Tabla from '../components/Tabla';
import Formulario from '../components/Formulario';

const Manuel = () => {
  return (
    <div className="p-6">
    <h1 className="text-4xl font-bold">Página de Manuel</h1>
    <Componentes 
    titulo="Mi Primer Componente" 
    ChildComponent={Card}
    nombre="Prueba Manuel" 
    descripcion="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" 
    img="prueba.jpg" />
        <Tabla/>
        <Formulario/>
  </div>


  );
};

export default Manuel;
