import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Image1 from "../assets/images/Signup_Image1.png";
import Robo from "../assets/images/Signup_Robo.png";

export default function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("http://127.0.0.1:5000/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            setSuccess(response.data.message);
            navigate("/login");
            setError("");

        } catch (err) {
            setError(err.response?.data?.error || "An error occurred!");
            setSuccess("");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-96">
                <img src={Image1} alt="" className="absolute bottom-[-12px] left-[-305px] z-10 max-w-full" />
                <form className="w-full relative z-20 p-12 bg-white shadow-lg" onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-semibold text-center mb-8 uppercase tracking-wider">Sign Up</h2>

                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}

          {/* Name Input */}
          <div className="relative mb-5">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-lg text-gray-500">
            <i className="fa fa-user"></i>

            </span>
            <input
              type="text"
              className="w-full h-10 pl-12 border-b border-gray-300 focus:outline-none focus:border-purple-500"
              placeholder="Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative mb-5">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-lg text-gray-500">
            <i className="fa fa-envelope"></i>

            </span>
            <input
              type="email"
              className="w-full h-10 pl-12 border-b border-gray-300 focus:outline-none focus:border-purple-500 "
              placeholder="Email"
              required
            />
          </div>

                    {/* Password Input */}
                    <div className="relative mb-5">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full h-10 pl-12 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                            placeholder="Password"
                            minLength="8"
                            required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="relative mb-8">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full h-10 pl-12 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-12 bg-gray-500 text-white uppercase font-semibold text-lg tracking-wide transition duration-300 hover:bg-gray-600"
                    >
                        Sign Up
                    </button>

                    <p className="text-center mt-6 text-lg">
                        Already have an account?
                        <Link to="/login" className="text-blue-600 ml-2">Login</Link>
                    </p>
                </form>

                <img src={Robo} alt="" className="absolute bottom-0 right-[-145px] max-w-full" />
            </div>
        </div>
    );
}
