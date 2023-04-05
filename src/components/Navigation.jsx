import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Navigation (props) {
  return(
    <div className="bgSecondary">
      <Navbar sticky="top" collapseOnSelect expand="lg">
        <Container className="text-center">
          <Navbar.Brand>
            <h1>
              My Portfolio
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="flex-grow-1 justify-content-evenly align-items-center">
                <Nav.Link as={Link} to="/">
                  <h3 className="NavHoverLink">
                    About Me
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  <h3 className="NavHoverLink">
                    Projects
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="/contactme">
                  <h3 className="NavHoverLink">
                    Contact Me
                  </h3>
                </Nav.Link>
                <Nav.Link as={Link} to="/resume">
                  <h3 className="NavHoverLink">
                    Resume
                  </h3>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;