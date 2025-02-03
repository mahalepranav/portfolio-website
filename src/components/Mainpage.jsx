import React from 'react';
import Navbar from "./header";
import "./Mainpage.css"
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import ContactUs from './ContactUs';
import Footer from './Footer';

const MainPage = () => {
    const handleDownload = () => {
      const link = document.createElement('a');
      
      link.href = '/assets/Pranav_Resume_.pdf'; 
      link.download = 'Resume.pdf';       
      link.click();
    };

  return (
    <>
      <Navbar />
      <div style={{
        backgroundImage : "url('/assets/bg-img2.png')", 
        backgroundRepeat : "no-repeat", 
        backgroundSize : "cover",
        backgroundPosition: "center",
        width : "100%", 
        height:"100vh",
        opacity: 0.8,
        }}>
          <div id="home" className='text-center'> 
            <h1 className='header-text'>Hi, I am <br/>Pranav Mahale</h1>
            <p className='header-text-1 mt-5'>Aspiring Full-Stack Developer</p>
            <button onClick={handleDownload} className='btn btn-primary mt-5 py-3 px-5'>Download Resume</button>
          </div>
      </div>
      <div id="about">
        <About />
      </div>        
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio/>
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div>
        <Footer />  
      </div>    
    </>
  );
};

export default MainPage;
