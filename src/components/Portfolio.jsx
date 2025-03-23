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
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-4 item mt-5'>
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
          <div className='col-md-6 col-lg-4 item mt-5'>
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
          <div className='col-md-6 col-lg-4 item mt-5'>
            <img src='/assets/project-3.png' alt='' className='profile-1 img-fluid'/>
            <div className='middle'>
              <div className='text1 text-center'>Ecommerce Website<br/>MongoDB Atlas, Express.js, React.js, and Node.js
                  <p className='text2'>Developed a full-stack e-commerce web application using ReactJS, Redux
                    and Tailwind CSS for the frontend, and Node.js, Express, and MongoDB Atlas for the backend. 
                    The platform includes user authentication, product browsing, cart management, and admin 
                    features for product management. Users can register, log in, add items to the cart, and 
                    make purchases, while admins can manage products and users.
                  </p>
                  <a href="https://ecommerce-frontend-ten-red.vercel.app/" target="_blank" rel="noopener noreferrer"><button className='btn btn-outline-dark px-4 mt-2'>Visit Site</button></a>
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