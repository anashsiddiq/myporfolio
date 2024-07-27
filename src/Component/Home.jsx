// src/components/Home.js
import React from 'react';
import {Typewriter} from 'react-simple-typewriter';
import './Home.css';
import Anash from './Image/Anash siddiqui.jpg'

const Home = () => {
  return (
    <section id="home" className="home d-flex align-items-center bg-dark py-5">
      <div className="containe mt-5">
        <div className="row">
          <div className="col-md-6 text-content d-flex flex-column justify-content-center">
            <h2 className="text-center text-white text-md-start mb-3">
              Hello,
            </h2>
            <h1 className="text-center text-white text-md-start mb-3" style={{ fontWeight: 'normal' }}>
              I am Anash{' '}
              <span style={{ color: 'Orange', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Front End Developer', 'React Developer', 'UI/UX Designer']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-center text-white text-md-start">
              I'm a passionate web developer with a knack for creating dynamic and beautiful web pages. Let's build something amazing together!
            </p>
          </div>
          <div className="col-md-6 image-content d-flex justify-content-center">
            <div className="home-image">
              <img src={Anash} alt="Anash Siddiqui" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
