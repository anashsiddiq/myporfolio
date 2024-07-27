import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonal.css'; // Make sure to import your custom CSS

const testimonials = [
  {
    quote: "Clients expect developers to have strong technical skills and up-to-date knowledge of programming languages, frameworks, and tools relevant to their projects",
    name: "John Doe",
    title: "CEO, Company"
  },
  {
    quote: "Clear and consistent communication is crucial. Clients appreciate developers who can explain complex technical concepts in simple terms and keep them informed about project progress..",
    name: "Jane Smith",
    title: "Developer, Tech Corp"
  },

  {
    quote: "Developers often work with other team members, including designers, project managers, and other developers. Good interpersonal skills and the ability to work well in a team are highly regarded.",
    name: "John Doe",
    title: "CEO, Company"
  },
  {
    quote: "It's important for developers to understand the client's business objectives and align their work to support these goals. Clients value developers who take a holistic view of the project and contribute to its success..",
    name: "Jane Smith",
    title: "Developer, Tech Corp"
  },
  // Add more testimonials as needed
];

function Testimonal() {
  return (
    <section id="testimonials" className="bg-dark p-5">
    <Container>
      <h2 className="underline text-center text-white mb-5">Testimonials</h2>
      <Carousel className='text-white'>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center text-white">
              <Col md={8} className="text-center">
                <p className="lead">{testimonial.quote}</p>
                <h5>{testimonial.name}</h5>
                <p className="text-muted">{testimonial.title}</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </section>
  );
}

export default Testimonal;
