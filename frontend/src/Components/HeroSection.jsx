// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-purple-500 text-white h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl font-bold mb-4">Intelligent Career Guidance System</h2>
     
      <button className="bg-yellow-400 text-purple-600 px-6 py-3 rounded-full text-lg hover:bg-yellow-500">
        Get Started!
      </button>
    </div>
  );
};

export default HeroSection;
