import React from 'react';

import './team.scss';

function Team() {
  return (
    <div>
      {/* <h1 id="header">Meet The Team</h1> */}

      <div id="members"></div>

      <div className="profile" id="Adi">
        <div className="pfp"></div>
        <p>Aditya Gollamudi</p>
        <p id="title">Founder and Executive Director</p>

        <a href="https://www.linkedin.com/in/aditya-gollamudi/" target="_blank" rel="noreferrer">
          <input className="linkedIn" id="AdiLI" type="button"></input>
        </a>

        <a href="https://github.com/Adi-Goll" target="_blank" rel="noreferrer">
          <input className="GitHub" id="AdiGH" type="button"></input>
        </a>
      </div>

      <div className="profile" id="Arthi">
        <div className="pfp"></div>
        <p>Arthi Sundar</p>
        <p id="title">Growth and Marketing</p>

        <a href="https://www.linkedin.com/in/aditya-gollamudi/" target="_blank" rel="noreferrer">
          <input className="linkedIn" id="AdiLI" type="button"></input>
        </a>

        <a href="https://github.com/Adi-Goll" target="_blank" rel="noreferrer">
          <input className="GitHub" id="AdiGH" type="button"></input>
        </a>
      </div>

      <div className="profile" id="Pranav">
        <div className="pfp"></div>
        <p>Pranav Gangumolu</p>
        <p id="title">Head of Logistics</p>

        <a href="https://www.linkedin.com/in/aditya-gollamudi/" target="_blank" rel="noreferrer">
          <input className="linkedIn" id="AdiLI" type="button"></input>
        </a>

        <a href="https://github.com/Adi-Goll" target="_blank" rel="noreferrer">
          <input className="GitHub" id="AdiGH" type="button"></input>
        </a>
      </div>
    </div>
  )
}

export default Team;
