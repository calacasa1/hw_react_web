import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>A site built using React and Redux</h1>
    <p>A Static Web App hosted on Azure with a CI/CD pipeline into a repo hosted on Github</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
