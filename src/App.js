import './App.css';
// import { useState } from 'react';
// import Footer from './components/Footer';
// import Navigation from './components/Navigation';
// import Project from './components/pages/projects/Projects';

import Routing from "./components/Routing";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // const [showWhat, setShowWhat] = useState("About Me");

  const projectArray = [
    {
      image: require("./assets/images/group-project-1-screenshot.jpg"),
      altText: "A screenshot of a website titled Comparing Cities",
      projectTitle: "Comparing Cities",
      link: "https://ivabon.github.io/01-group-project/",
      repo: "https://github.com/IvaBon/01-group-project"
    },
    {
      image: require("./assets/images/group-project-2-screenshot.jpg"),
      altText: "A screenshot of a website titled Budgeteer. Link leads to GitHub repo",
      projectTitle: "Budgeteer",
      link: " https://group5-production-4da0.up.railway.app/",
      repo: " https://github.com/Glitch0320/group5"
    },
    {
      image: require("./assets/images/group-project-3-screenshot.jpg"),
      altText: "A screenshot of a website titled MACHDev",
      projectTitle: "MACHDev",
      link: "https://machdev.herokuapp.com/",
      repo: "https://github.com/AaronVenema/machdev"
    },
    {
      image: require("./assets/images/text-editor-site-screenshot.jpg"),
      altText: "A screenshot of a text editor called Just Another Text Editor",
      projectTitle: "J.A.T.E.",
      link: "https://texteditor-production.up.railway.app/",
      repo: "https://github.com/fortu038/Text_Editor"
    },
    {
      image: require("./assets/images/weather-dash.jpg"),
      altText: "A screenshot of a website called Weather Dashboard",
      projectTitle: "Weather Dashboard",
      link: "https://fortu038.github.io/06_weather_dashbaord/",
      repo: "https://github.com/fortu038/06_weather_dashbaord"
    },
    {
      image: require("./assets/images/team-profile-screenshot.jpg"),
      altText: "A screenshot of a program called My Team",
      projectTitle: "Team Profile Generator",
      link: "https://drive.google.com/file/d/1hZ1ZsIgX8NVvUTKcH3EjpBHytNCekkqG/view",
      repo: "https://github.com/fortu038/Team_Profile_Generator"
    },
    {
      image: require("./assets/images/insomnia-screenshot.jpg"),
      altText: "A screen of a post request to the poject in Insomnia",
      projectTitle: "Social Network API",
      link: "https://drive.google.com/file/d/1Yx1f296F3iEj-L96JOHRNNHGpQF5Bm3q/view",
      repo: "https://github.com/fortu038/Social_Network_API"
    }
  ]

  return (
    <Router>
      <Routing projectArray={projectArray}/>
    </Router>
  );
}

export default App;
