import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#001202]  fixed w-full  text-xl px-6  flex justify-between items-center py-5 border-amber-50 border-2">
      <h1 className="text-xl font-bold text-orange-400">Il est midi</h1>
      <div className="space-x-10">
        <Link to="/" className=" font-semibold  hover:text-amber-200">
          Accueil
        </Link>
        <Link to="/menu" className="font-semibold  hover:text-amber-200">
          Menu
        </Link>
        <Link to="/about" className="font-semibold  hover:text-amber-200">
          À propos
        </Link>
        <Link to="/commander" className="  bg-orange-400 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-[#B91C1C] transition ">
          Commander
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
