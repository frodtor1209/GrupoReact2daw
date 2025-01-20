import React from 'react';
import Card from '../components/Card';
import Componentes from '../components/Componentes';

const David = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Página de David</h1>
      <Componentes 
      titulo="Mi Primer Componente" 
      ChildComponent={Card}
      nombre="Nombre de prueba" 
      descripcion="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" 
      img="prueba.jpg" />
    </div>
  );
};

export default David;
