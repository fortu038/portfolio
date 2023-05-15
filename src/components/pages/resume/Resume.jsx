import React from 'react';

import Navigation from '../../Navigation';
import Footer from '../../Footer';

function ContactMe () {
  return (
    <div className="bgStandard">
      <Navigation />

      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <h2>Resume</h2>
        <h5 className="text-center mt-4">
          Programming Languages: C++, C, Java, JavaScript, HTML, CSS, Python, OCaml, x86-64 Assembly
        </h5>
        <h5 className="text-center">
          Technical Skills: React, Node.js, MySQL, MongoDB, Microsoft Word, Microsoft Excel,
          Microsoft PowerPoint
        </h5>
        <a className="GeneralHoverLink" href={require("../../../assets/resume/Conor_Fortuna_Updated_Resume.docx")}>
          <h5 className="text-center GeneralHoverLink">Click Here to Download My Resume</h5>
        </a>
      </div>

      <Footer />
    </div>
  )
};

export default ContactMe;