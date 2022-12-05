import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

function ProjectGrid (props) {
  return(
    <Grid columns={3} divided className='justify-content-evenly'>
      {console.log(props)}
      <Grid.Column className="mt-4 justify-content-evenly">
        <img
          href={props.data.link}
          src={props.data.image}
          alt={props.data.altText}
          className="Project-Img"
        />
      </Grid.Column>
      <Grid.Column className="mt-4 justify-content-evenly">
        <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: ".8vw" }} > {props.data.projectTitle} </Segment>
      </Grid.Column>
      <Grid.Column className="mt-4 justify-content-evenly">
        <Segment className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white' style={{ fontSize: ".8vw" }}> {props.data.repo} </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default ProjectGrid;