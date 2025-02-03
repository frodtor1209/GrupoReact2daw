import React, { useState } from 'react';

const Footer = () => {
  const [message, setMessage] = useState('');

  const pulsaBoton = () => {
    setMessage('¡Gracias por visitar nuestra página!');
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Grupo React Manuel Gómez y David Peña.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
        </div>
        <button onClick={pulsaBoton} className="mt-2 px-2 py-2 bg-black-600 hover:bg-gray-700 text-white rounded"> Pulsa aquí</button>
        {message && <p className="mt-2 text-green-400">{message}</p>}
      </div>
    </footer>
  );
};

export default Footer;
