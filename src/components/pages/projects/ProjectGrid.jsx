import React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'

function ProjectGrid (props) {
  return(
    <div className="align-items-center">
      <div className="mt-4 text-center">
      <a href={props.data.link}>
        <img
          src={props.data.image}
          alt={props.data.altText}
          className="Project-Img"
        />
      </a>
      </div>
      <div className="mt-4 text-center">
        <h6 className="mt-4 text-light bg-secondary Project-Text-Box">
          Project Title: {props.data.projectTitle}
        </h6>
        <h6 className="mt-4 text-light bg-secondary Project-Text-Box">
          Summary: {props.data.summary}
        </h6>
        <h6 className="mt-4 text-light bg-secondary Project-Text-Box">
          Tools Used: {props.data.tools}
        </h6>
        <h6 className="mt-4 bg-secondary Project-Text-Box">
          <a className="bg-secondary text-white" href={props.data.repo}>Project GitHub Repo Link</a>
        </h6>
      </div>
    </div>
  )
}

export default ProjectGrid;