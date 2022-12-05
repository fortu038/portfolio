import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AboutMe from "./pages/about-me/AboutMe";
import Projects from "./pages/projects/Projects";
import ContactMe from "./pages/contact-me/ContactMe";
import Resume from "./pages/resume/Resume";

function Routing(props) {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/projects" element={<Projects projectArray={props.projectArray} />} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
}

export default Routing;