<<<<<<< HEAD
import { useState } from 'react'
import AcademicAssessmentForm from './components/Form/form'
=======
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

>>>>>>> bb162f0fd46452cc87e332e85ec86731803ec8a3

function App() {
  return (
<<<<<<< HEAD
    <div>
     
    </div>
  )
=======
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/about" element={<h1>About Us Page</h1>} />
        <Route path="/contact" element={<h1>Contact Us Page</h1>} />
        
      </Routes>
    </Router>
  );
>>>>>>> bb162f0fd46452cc87e332e85ec86731803ec8a3
}

export default App;
