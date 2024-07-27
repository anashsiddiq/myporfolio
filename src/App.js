// src/App.js
import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skill';
import Expertise from './Component/Expertise';
import Projects from './Component/Project';
import Testimonal from './Component/Testimonal';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Expertise/>
      <Projects />
      <Testimonal/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

