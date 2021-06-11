import React, { useState } from 'react';
import { Redirect, Route } from 'react-router';
import './lesson-signup.scss'

function LessonSignup() {
  const clickHandler = (event) => {
    // event.preventDefault();
    alert('thank you for submitting!');
  };

  return (
    <div id="page">
      <div id="form-div">
        <h3 id="page-title">Lesson Signup</h3>
        <form
          id="sign-up-form"
          action="http://localhost:5000/signup"
          method="POST"
        >
          <select name="lesson" id="upcoming-lessons" className="item" >
            <option disabled selected value="">Upcoming Lessons</option>
            <option value="Q&A Session">06/15/2021 6:00pm EST - Q&A Session</option>
          </select>

          <input id="email" name="email" className="item" type="text" placeholder="Email Address"></input>


          <input id="name" name="fullName" className="item" type="text" placeholder="Full Name"></input>


          <input type="submit" value="Submit" id="sign-up-button" onClick={clickHandler}></input>
        </form>
      </div>
    </div>
  )

}

export default LessonSignup;
