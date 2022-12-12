import './App.css';

import Routing from "./components/Routing";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const projectArray = [
    {
      image: require("./assets/images/group-project-1-screenshot.jpg"),
      altText: "A screenshot of a website titled Comparing Cities",
      projectTitle: "Comparing Cities",
      link: "https://ivabon.github.io/01-group-project/",
      repo: "https://github.com/IvaBon/01-group-project",
      tools: "JQuery, APIs, Bootstrap",
      summary: "A website where you can enter up to three city names and compare stats on them"
    },
    // Issue with link mean this project cannot be shown
    // {
    //   image: require("./assets/images/group-project-2-screenshot.jpg"),
    //   altText: "A screenshot of a website titled Budgeteer. Link leads to GitHub repo",
    //   projectTitle: "Budgeteer",
    //   link: " https://group5-production-4da0.up.railway.app/",
    //   repo: " https://github.com/Glitch0320/group5",
    //   tools: "MySQL, Sequelize, Bootstrap",
    //   summary: "A website that allows you to create and manage your monthly budget"
    // },
    {
      image: require("./assets/images/group-project-3-screenshot.jpg"),
      altText: "A screenshot of a website titled MACHDev",
      projectTitle: "MACHDev",
      link: "https://machdev.herokuapp.com/",
      repo: "https://github.com/AaronVenema/machdev",
      tools: "NPM, MongoDB, React, Bootstrap, BCrypt/DotENV, cookies, Node.js",
      summary: 'A website that acts as a generic company website to display skills in React and MongoDB. Use the email "email1@email.com" and the password "password" for employee login features'
    },
    {
      image: require("./assets/images/text-editor-site-screenshot.jpg"),
      altText: "A screenshot of a text editor called Just Another Text Editor",
      projectTitle: "J.A.T.E.",
      link: "https://texteditor-production.up.railway.app/",
      repo: "https://github.com/fortu038/Text_Editor",
      tools: "NPM, React, Node.js",
      summary: "A text editor website that may be opened in either the browser or in its own window"
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
