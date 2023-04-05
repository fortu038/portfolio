import React from 'react';

import Navigation from '../../Navigation';
import Footer from '../../Footer';

function ContactMe () {
  return (
    <div className="bgStandard">
      <Navigation />

      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>Contact Me</h2>
        <h5 className="text-center">My Primary Email: <a className="GeneralHoverLink" href="mailto:conorfortuna@gmail.com">conorfortuna@gmail.com</a></h5>
        <h5 className="text-center">My Secondary Email: <a className="GeneralHoverLink" href="mailto:fortu038@umn.edu">fortu038@umn.edu</a></h5>
        <h5 className="text-center">My Phone Number: <a className="GeneralHoverLink" href="tel:2183404672">218-340-4672</a></h5>
      </div>

      <Footer />
    </div>
  )
};

export default ContactMe;