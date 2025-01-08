import React from 'react';
import './Mainpage.css';

const Portfolio = () => {
  return (
    <>
    <div style={{backgroundColor: "rgb(238,237,243)", paddingTop: "50px"}}>
      <div >
        <p className='font text-center pt-5'>Projects</p>
      </div>
      <div class="h-divider">
        <div class="shadow"></div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4 item'>
            <img src='/assets/project-1.png' alt='' className='profile-1 img-fluid'/>
            <div className='middle'>
              <div className='text1 text-center'>Luxury Villa Website <br/>HTML, CSS
                <p className='text2'>Developed a responsive website for a luxury villa using HTML and
                    CSS. The site features a modern, user-friendly design with a focus on
                    showcasing property images, amenities, and Contact Details options.
                </p>
                <a href="https://mahalepranav.github.io/simple_villa_Project/" target="_blank" rel="noopener noreferrer"><button className='btn btn-outline-dark px-4 mt-2'>Visit Site</button></a>
              </div>
            </div>
          </div>
          <div className='col-md-4 item'>
            <img src='/assets/project-2.png' alt='' className='profile-1 img-fluid'/>
            <div className='middle'>
              <div className='text1 text-center'>YAMAHA Clone Website<br/>HTML, CSS Bootstrap, JavaScript
                <p className='text2'>Developed a responsive Yamaha Clone website using HTML,
                    CSS, Bootstrap & JavaScript. The project included key sections
                    such as About, Products, Parts, Contact, Buyer's Guide, Live Chat
                    Assistant & Services. Focused on replicating the design &
                    functionality of the original Yamaha website,
                    ensuring a seamless user experience across various devices &
                    browsers.
                </p>
                <a href="https://mahalepranav.github.io/Project/" target="_blank" rel="noopener noreferrer"><button className='btn btn-outline-dark px-4 mt-2'>Visit Site</button></a>
              </div>
            </div>
          </div>
          <div className='col-md-4 item'>
            <img src='/assets/project-3.png' alt='' className='profile-1 img-fluid'/>
            <div className='middle'>
              <div className='text1 text-center'>Dunzo Clone<br/>MongoDB, Express.js, React.js, and Node.js
                  <p className='text2'>The Dunzo Clone project using MongoDB, Express.js, React.js, and Node.js 
                    that replicates the core functionality of the Dunzo application. The platform enables users 
                    to order groceries, food, fruits & vegetables, pet supplies and flower gifts while offering 
                    real-time feeling, secure payments, and a user-friendly interface. This project demonstrates 
                    full-stack development skills, including database management, API creation, front-end design, 
                    and real-time features.
                  </p>
                  <a href="https://dunzo-clone-frontend-navy.vercel.app/" target="_blank" rel="noopener noreferrer"><button className='btn btn-outline-dark px-4 mt-2'>Visit Site</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;