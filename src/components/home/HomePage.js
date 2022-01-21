import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Built using React...</h1>
    <p>and hosted as a Static Web App on Azure with a CI/CD pipeline into a Github repo!</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
