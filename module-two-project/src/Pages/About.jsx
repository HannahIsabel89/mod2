// src/About.js
import React from "react";

class About extends React.Component {
  render() {
    return (
      <>
        <h1>About this app.</h1>
        <div className="aboutDiv">
          <h2>Purpose of the app:</h2>
          <p>
            The goal of the application was to provide teachers with a
            brainstorming tool to use in class. The website would be projected
            onto a smartboard, students can then access with a computer, tablet
            or phone to save their answers in the database.
          </p>
        </div>
        <p>To see more about the author click on the links below.</p>
        <div className="socials">
          <a href="https://github.com/HannahIsabel89" class="fa fa-github"></a>
          <a href="https://www.linkedin.com/in/hannah-isabel-woodward" class="fab fa-linkedin-in"></a>
          <a href="https://hannahisabelwoodward.medium.com" class="fa fa-medium"></a>
        </div>
      </>
    );
  }
}

export default About;
