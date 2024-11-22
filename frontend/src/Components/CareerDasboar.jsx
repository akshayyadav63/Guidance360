/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import Chatbot from "./ChatBoat";

// Card Component for Career Information
const CareerCard = ({ careerName, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center text-center w-full max-w-lg">
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{careerName}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      <div className="flex gap-6">
      <Link to="/resource"><button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
        Explore More
      </button>
      </Link>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
        Get Your Path
      </button>
      </div>
    </div>
  );
};

// Main Component to Render the Cards
const CareerDashboard = () => {
  return (
    <>
    <Chatbot/>
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 mt-10 px-4 mb-10">
    <h1 className="text-3xl font-bold text-center text-gray-400 mb-8 mt-5 ">
            Based On your Assessment Scores
          </h1>
          <h1 className="text-3xl font-bold text-center text-purple-600 mb-8 -mt-10 ">
            Career You May Choose
          </h1>
      {/* Career Card 1 */}
      <CareerCard
        careerName="Software Developer"
        description="Build and maintain software applications. Excellent for problem-solvers and tech enthusiasts."
      />
      {/* Career Card 2 */}
      <CareerCard
        careerName="Data Scientist"
        description="Analyze complex data to uncover insights and solve business problems. A great fit for those with a love for math and analytics."
      />
      {/* Career Card 3 */}
      <CareerCard
        careerName="Digital Marketer"
        description="Create digital marketing campaigns to promote brands and services. Ideal for creative minds who enjoy online trends."
      />
    </div>
    <Footer/>
    </>
  );
};

export default CareerDashboard;