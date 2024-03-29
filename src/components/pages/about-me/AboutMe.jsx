import React from 'react';

import Navigation from '../../Navigation';
import Footer from '../../Footer';


function AboutMe () {
  return (
    <div className="bgStandard">
      <Navigation />

      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <h2>About Me</h2>
        <h5 className="text-center mt-4">
          My name is Conor Fortuna. I graduated in May 2022 from the University of Minnesota Twin Cities 
          with a major in chemistry and a minor in computer science. In December 2022 I completed a fullstack
          development course through the University of Minnesota. I have learned multiple programming
          languages, including JavaScript, Java, C++, Python, and C#. I have also learned multiple technical skills, such
          as Bootstrap, React, MySQL, and MongoDB.
        </h5>
      </div>

      <Footer />
    </div>
  )
};

export default AboutMe;