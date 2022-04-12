import React, { Component } from 'react';
import './homepage.scss';

class Homepage extends Component {
  render() {
    return (
      <div>
        <iframe className="YouTube-video" width="560" height="315" src="https://www.youtube.com/embed/pQ6UqbNJWjQ"
          title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; fullscreen" ></iframe>
      </div>
    );
  }
}

export default Homepage;
