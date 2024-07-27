// src/components/Projects.js
import React from 'react';
import './Project.css';
import Brel from'./Image/Brelindia.png';
import Vegfruit from './Image/VegFruit.png';
import BBvmg from './Image/BBVMG.png';
import sampledesign from './Image/sample-design.png'


const Projects = () => {
  return (

    <section id="projects" className="projects bg-dark">
    <h2 className='underline text-white mb-5'>Projects</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="image-container position-relative">
            <img src={Brel} alt="Project 1" className="img-fluid" />
            <div className="overlay d-flex flex-column align-items-center justify-content-center">
              <p className="text-white">The BrelIndia project focuses on solar energy solutions. BrelIndia is involved in designing, installing, and managing solar power systems, aiming to provide sustainable and renewable energy solutions.</p>
              <a href="https://brelindia.com/" className="btn mt-3" target="_blank" rel="noopener noreferrer">Go to website</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="image-container position-relative">
            <img src={Vegfruit} alt="Project 2" className="img-fluid" />
            <div className="overlay d-flex flex-column align-items-center justify-content-center">
              <p className="text-white">The Veg & Fruit Project is a sustainability initiative aimed at promoting the cultivation and consumption of vegetables and fruits. Encouraging city dwellers to grow their own vegetables and fruits in community gardens or home gardens.</p>
              <a href="https://vegfruit.netlify.app/" className="btn mt-3" target="_blank" rel="noopener noreferrer">Go to website</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="image-container position-relative">
            <img src={BBvmg} alt="Project 3" className="img-fluid" />
            <div className="overlay d-flex flex-column align-items-center justify-content-center">
              <p className="text-white">The BBVMG project, which stands for "Bharat Biogas and Vermicomposting Management Group," is focused on sustainable waste management practices through biogas production and vermicomposting.</p>
              <a href="https://www.bbvmg.com/" className="btn mt-3" target="_blank" rel="noopener noreferrer">Go to website</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="image-container position-relative">
            <img src={sampledesign} alt="Project 4" className="img-fluid" />
            <div className="overlay d-flex flex-column align-items-center justify-content-center">
              <p className="text-white">A sample design project generally involves creating a detailed plan or prototype for a product or solution. Here’s an overview of what such a project might entail.</p>
              <a href="https://sample-design.netlify.app/" className="btn mt-3" target="_blank" rel="noopener noreferrer">Go to website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Projects;
