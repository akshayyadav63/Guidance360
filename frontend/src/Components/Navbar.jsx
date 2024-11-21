
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Innovative Incubators</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/services" className="hover:text-yellow-300">Services</Link></li>
        <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
      </ul>
     
      <button className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500">
  <Link to="/login" className="text-white">
    Login
  </Link>
</button>
     
    </nav>
  );
};

export default Navbar;
