// import React, { Component } from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
// import resumeData from './resumeData';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header resumeData={resumeData}/>
//         <About resumeData={resumeData}/>
//         <Resume resumeData={resumeData}/>
//         <Portfolio resumeData={resumeData}/>
//         <ContactUs resumeData={resumeData}/>
//         <Footer resumeData={resumeData}/>
//       </div>
//     );
//   }
// }

// export default App;
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