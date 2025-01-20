import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
    const reiniciar = () => setContador(0);

    return (
        <>
            <p className="text-lg text-gray-700">El contador actual es:</p>
            <div className="text-4xl font-bold text-gray-800 my-4">{contador}</div>
            <div className="space-x-4">
                <button
                    onClick={decrementar}
                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
                >
                    Decrementar
                </button>
                <button
                    onClick={incrementar}
                    className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
                >
                    Incrementar
                </button>
                <button
                    onClick={reiniciar}
                    className="px-4 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition"
                >
                    Reiniciar
                </button>
            </div>
        </>
    );
};

export default Contador;
