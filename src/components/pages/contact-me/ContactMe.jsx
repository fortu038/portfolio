import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Navigation';
import Footer from '../../Footer';

function ContactMe () {
  return (
    <Container>
      <Navigation />
        <h1>Contact Me</h1>
        <h6>Note: The below contact form is currently not functional</h6>
        <form>
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br />
          <label for="email">Email:</label><br />
          <input type="text" id="email" name="email" /><br />
          <label for="message">Message:</label><br />
          <input type="text" id="message" name="message" /><br />
          <button type="button">Submit</button>
        </form>
        <h5>My Primary Email: <a className="HoverLink" href="mailto:conorfortuna@gmail.com">conorfortuna@gmail.com</a></h5>
        <h5>My Secondary Email: <a className="HoverLink" href="mailto:fortu038@umn.edu">fortu038@umn.edu</a></h5>
        <h5>My Phone Number &#40;Placeholder&#41;: 123-456-7890</h5>
      <Footer />
    </Container>
  )
};

export default ContactMe;