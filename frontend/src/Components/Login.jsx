import React, { useState } from "react";
import { Link } from "react-router-dom";
import Robo from "../assets/images/Login_Robo.gif";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission logic
    if (email && password) {
      console.log("Form Submitted", { email, password });
      // Navigate or take any other action
    } else {
      setError(true);
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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-4 py-2 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 px-4 py-2 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-blue-500 text-white uppercase font-semibold hover:bg-blue-600 transition-all"
          >
            Login
          </button>

          {/* Error Message */}
          {error && <div className="text-red-500 text-center mt-4">Login Failed</div>}

          <p className="text-center text-gray-600 mt-6">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-500">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
