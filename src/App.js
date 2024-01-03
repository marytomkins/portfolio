import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Header isMobile={isMobile} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/portfolio"
            element={<Portfolio isMobile={isMobile} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
