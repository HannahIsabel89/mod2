// src/About.js
import React from "react";

class About extends React.Component {
  render() {
    return (
      <>
        <h1>About this app.</h1>
        <div className="aboutDiv">
          <h2>Purpose of the app:</h2>
          <p>The goal of the application was to provive teachers with a tool they could use in class to brainstorm topics with students.  Once given the website, students can access with a comouter, tablet or phone to save their answers in the database.</p>
        </div>
        <p>To see more about the author click on the links below.</p>
        <div className="socials">
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-medium"></i>
        </div>
      </>
    );
  }
}

export default About;
