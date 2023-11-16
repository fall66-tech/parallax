import React from 'react'
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (





    <nav className=" bg-slate-400/60 sticky top-0 z-30  p-4 flex justify-between items-center">
      <div >
      <h2 className=' text-2xl sm:text-3xl lg:text-4xl px-2'>
           <span className=' font-bold'>Explore</span> SPACE
        </h2>
      </div>
      <div className="hidden  items-center md:flex space-x-4">
        <a href="#home" className="text-white">Home</a>
        <a href="#about" className="text-white">About Us</a>
        <a href="#services" className="text-white">Services</a>
        <a href="#reviews" className="text-white">Reviews</a>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md">Get Started</button>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
       
      </div>
      {menuOpen && (
        
        <div className="md:hidden absolute w-[300px] z-10 duration-300 h-screen top-16 right-0 p-4 bg-blue-500">
          <ul className="space-y-4">
            <li>
              <a href="#home" className="text-white">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white">About Us</a>
            </li>
            <li>
              <a href="#services" className="text-white">Services</a>
            </li>
            <li>
              <a href="#reviews" className="text-white">Reviews</a>
            </li>
            <li>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md">Get Started</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
