/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Footer";

// CareerReviewCard Component to display the job details
const CareerReviewCard = ({
  careerName,
  jobGrowthRate,
  salary,
  companies,
  reviews,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-purple-600 mb-4 text-center">
        Job Profile: {careerName}
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        <strong>Job Growth Rate:</strong> {jobGrowthRate}%
      </p>
      <p className="text-gray-700 text-lg mb-4">
        <strong>Salary:</strong> {salary} annually
      </p>
      <p className="text-gray-700 text-lg mb-4">
        <strong>Companies Demanding This Role:</strong> {companies}
      </p>
      <div>
        <strong className="text-gray-700">Reviews: </strong>
        <ul className="list-disc pl-5">
          {reviews.map((review, index) => (
            <li key={index} className="text-gray-600">
              "{review}"
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ResourceLibrary = () => {
  
  const careerData = {
    careerName: "Software Developer",
    description:
      "Software developers design, code, and maintain software applications. They are in high demand in India and play a key role in the country's booming tech industry, contributing to the development of user-friendly apps and platforms.",
    jobGrowthRate: 30, // Job growth rate in percentage for India
    salary: "₹8,00,000", // Average salary for a software developer in India
    companies: "Tata Consultancy Services, Infosys, Wipro, Cognizant, Accenture", // Example companies in India
    reviews: [
      "A lucrative career with plenty of opportunities in India's IT sector!",
      "High demand for skilled developers across various industries in India.",
      "Challenging work but offers high rewards and excellent growth prospects.",
    ],
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-16 px-4">
        <div className="max-w-4xl w-full mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-6">
            Career Resource Library
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Learn more about different careers, job profiles, and future opportunities in India.
          </p>
        </div>

        {/* Career Overview Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-600 mb-4 text-center">
            Career: {careerData.careerName}
          </h2>
          <p className="text-gray-700 text-lg mb-6">{careerData.description}</p>
        </div>

        {/* Career Review Section */}
        <CareerReviewCard
          careerName={careerData.careerName}
          jobGrowthRate={careerData.jobGrowthRate}
          salary={careerData.salary}
          companies={careerData.companies}
          reviews={careerData.reviews}
        />
      </div>
      <Footer />
    </>
  );
};

export default ResourceLibrary;