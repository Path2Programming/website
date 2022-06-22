import React, { Component } from 'react';
import './homepage.scss';
import Bridge from '../images/bridge-in-forest.jpg';

class Homepage extends Component {
  render() {
    return (
      <div>


        <div id="container">
          <div className='header' alt="White Flowers"></div>
          <div id="center-text">Revamping Tech Education in Kentucky</div>
        </div>

        <div>

          <iframe className="YouTube-video" width="560" height="315" src="https://www.youtube.com/embed/p0oxHoGjVWg"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2 id="tutorials">Tutorials</h2>
          <div id="vid-description">
            P2P offers a collection of programming tutorials for free on YouTube. The videos cover a
            variety of topics including Python and web development with more to come!
          </div>



        </div>
      </div>
    );
  }
}

export default Homepage;
