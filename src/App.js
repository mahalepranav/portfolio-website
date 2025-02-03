import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './components/Mainpage';
import About from './components/About';
import Contact from './components/ContactUs';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Skills />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </Router>
  )
}

export default App