import React from 'react';

import Navigation from '../../Navigation';
import Footer from '../../Footer';


function AboutMe () {
  return (
    <div className="bgStandard">
      <Navigation />

      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>About Me</h2>
        <img
          src={require("../../../assets/images/trimmed-new-pfp.jpg")}
          className="Profile-Picture"
          alt="Conor Fortuna"
        />
        <h5 className="text-center">
          My name is Conor Fortuna. I graduated in May 2022 from the University of Minnesota Twin Cities 
          with a major in chemistry and a minor in computer science. In December 2022 I completed a fullstack
          development course through the University of Minnesota. I have learned multiple programming
          languages, including JavaScript, Java, C++, and Python, and learned multiple technical skills, such
          as Bootstrap, React, MySQL, and MongoDB.
        </h5>
      </div>

      <Footer />
    </div>
  )
};

export default AboutMe;