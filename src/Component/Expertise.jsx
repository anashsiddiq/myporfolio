import React from 'react';
import './Expertise.css'; // Create and import your custom CSS for additional styling

const Expertise = () => {
  return (

    <section id="Expertise" className="bg-dark Expertise">
      <h2 className="underline text-white mt-5">Expertise</h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-left text-white">
                  <h4>Responscive web Design</h4>
                  <p>Responsive web design is a crucial approach in modern web development that ensures websites and applications look and function well on a variety of devices and screen sizes. The goal is to provide an optimal viewing and interaction experience, from desktops to mobile phones.</p>
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-right text-white" id='expertise-margin'>
                  <h4>Testing and Debuging</h4>
                  <p>Testing and debugging are essential components of the web development process to ensure that your website or application functions correctly across different devices and browsers. Employing effective testing and debugging practices can help developers catch and fix issues early, leading to a smoother user experience.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-left text-white">
                  <h4>version control</h4>
                  <p>collaborate with team members, and maintain a history of modifications. Using a version control system (VCS) like Git can streamline the development process and ensure a more organized and efficient workflow..</p>
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-right text-white" id='expertise-margin'>
                  <h4>Framework</h4>
                  <p>Frameworks are essential tools in web development, providing structured and reusable code to streamline the development process. They help developers build robust, scalable, and maintainable applications more efficiently.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-left text-white">
                  <h4>Creativity</h4>
                  <p>Creativity in web development involves designing innovative, engaging, and functional websites and applications. It's about thinking outside the box to solve problems and create unique user experiences.</p>
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-right text-white" id='expertise-margin'>
                  <h4>Performance optimization</h4>
                  <p>Performance optimization in web development is essential for creating fast, efficient, and user-friendly websites and applications. Optimizing performance improves user experience, reduces bounce rates, and enhances SEO..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;