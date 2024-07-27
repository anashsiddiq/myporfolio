// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin, FaBriefcase,FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
  return (
<section id="contact" className="bg-dark contact">
  <h2 className="underline text-white">Contact</h2>
  <Container className="width-less d-flex justify-content-center">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon animated-icon" id='facebook-icon'>
      <FaFacebook size={50} />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon animated-icon" id='github-icon'>
      <FaGithub size={50} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon animated-icon" id='linkedin-icon'>
      <FaLinkedin size={50} />
    </a>
    <a href="https://naukri.com" target="_blank" rel="noopener noreferrer" className="icon animated-icon" id='naukri-icon'>
      <FaBriefcase size={50} />
    </a>
    <a href="https://wa.me/6266247887" target="_blank" rel="noopener noreferrer" className="icon animated-icon" id='whatsapp-icon'>
      <FaWhatsapp size={50} />
    </a>
  </Container>
  </section>
  );
};

export default Contact;
