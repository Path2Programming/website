import React, { Component, useState } from 'react';
import './lesson-signup.scss'

function LessonSignup() {
  const [signedUp, signUp] = useState(false);
  const clickHandler = () => {
    signUp(true);
  };

  if (signedUp == false) {
    return (
      <div>
        <div id="form-div">
          <form id="sign-up-form">
            <h3 id="header">Sign up for upcoming lesson</h3>

            <input id="email" type="email" placeholder="Email Address" required></input>

            <input id="name" type="text" placeholder="Full Name" required></input>

            <input type="submit" value="submit" id="sign-up-button" onClick={clickHandler}></input>
          </form>
        </div>
      </div>
    )
  } else {
    return (<h1>THANK YOU FOR SUBMITTING</h1>)
  }




}

export default LessonSignup;
