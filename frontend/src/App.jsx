/* eslint-disable no-unused-vars */
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { UserProvider } from "./Components/UserContext";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import AcademicAssessmentForm from './Components/Form/form'; // Correct path // Ensure the path is correct
import Form from './Components/Form/form'
import Quiz from './components/career/careerQuestion'
import Services from "./Components/Service";
import ContactUs from "./Components/ContactUs";
import CareerCounseling from "./Components/AssesmentHome";
import SkillFront from "./Components/SkillFront";
import SkillQuestions from "./Components/career/skillQuestions";
import CareerDashboard from "./Components/CareerDasboar";
import ResourceLibrary from "./Components/Resourse";



function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/form" element={<AcademicAssessmentForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={< Quiz />} />
          <Route path="/assesment-home" element={<CareerCounseling />} />
          <Route path="/skillfront" element={<SkillFront/>} />
          <Route path="/skillquestion" element={<SkillQuestions />} />
          <Route path="/dashboard" element={<CareerDashboard />} />
          <Route path="/resource" element={<ResourceLibrary />} />

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
