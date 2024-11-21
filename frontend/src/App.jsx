// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { UserProvider } from "./Components/UserContext";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Signup from "./components/Signup";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import AcademicAssessmentForm from './components/Form/form'; // Ensure the path is correct
import Quiz from './components/career/careerQuestion'

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<h1>Contact Us Page</h1>} />
          <Route path="/form" element={<AcademicAssessmentForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
