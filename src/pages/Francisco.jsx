import React from 'react';
import Card from '../components/Card';
import Contador from '../components/Contador';


const Francisco = () => {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold">Página de Francisco Javier</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition m-12 border-gray-200 border-2">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">1. Componentes</h2>
                <Card
                    nombre={"Nombre de prueba"}
                    descripcion={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
                    img={"prueba.jpg"}
                />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition m-12 border-gray-200 border-2">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">2. Estado de los componentes</h2>
                <Contador/>
            </div>
        </div>
    );
};

export default Francisco;
