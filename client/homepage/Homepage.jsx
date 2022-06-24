import React, { Component } from 'react';
import './homepage.scss';
import soar from '../images/soar.webp';
import awesomeinc from '../images/awesomeinc.jpeg';
import interapt from '../images/interapt.png';
import EKCEP from '../images/EKCEP.png';

class Homepage extends Component {
  render() {
    return (
      <div>


        <div id="container">
          <div className='header' alt="White Flowers"></div>
          <div id="center-text">Revamping Tech Education in Kentucky</div>
        </div>

        <div className="mission">
          <h2 className="title">What is Path2Programming?</h2>
          <div id="mission-description">We are an initiative dedicated to improving tech education in Kentucky. Currently, inequitable resource distribution and a lack of tech educators have left parts of the state without an opportunity to join the world of coding. It is our goal to change that. </div>
        </div>


        <div>

          <iframe className="YouTube-video" src="https://www.youtube.com/embed/p0oxHoGjVWg"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2 className="title" id="tutorials">Tutorials</h2>
          <div className="description">
            P2P offers a collection of programming tutorials for free on YouTube. The videos cover a
            variety of topics including Python and web development with more to come!
          </div>

        </div>

        <div>
          <div className='title' id="indiv-lessons">Individual Lessons</div>
          <div className="description">In addition to tutorials that you can follow at your own pace, we help participants on
            an individual basis in order to suit their needs. This includes, personalized videos and content,
            as well as 1 on 1 calls.</div>
        </div>

        <div>
          <div id="partners" className='title'>P2P Partners and Supporters</div>
          <div className="logo-strip" id="scroll">
            <img src={soar} alt="soar company logo" />
            <img id="awesome" src={awesomeinc} alt="awesomeinc company logo" />
            <img id="ekcep" src={EKCEP} alt="EKCEP company logo" />
            <img id="interapt" src={interapt} alt="interapt company logo" />
          </div>

        </div>
      </div>
    );
  }
}

export default Homepage;
