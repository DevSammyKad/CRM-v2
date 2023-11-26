// Navbar.js
import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-white p-4 border-b border-border-stroke">
      <div className="w-full mx-auto flex ">
        <div className="p-4 flex">
          <img src={Logo} alt="" className="mx-4" />
          <h1 className="font-bold text-xl"> PALAVI</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
