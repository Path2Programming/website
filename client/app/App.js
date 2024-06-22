import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Homepage from '../homepage/Homepage';
// import About from '../about/About';
import Footer from '../footer/Footer';
import Acs from '../acs/AppCompSymposium';

import './App.scss';

class App extends Component {
  // This method returns a list of links we want in the navbar

  generateNavbarItems() {
    return ['Home', 'ACS'];
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
              {/* If the URL is exactly / render the Lesson Sign up component */}
              {/* Temporary: only for first cohort sign ups */}
              <Route exact path="/">
                <Homepage />
              </Route>

              {/* If the URL is /home render the Homepage component */}
              <Route path="/home">
                <Homepage />
              </Route>

              {/*If the URL is /ACS render the Acs component */}
              <Route path="/ACS">
                <Acs />
              </Route>

              {/* If the URL is /about render the Homepage component */}
              {/* <Route path="/about">
                <About />
              </Route> */}

              <Footer />
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
