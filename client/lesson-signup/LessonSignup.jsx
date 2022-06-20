import React from 'react';
import './lesson-signup.scss'


function LessonSignup() {

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
            <option value="First Cohort">07/07/2021- First Cohort</option>
          </select>

          <input id="email" name="email" className="item" type="text" placeholder="Email Address"></input>


          <input id="name" name="name" className="item" type="text" placeholder="Full Name"></input>


          <input type="submit" value="Submit" id="sign-up-button"></input>
        </form>
      </div>
    </div>
  )

}

export default LessonSignup;