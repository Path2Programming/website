import React, { useState } from 'react';
import './lesson-signup.scss'


function LessonSignup() {
  const [hasSignedUp, signUp] = useState(false);

  const [info, setInfo] = useState({
    lesson: '',
    email: '',
    name: '',
  });

  let handleChange = (participantData) => {
    let property = participantData.target.name;
    let value = participantData.target.value;
    info[property] = value;
    console.log(info);
    setInfo(info);
  };

  let handleSubmit = () => {
    signUp(true);
  };

  if (hasSignedUp === false) {
    return (
      <div id="page">
        <div id="form-div">
          <h3 id="page-title">Lesson Signup</h3>
          {/* onSubmit={handleSubmit} */}
          <form id="sign-up-form" name="signedUp" action='http://localhost:5000/' method="POST">

            <select id="upcoming-lessons" className="item" name="lesson" onChange={handleChange} required>
              <option disable selected value="" required>Upcoming Lessons</option>
              <option value="lesson1">04/5/2021 4:00pm EST - Why should I learn programming?</option>
              <option value="lesson2">04/10/2021 7:00am EST - What is a variable?</option>
              <option value="lesson3">04/15/2021 6:00pm EST - Introduction to the terminal</option>
            </select>

            <input id="email" className="item" type="text" name="email" placeholder="Email Address" onChange={handleChange} required></input>

            <input id="name" className="item" name="name" type="text" placeholder="Full Name" onChange={handleChange} required></input>

            <input type="submit" value="Submit" id="sign-up-button"></input>

          </form>
        </div>
      </div>
    )
  } else {
    return (<h1>THANK YOU FOR SUBMITTING</h1>)
  }

}

export default LessonSignup;
