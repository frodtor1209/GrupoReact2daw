import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <a href="#" className="text-white text-2xl font-semibold">Proyecto React 2DAW</a>
        <div className="space-x-4">
          <a href="#navbar" className="text-white hover:text-yellow-400">David</a>
          <a href="#tarjeta" className="text-white hover:text-yellow-400">Francisco</a>
          <a href="#footer" className="text-white hover:text-yellow-400">Manuel</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
