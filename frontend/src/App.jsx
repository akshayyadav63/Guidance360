/* eslint-disable no-unused-vars */
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { UserProvider } from "./Components/UserContext";

// Importing components with corrected paths
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import AcademicAssessmentForm from "./Components/Form/form"; // Corrected import
import Quiz from "./Components/career/careerQuestion"; // Fixed case issue
import Services from "./Components/Service";
import ContactUs from "./Components/ContactUs";
import CareerCounseling from "./Components/career/AssesmentHome"; // Fixed path
import SkillFront from "./Components/career/SkillFront"; // Fixed path
import SkillQuestions from "./Components/career/skillQuestions"; // Fixed path
import CareerDashboard from "./Components/CareerDasboar";
import ResourceLibrary from "./Components/Resourse";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/form" element={<AcademicAssessmentForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/assesment-home" element={<CareerCounseling />} />
          <Route path="/skillfront" element={<SkillFront />} />
          <Route path="/skillquestion" element={<SkillQuestions />} />
          <Route path="/dashboard" element={<CareerDashboard />} />
          <Route path="/resource" element={<ResourceLibrary />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
