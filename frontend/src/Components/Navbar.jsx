import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { userEmail, setUserEmail } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Clear localStorage
    setUserEmail(null); // Update context state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Innovative Incubators</h1>

      {!userEmail && (
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact Us
            </Link>
          </li>
        </ul>
      )}

      {userEmail ? (
        <div className="flex items-center space-x-4">
          <span className="text-yellow-300">Welcome, {userEmail}</span>
          <button
            onClick={handleLogout}
            className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500">
          <Link to="/login" className="text-white">
            Login
          </Link>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
