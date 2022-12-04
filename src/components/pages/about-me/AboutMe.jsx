import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Image, Segment } from 'semantic-ui-react';
import Navigation from '../../Navigation';
import Footer from '../../Footer';


function AboutMe () {
  return (
    <Container>

      <Navigation />

      <Segment className='justfiy-content-center' >
        <Header as='h2' icon textAlign='center'>
          <Header.Content>About Me</Header.Content>
        </Header>
        <Image src={require("../../../assets/images/profile-pic.jpg")} className="Header-img" centered/>
        <Header as='h4' icon textAlign='center'>
          <Header.Content>
            Hello, I'm Conor Fortuna.
          </Header.Content>
        </Header>
      </Segment>

      <Footer />

    </Container>
  )
};

export default AboutMe;