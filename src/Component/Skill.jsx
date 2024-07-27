// src/components/Skills.js
import React from 'react';
import './Skill.css';
import HTML from './Pngicons/html-5.png';
import CSS from './Pngicons/css-3.png';
import Js from './Pngicons/js.png';
import Bootstrap1 from './Pngicons/bootstrap.png';
import Sass from'./Pngicons/sass.png';
import jquery from './Pngicons/Jquery.png';
import reactjs from './Pngicons/Reactjs.png';
import GitHub from './Pngicons/github.png';
import uiux from './Pngicons/ux-design.png';

const Skill = () => {
  return (
   <>
<section id="skills" className="bg-dark">
  <h2 className="underline text-white">Skills</h2>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={HTML} className="HTML" alt="Skill Image 1" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>HTML</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={CSS} className="css" alt="Skill Image 2" />    
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>CSS</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={Js} className="js" alt="Skill Image 3" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>Javascript</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={Bootstrap1} className="Bootstrap" alt="Skill Image 4" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>Bootstrap</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={Sass} className="sass" alt="Skill Image 5" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>Sass/Less</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={jquery} className="Jquery" alt="Skill Image 6" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>Jquery</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={reactjs} className="React js" alt="Skill Image 7" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>React js</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={GitHub} className="Github" alt="Skill Image 8" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>Git/GitHub</h3>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-5">
        <div className="card bg-dark">
          <div className="card-body">
            <div className='image-round'>
              <img src={uiux} className="UI/UX Design" alt="Skill Image 9" />
            </div>
            <h3 className='text-center text-white mt-3 fw-bold'>UI/UX</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   
   </>
  )
}

export default Skill

