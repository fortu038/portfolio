import React from "react";
import { Container } from "react-bootstrap";
import ProjectGrid from "./ProjectGrid";
import Navigation from "../../Navigation";
import Footer from "../../Footer";

function Projects (props) {
  return( 
      // <div className="Project-container">
      //   <a href={props.link}>
      //     <img
      //       className="Project-img"
      //       src={props.image}
      //       alt={props.altText}
      //     />
      //     <div className="Project-overlay">
      //       <h5>{props.projectTitle}</h5>
      //       <a href={props.repo}>
      //         <img
      //           className="Project-github-img"
      //           src={require("../assets/images/GitHub-Mark-64px.png")}
      //           alt="The logo for GitHub. Clicking on it will redirect to the Github repo of this project."
      //         />
      //       </a>
      //     </div>
      //   </a>
      // </div>
      <Container>
        <Navigation />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2>Projects</h2>
          <h4>
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
      </Container>
  )
}

export default Projects;