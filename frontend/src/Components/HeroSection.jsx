// components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white-500 text-white h-screen flex flex-col justify-center items-center text-center">
      <div>
      <h2 className="text-4xl text-purple-600 font-bold mb-4">Empower Your Future with Personalized Career Guidance</h2>
      <h2 className="text-2xl text-purple-600 mb-4">Discover your unique potential, explore career paths, and unlock opportunities tailored just for you.</h2>
      <button className="bg-yellow-400 text-purple-600 px-6 py-3 rounded-full text-lg hover:bg-yellow-500">
        Get Started!
      </button>
      <img className="-mb-7" src="/Images/home.png" alt="" />
      </div>
      
    </div>
  );
};

export default HeroSection;
