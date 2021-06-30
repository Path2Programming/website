import React, { useState } from 'react';
import './lesson-signup.scss'

function LessonSignup() {
  const [signedUp, signUp] = useState(false);
  const clickHandler = () => {
    signUp(true);
  };

  if (signedUp === false) {
    return (
      <div id="page">
        <div id="form-div">
          <h3 id="page-title">Lesson Signup</h3>
          <form id="sign-up-form">
            <select id="upcoming-lessons" className="item" name="upcoming-lessons">
              <option disabled selected value="">Upcoming Lessons</option>
              <option value="lesson1">04/5/2021 4:00pm EST - Why should I learn programming?</option>
              <option value="lesson2">04/10/2021 7:00am EST - What is a variable?</option>
              <option value="lesson3">04/15/2021 6:00pm EST - Introduction to the terminal</option>
            </select>

            <input id="email" className="item" type="text" placeholder="Email Address"></input>

            <input id="name" className="item" type="text" placeholder="Full Name"></input>

            <input type="submit" value="Submit" id="sign-up-button" onClick={clickHandler}></input>
          </form>
        </div>
      </div>
    )
  } else {
    return (<h1>THANK YOU FOR SUBMITTING</h1>)
  }

}

export default LessonSignup;
