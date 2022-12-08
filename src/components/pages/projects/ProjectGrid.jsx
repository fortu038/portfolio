import React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'

function ProjectGrid (props) {
  return(
    <div className="justify-content-evenly">
      <div className="mt-4 justify-content-center align-items-center">
      <a href={props.data.link}>
        <img
          src={props.data.image}
          alt={props.data.altText}
          className="Project-Img"
        />
      </a>
      </div>
      <div className="mt-4 justify-content-center">
        <h6 className="text-light bg-secondary">
          Project Title: {props.data.projectTitle}
        </h6>
      </div>
      <div className="mt-4 justify-content-center">
        <h6 className="text-light bg-secondary">
          Summary: {props.data.summary}
        </h6>
      </div>
      <div className="mt-4 justify-content-center">
        <h6 className="text-light bg-secondary">
          Tools Used: {props.data.tools}
        </h6>
      </div>
      <div className="mt-4 justify-content-center">
        <h6 className="bg-secondary">
          <a className="bg-secondary text-white" href={props.data.repo}>Project GitHub Repo Link</a>
        </h6>
      </div>
    </div>
  )
}

export default ProjectGrid;