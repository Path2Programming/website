import React, { Component } from 'react';

import './team.scss';

function Team() {
  return (
    <div>
      <div className="profile" id="Adi">
        {/* <img src="../images/tempProfilePic.png" id="Adipfp"></img> */}
        <input className="pfp" type="button"></input>
        <p>Aditya Gollamudi, Founder and Executive Director</p>
      </div>

      <div className="profile" id="Arthi">
        {/* <img src="../images/tempProfilePic.png" className="pfp"></img> */}
        <input className="pfp" type="button"></input>
        <p>Arthi</p>
      </div>

      <div className="profile" id="Pranav">
        {/* <img src="../images/tempProfilePic.png" className="pfp"></img> */}
        <input className="pfp" type="button"></input>
        <p>Pranav</p>
      </div>
    </div>
  )
}

export default Team;
