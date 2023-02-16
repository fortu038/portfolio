import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Navigation';
import Footer from '../../Footer';

function ContactMe () {
  return (
    <Container>
      <Navigation />

      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>Contact Me</h2>
        <h5 className="text-center">My Primary Email: <a className="HoverLink" href="mailto:conorfortuna@gmail.com">conorfortuna@gmail.com</a></h5>
        <h5 className="text-center">My Secondary Email: <a className="HoverLink" href="mailto:fortu038@umn.edu">fortu038@umn.edu</a></h5>
        <h5 className="text-center">My Phone Number: <a className="HoverLink" href="tel:2183404672">218-340-4672</a></h5>
      </div>

      <Footer />
    </Container>
  )
};

export default ContactMe;