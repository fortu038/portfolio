import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../Navigation';
import Footer from '../../Footer';

function ContactMe () {
  return (
    <Container>
      <Navigation />

      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>Resume</h2>
        <h5>
          Programming Languages: C++, C, Java, JavaScript, HTML, CSS, Python, OCaml, x86-64 Assembly
        </h5>
        <h5>
          Technical Skills: React, Node.js, MySQL, MongoDB, Microsoft Word, Microsoft Excel,
          Microsoft PowerPoint
        </h5>
        <a className="HoverLink" href={require("../../../assets/resume/CS-Resume.docx")}>
          <h5>Click Here to Download My Resume</h5>
        </a>
      </div>

      <Footer />
    </Container>
  )
};

export default ContactMe;