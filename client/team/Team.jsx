import React, { Component } from 'react';

import './team.scss';

function Team() {
  return (
    <div>
      <div className="profile" id="Adi">
        <div className="pfp"></div>
        <p>Aditya Gollamudi, Founder and Executive Director</p>
      </div>

      <div className="profile" id="Arthi">
        <div className="pfp"></div>
        <p>Arthi Sundar, Growth and Marketing</p>
      </div>

      <div className="profile" id="Pranav">
        <div className="pfp"></div>
        <p>Pranav Gangumolu, Head of Logistics</p>
      </div>
    </div>
  )
}

export default Team;
