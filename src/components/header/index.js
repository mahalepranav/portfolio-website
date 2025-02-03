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