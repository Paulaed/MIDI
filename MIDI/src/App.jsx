import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Pages/about";
import Commander from "./Pages/Commander";
import Menu from "./Pages/menu";
import Accueil from "./Pages/Accueil"; // Crée cette page si elle n’existe pas
import "./index.css";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      
      <div className="text-white min-h-screen bg-[#001202] ">
         <Navbar /> 
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/commander" element={<Commander />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
