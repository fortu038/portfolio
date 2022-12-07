import React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'

function ProjectGrid (props) {
  return(
    // <Grid columns={3} divided className='justify-content-evenly'>
    //   {console.log(props)}
    //   <Grid.Column className="mt-4 justify-content-center align-items-center">
    //     <img
    //       href={props.data.link}
    //       src={props.data.image}
    //       alt={props.data.altText}
    //       className="Project-Img"
    //     />
    //   </Grid.Column>
    //   <Grid.Column className="mt-4 justify-content-evenly">
    //     <Segment
    //       className='d-flex m-4  text-center justify-content-evenly bg-secondary text-white'
    //     > 
    //       Project Title: {props.data.projectTitle}
    //     </Segment>
    //   </Grid.Column>
    //   <Grid.Column className="mt-4 justify-content-evenly">
    //     <Segment
    //       className='d-flex m-4  text-center justify-content-center bg-secondary text-white'
    //     >
    //       GitHub Repo Link: <a className='bg-secondary text-white ms-1' href={props.data.repo}>{props.data.repo}</a>
    //     </Segment>
    //   </Grid.Column>
    // </Grid>

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
        <h6 className="bg-secondary">
          <a className="bg-secondary text-white" href={props.data.repo}>Project GitHub Repo Link</a>
        </h6>
      </div>
    </div>
  )
}

export default ProjectGrid;