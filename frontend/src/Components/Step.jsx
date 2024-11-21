import React from "react";

const Step = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-indigo-50 py-10 px-5 lg:px-20">
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/Images/p1.png" // Replace with your illustration/image URL
          alt="Personality Illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Step 1: Register with us
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Provide basic, academic, and extracurricular information to begin your
          personalized career discovery journey.
        </p>
       
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-indigo-50 py-10 px-5 lg:px-20">
      

      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Step 2: Take Diagnostic Tests
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        Complete our scientifically designed tests to assess your personality, aptitude, and interests.
        </p>
        
      </div>
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/Images/p2.png" // Replace with your illustration/image URL
          alt="Personality Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div><div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-indigo-50 py-10 px-5 lg:px-20">
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/Images/p3.png" // Replace with your illustration/image URL
          alt="Personality Illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Step 3: Get AI-Driven Career Matches
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        Receive career recommendations based on your skills and current market trends.
        </p>
        
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-indigo-50 py-10 px-5 lg:px-20">
      

      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Step 4: Explore Resources and Guidance
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        Access curated content, certified courses, and development tools to achieve your career goals.
        </p>
        
      </div>
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/Images/p1.png" // Replace with your illustration/image URL
          alt="Personality Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-indigo-50 py-10 px-5 lg:px-20">
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/Images/p2.png" // Replace with your illustration/image URL
          alt="Personality Illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Step 5: Get Assistance Anytime
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        Our chatbot and mentors are always available to resolve your queries and provide advice.
        </p>
        
      </div>
    </div>
    </>
  );
};

export default Step;
