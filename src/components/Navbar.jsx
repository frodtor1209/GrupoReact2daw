import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-semibold">
          Proyecto React 2DAW
        </Link>
        <div className="space-x-4">
          <Link to="/david" className="text-white hover:text-yellow-400">David</Link>
          <Link to="/francisco" className="text-white hover:text-yellow-400">Francisco</Link>
          <Link to="/manuel" className="text-white hover:text-yellow-400">Manuel</Link>
          <Link to="/davidRoute" className="text-white hover:text-yellow-400">DavidRoute</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
