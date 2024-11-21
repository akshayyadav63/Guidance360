/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Robo from "../assets/images/Login_Robo.gif";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email,
        password,
      });

      setSuccess(response.data.message);
      setError("");
      console.log("User Info:", response.data.name); // Use this for further state updates

      // Redirect to Form.jsx
      navigate("/form");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred!");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-sm bg-white p-8 shadow-lg rounded-lg">
        <img
          src={Robo}
          alt="Robo"
          className="absolute bottom-[-12px] left-[-300px] z-10 max-w-[80%]"
        />
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-center text-4xl font-bold mb-8">Login</h2>

          {/* Email Input */}
          <div className="relative mb-6">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 pl-10 px-4 py-2 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 pl-10 px-4 py-2 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-gray-500 text-white uppercase font-semibold hover:bg-gray-600 transition-all"
          >
            Login
          </button>

          {/* Success and Error Messages */}
          {success && <div className="text-green-500 text-center mt-4">{success}</div>}
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}

          <p className="text-center text-gray-600 mt-6">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
