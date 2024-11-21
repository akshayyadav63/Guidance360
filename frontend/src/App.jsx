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
import AcademicAssessmentForm from './Components/Form/form'; // Ensure the path is correct
import Form from './Components/Form/form'
import Quiz from './components/career/careerQuestion'
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/form" element={<AcademicAssessmentForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={< Quiz />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
