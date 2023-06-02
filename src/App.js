import './App.css';

import Routing from "./components/Routing";
import React from "react";
import { HashRouter as Router } from "react-router-dom";

function App() {
  const projectArray = [
    {
      image: require("./assets/images/group-project-1-screenshot.jpg"),
      altText: "A screenshot of a website titled Comparing Cities",
      projectTitle: "Comparing Cities",
      link: "https://fortu038.github.io/Comparing_Cities/",
      repo: "https://github.com/fortu038/Comparing_Cities",
      tools: "JQuery, APIs, Bootstrap",
      summary: "A website where you can enter up to three city names and compare stats on them"
    },
    {
      image: require("./assets/images/group-project-3-screenshot.jpg"),
      altText: "A screenshot of a website titled MACHDev",
      projectTitle: "MACHDev",
      link: "https://machdev.herokuapp.com/",
      repo: "https://github.com/fortu038/machdev",
      tools: "NPM, MongoDB, React, Bootstrap, BCrypt/DotENV, cookies, Node.js",
      summary: 'A website that acts as a generic company website to display skills in React and MongoDB. Use the email "email1@email.com" and the password "password" for employee login features'
    },
    {
      image: require("./assets/images/gopher-state-mechanical-screenshot.jpg"),
      altText: "A screenshot of a website called Gohper State Mechanical",
      projectTitle: "HVAC Company Website",
      link: "https://gopherstatemechanical.herokuapp.com/",
      repo: "https://github.com/fortu038/heating_and_vent_site",
      tools: "NPM, React, Node.js, MongoDB, React, Bootstrap, BCrypt/DotENV, cookies",
      summary: "A website for a company called Gopher State Mechanical. This project is currently a work in progress for a client so the link for the website, the layout of pages, and other features may change in the future."
    },
    {
      image: require("./assets/images/weather-dash.jpg"),
      altText: "A screenshot of a website called Weather Dashboard",
      projectTitle: "Weather Dashboard",
      link: "https://fortu038.github.io/Weather_Dashboard/",
      repo: "https://github.com/fortu038/Weather_Dashboard",
      tools: "APIs, Bootstrap",
      summary: "A website where one can search up a five day weather forecast for an entered city"
    },
    {
      image: require("./assets/images/team-profile-screenshot.jpg"),
      altText: "A screenshot of a program called My Team",
      projectTitle: "Team Profile Generator",
      link: "https://drive.google.com/file/d/1hZ1ZsIgX8NVvUTKcH3EjpBHytNCekkqG/view",
      repo: "https://github.com/fortu038/Team_Profile_Generator",
      tools: "NPM, Node.js",
      summary: "A program for creating a team profile"
    },
    {
      image: require("./assets/images/insomnia-screenshot.jpg"),
      altText: "A screen of a post request to the poject in Insomnia",
      projectTitle: "Social Network API",
      link: "https://drive.google.com/file/d/1Yx1f296F3iEj-L96JOHRNNHGpQF5Bm3q/view",
      repo: "https://github.com/fortu038/Social_Network_API",
      tools: "NPM, Node.js, MongoDB",
      summary: "A program that simulates the backend of a social network"
    }
  ]

  return (
    <Router>
      <Routing projectArray={projectArray}/>
    </Router>
  );
}

export default App;
