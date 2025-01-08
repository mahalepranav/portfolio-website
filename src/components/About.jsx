import React from 'react';
import './Mainpage.css';

const About = () => {
  return (
    <>
    <div style={{backgroundColor: "rgb(238,237,243)", paddingTop: "50px"}}>
      <div >
        <p className='font text-center pt-5'>About Me</p>
      </div>
      <div class="h-divider">
        <div class="shadow"></div>
      </div>
      <div className='container mt-5'>   
        <div className='row'>  
          <div className='font-1 col-md-8 pt-5'>
            <p>Hello! I'm Pranav Mahale, an aspiring full-stack developer with<br/> a focus on the MERN stack. I have a strong
              passion for web<br/> technologies and am constantly learning and growing my skill<br/> set. I believe in building
              responsive, scalable, and high-performing<br/> web applications. Welcome to my portfolio website, where you<br/> can
              explore my work and projects!</p>
            <button className='btn btn-outline-dark px-5 mt-5 ms-5 profile-3'>Phone :- 7249811801</button>
            <button className='btn btn-outline-dark px-5 mt-5 ms-5 profile-3'>Email :- pranavmahale735@gmail.com</button>
          </div>
          <div className='col-md-4'>
            <img 
              src='/assets/profile-pic.jpg'
              alt=''
              className='img-fluid profile mt-2'
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;