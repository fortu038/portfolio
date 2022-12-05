import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Image, Segment } from 'semantic-ui-react';
import Navigation from '../../Navigation';
import Footer from '../../Footer';


function AboutMe () {
  return (
    <Container>

      <Navigation />

      <Segment className='flex-column d-flex justify-content-center' >
        <Header as='h2' icon textAlign='center'>
          <Header.Content>About Me</Header.Content>
        </Header>
        <Image src={require("../../../assets/images/profile-pic.jpg")} className="Header-img" centered/>
        <Header as='h5' icon textAlign='center'>
          <Header.Content>
            My name is Conor Fortuna. I graduated in May 2022 from the University of Minnesota Twin Cities 
            with a major in chemistry and a minor in computer science. I am currently taking a full stack 
            development bootcamp throught the University of Minnesota Twin Cities.
          </Header.Content>
        </Header>
      </Segment>

      <Footer />

    </Container>
  )
};

export default AboutMe;