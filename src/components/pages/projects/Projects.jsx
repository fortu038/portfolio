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
        <h1>Projects</h1>
        {console.log(props.projectArray)}
        {props.projectArray.map((data) =>{
            return <ProjectGrid data={data} key={data.projectTitle} />
          }
        )}
        <Footer />
      </Container>
  )
}

export default Projects;