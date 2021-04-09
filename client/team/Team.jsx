import React from 'react';

import './team.scss';

function Team() {
  return (
    <div>
      {/* <h1 id="header">Meet The Team</h1> */}

      <div id="members"></div>

      <div className="profile" id="Adi">
        <div className="pfp" id="adi-pfp"></div>
        <p>Aditya Gollamudi</p>
        <p id="title">Founder and Executive Director</p>

        <a href="https://www.linkedin.com/in/aditya-gollamudi/" target="_blank" rel="noreferrer">
          <input className="linkedIn" id="AdiLI" type="button"></input>
        </a>

        <a href="https://github.com/Adi-Goll" target="_blank" rel="noreferrer">
          <input className="GitHub" id="AdiGH" type="button"></input>
        </a>

        <a href="mailto:adigollamudi@gmail.com">
          <input className="gmail" id="adi-gmail" type="button"></input>
        </a>
      </div>

      <div className="profile" id="Arthi">
        <div className="pfp" id="arthi-pfp"></div>
        <p>Arthi Sundar</p>
        <p id="title">Growth and Marketing</p>

        <a href="mailto:Arthibot@gmail.com">
          <input className="gmail" id="arthi-gmail" type="button"></input>
        </a>
      </div>

      <div className="profile" id="Pranav">
        <div className="pfp" id="pranav-pfp"></div>
        <p>Pranav Gangumolu</p>
        <p id="title">Head of Logistics</p>

        <a href="https://www.instagram.com/theofficial_pranav/" target="_blank">
          <input className="instagram" id="pranav-instagram" type="button"></input>
        </a>

        <a href="mailto:pranavgangumolu@gmail.com">
          <input className="gmail" id="pranav-gmail" type="button"></input>
        </a>
      </div>
    </div>
  )
}

export default Team;
