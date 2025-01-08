// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Header.css';

// const Navbar = () => {
//      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//    const toggleMenu = () => {
//      setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//     <nav className="navbar navbar-expand-lg">
//       <div className="navbar-logo">
//         <NavLink to="/">MyPortfolio</NavLink>
//       </div>
//       <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/portfolio">Portfolio</NavLink>
//         <NavLink to="/resume">Resume</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </div>
//       <button className="navbar-toggle" onClick={toggleMenu}>
//         ☰
//       </button>
//     </nav>
//     </>
//   )
// }

// export default Navbar;





// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Header.css'

// const FixedNavbar = () => {
//   return (
//     <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">MyPortfolio</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto navbar-links">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
//             <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default FixedNavbar;



import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'

const FixedNavbar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className='header'>
      <Container>
        <Navbar.Brand href="#home" className='header-logo'><img src='/assets/logo.png' className='img-fluid' alt='' style={{height:"60px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FixedNavbar;