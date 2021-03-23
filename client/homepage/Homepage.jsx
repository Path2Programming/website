import React, { Component } from 'react';
import './homepage.scss';
import comprIcon from '../images/measuring-tool.jpg';
import help from '../images/alt-help-icon.jpg';
import info from '../images/info-page.jpg';


class Homepage extends Component {
  render() {
    return (
      <div>
        <div id="welcome-banner">Welcome To EKY Coding!</div>

        <div className="program-glimpse" id="comprehensive">Comprehensive Lessons</div>
        <img src={comprIcon} id="compre-img" className="img" />

        <div className="program-glimpse" id="help">Easy Access To Help</div>
        <div></div>
        <img src={help} id="help-icon" className="img" />


        <div className="program-glimpse" id="curriculum">Immersive Curriculum</div>
        <div> </div>
        <img src={info} id="info-page" className="img" />


      </div>
    );
  }
}

export default Homepage;
