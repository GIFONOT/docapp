import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <head>
        <title>Student Internship Resume Portal</title>
      </head>
      <body>
        <div class="content">
          <h2 className="home">Home</h2>
          <p>
            Welcome to our portal. Here you can submit your resume for
            internship opportunities.
          </p>

          <h2 className="submit-resume">Submit Resume</h2>
          <p>Fill out the form below to submit your resume.</p>

          <h2 className="account">Account</h2>
          <p>Log in to your account to view your submitted resumes.</p>
        </div>
      </body>
    </>
  );
}

export default Main;
