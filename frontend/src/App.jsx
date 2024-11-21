// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";


function App() {
  return (
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
}

export default App;
