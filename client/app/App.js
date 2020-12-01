import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Homepage from '../homepage/Homepage';
import About from '../about/About';
import WhyUs from '../why-us/WhyUs';
import LessonSignup from '../lesson-signup/LessonSignup';
import Team from '../team/Team';

import './App.scss';

class App extends Component {
  // This method returns a list of links we want in the navbar
  generateNavbarItems() {
    return ['Home', 'About', 'Why us', 'Sign up for a lesson', 'Meet the team'];
  }

  render() {
    return (
      // This is just a wrapper you need to put around your whole app in order to use React Router
      // Don't stress about it too much - not very important
      <Router>
        <div className="App">
          <Navbar items={this.generateNavbarItems()} />

          {/* Switch basically allows you to conditionally render various components
          based on the current URL. This is also a kind of wrapper, so don't
          stress too much over what it does */}
          <Switch>
            <div className="content">
              {/* If the URL is exactly / render the Homepage component */}
              <Route exact path="/">
                <Homepage />
              </Route>

              {/* If the URL is /home render the Homepage component */}
              <Route path="/home">
                <Homepage />
              </Route>

              {/* If the URL is /about render the Homepage component */}
              <Route path="/about">
                <About />
              </Route>

              {/* If the URL is /why-us render the Homepage component */}
              <Route path="/why-us">
                <WhyUs />
              </Route>

              {/* If the URL is /sign-up-for-a-lesson render the Homepage component */}
              <Route path="/sign-up-for-a-lesson">
                <LessonSignup />
              </Route>

              {/* If the URL is /meet-the-team render the Homepage component */}
              <Route path="/meet-the-team">
                <Team />
              </Route>
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
