import React, { Component } from 'react';
import './about.scss';

class About extends Component {
  render() {
    return (
      <div>
        <div id="about-banner">About Us</div>
        <div id="mission-header">Mission</div>
        <p id="mission-statement"></p>
      </div>
    );
  }
}

export default About;
