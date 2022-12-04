import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Navigation (props) {
  return(
    // <div>
    //   <h1>{props.text}</h1>
    // </div>
    <Navbar collapseOnSelect expand="lg">
      <Container className="text-center">
      <Navbar.Brand><h1>My Portfolio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><h6 className="ChangeOnHover">About Me</h6></Nav.Link>
            <Nav.Link as={Link} to="/projects"><h6 className="ChangeOnHover">Projects</h6></Nav.Link>
            <Nav.Link as={Link} to="/contactme"><h6 className="ChangeOnHover">Contact Me</h6></Nav.Link>
            <Nav.Link as={Link} to="/resume"><h6 className="ChangeOnHover">Resume</h6></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;