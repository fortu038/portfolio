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
        <h6>Note: The below contact form is currently not functional</h6>
        <form>
          <label for="name">Your Name:</label><br />
          <input type="text" id="name" name="name" /><br />
          <label for="email">Your Email:</label><br />
          <input type="text" id="email" name="email" /><br />
          <label for="message">Your Message:</label><br />
          <input type="text" id="message" name="message" /><br />
          <button type="button">Submit</button>
        </form>
        <h5>My Primary Email: <a className="HoverLink" href="mailto:conorfortuna@gmail.com">conorfortuna@gmail.com</a></h5>
        <h5>My Secondary Email: <a className="HoverLink" href="mailto:fortu038@umn.edu">fortu038@umn.edu</a></h5>
        <h5>My Phone Number: <a className="HoverLink" href="tel:2183404672">218-340-4672</a></h5>
      </div>

      <Footer />
    </Container>
  )
};

export default ContactMe;