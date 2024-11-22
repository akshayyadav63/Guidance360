/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";

const CareerCounseling = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/company-boss-giving-tasks-upset-employee-who-very-busy-supervisor-worker-communicating-flat-vector-illustration-effective-management-concept-banner-website-design-landing-web-page_74855-21006.jpg?t=st=1732211424~exp=1732215024~hmac=de705e101143df14916acad987c9599c80e4987f32431e56fdc8aa5755d10011&w=900')", // Image URL corrected
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 md:px-12 space-y-6">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate__fadeIn animate__delay-1s">
          Start Your Career Skill Assessment Here
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto animate__fadeIn animate__delay-2s">
          Begin your journey to professional growth with expert guidance!
        </p>

        {/* Button */}
        <div className="animate__fadeIn animate__delay-3s">
          <Link to="/skillquestion">
            <button className="mt-6 px-10 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-lg font-semibold rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
              Start with Us
            </button>
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          .animate__fadeIn {
            animation: fadeIn 2s ease-in-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CareerCounseling;
