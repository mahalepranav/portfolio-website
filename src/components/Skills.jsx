import React from 'react';
import './Mainpage.css';

const Skills = () => {
  return (
    <>
    <div style={{backgroundColor: "rgb(238,237,243)", paddingTop: "50px"}}>
      <div >
        <p className='font text-center pt-5'>Skills</p>
      </div>
      <div class="h-divider">
        <div class="shadow"></div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>React JS</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>HTML</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>CSS</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>Express JS</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>Bootstrap</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>Node JS</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>MongoDB</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>Javascript</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>Git</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>Github</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>Redux</button>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <button className='btn btn-dark py-3 mt-5 w-75'>MUI</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;