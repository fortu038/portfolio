import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Navigation';
import Footer from '../../Footer';

function ContactMe () {
  return (
    <Container>
      <Navigation />
      <h2>Resume</h2>
      <h5>Languages: C++, C, Java, JavaScript, HTML, CSS, Python, OCaml</h5>
      <h5>Skills: React, Node.js, MySQL, MongoDB</h5>
      <a className="HoverLink" href={require("../../../assets/resume/CS-Resume.docx")}><h5>Download My Resume</h5></a>
      <Footer />
    </Container>
  )
};

export default ContactMe;