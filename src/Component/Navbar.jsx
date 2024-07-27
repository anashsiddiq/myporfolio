// Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const ResponsiveNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" id="navbar-height">
    <Container>
      <Navbar.Brand  id="icon-size" href="#home">Personal Portfolio.</Navbar.Brand>
      <Navbar.Toggle id='icon-change' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='set-color' id="basic-navbar-nav">
        <Nav className="navbarNavs " id="navbarNav">
        <ul className="navbar-nav ml-auto" id='set-item'>
        <li className="nav-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Expertise">Expertise</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default ResponsiveNavbar;
