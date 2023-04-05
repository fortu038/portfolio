import React from "react";

import ProjectGrid from "./ProjectGrid";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

function Projects (props) {
  return( 
      <div className="bgStandard">
        <Navigation />

        <div className="d-flex flex-column align-items-center">
          <h2>Projects</h2>
          <h4 className="text-center">
            Click on a project's image to go to either that project's site or to see a video of it in
            in action!
          </h4>
          {console.log(props.projectArray)}
          {props.projectArray.map((data) =>{
              return <ProjectGrid data={data} key={data.projectTitle} />
            }
          )}
        </div>
        
        <Footer />
      </div>
  )
}

export default Projects;