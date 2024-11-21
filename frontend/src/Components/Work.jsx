import React from "react";

const Work = () => {
  return (
    <>
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-2xl"> {/* Adjusted the max-width */}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Career Guidance Flow</h1>
        
        <div className="space-y-8">
          {/* User Registration */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">User Registration</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Basic Information</li>
              <li>Academic Information</li>
              <li>Extracurricular Activities</li>
              <li>Current Status of Education</li>
            </ul>
          </div>

          {/* Diagnostic Test */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Diagnostic Test</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Personality Tests (AI Interview)</li>
              <li>Aptitude Tests (Domain-specific)</li>
              <li>Interest Inventories (Career Counseling Questions)</li>
            </ul>
          </div>

          {/* AI-Driven Career Matching */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">AI-Driven Career Matching</h2>
            <p className="text-gray-700">
              Matching based on:
              <ul className="list-disc pl-5">
                <li>User's Skills</li>
                <li>Market Trends</li>
              </ul>
            </p>
          </div>

          {/* Generative AI Recommendations */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Generative AI Career Options</h2>
            <p className="text-gray-700">
              AI recommends potential career paths based on diagnostic tests and market insights.
            </p>
          </div>

          {/* Assistance of Chatbot */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Chatbot Assistance</h2>
            <p className="text-gray-700">
              Provides:
              <ul className="list-disc pl-5">
                <li>Instant Query Resolution</li>
                <li>Career Advice</li>
              </ul>
            </p>
          </div>

          {/* User Selects Career */}
          <div className="bg-white shadow-md rounded-lg p-6 col-span-full">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
              Select a Career
            </h2>
          </div>

          {/* Resources */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Resource Library</h2>
            <p className="text-gray-700">
              Access to detailed information about the selected career.
            </p>
          </div>

          {/* Personalized Path */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">Personalized Path</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Curated Resources</li>
              <li>Certified Courses</li>
              <li>Development Guidance</li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Employee Experiences</h2>
            <p className="text-gray-700">
              Real-life insights and experiences from working professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Work;
