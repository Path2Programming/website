import React from 'react';
import './lesson-signup.scss'

const axios = require('axios');


function LessonSignup() {
  const formSubmit = (event) => {
    const reqBody = {
      lesson: event.target.lesson.value,
      email: event.target.email.value,
      name: event.target.name.value,
    }

    alert("Thank you for submitting!");
    axios({
      method: 'post',
      url: '18.116.49.98:5000/signup',
      data: reqBody
    });

  }

  return (
    <div id="page">
      <div id="form-div">
        <h3 id="page-title">Lesson Signup</h3>
        <form
          id="sign-up-form"
          onSubmit={formSubmit}
        >
          <select name="lesson" id="upcoming-lessons" className="item" >
            <option disabled selected value="">Upcoming Lessons</option>
            <option value="First Cohort">07/07/2021- First Cohort</option>
          </select>

          <input id="email" name="email" className="item" type="text" placeholder="Email Address"></input>


          <input id="name" name="fullName" className="item" type="text" placeholder="Full Name"></input>


          <input type="submit" value="Submit" id="sign-up-button"></input>
        </form>
      </div>
    </div>
  )

}

export default LessonSignup;