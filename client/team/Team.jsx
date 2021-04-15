import React from 'react';
// import AdiPfp from '../images/AdiPfp.jpeg';
// import PranavPfp from '../images/PranavPfp.jpeg';

import './team.scss';

function Team() {
  return (
    <>
      {/* <h1 id="header">Meet The Team</h1> */}

      <div id="members">
        <div className="cards">
          <div className="profile" id="Adi">
            <div className="pfp" id="adi-pfp"></div>
            {/* <img src={AdiPfp} className="pfp" /> */}
            <div className="text">
              <p className="name">Aditya Gollamudi</p>
              <p id="title">Founder and Executive Director</p>
            </div>

            <div className="icons">
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

          </div>

          <div className="profile" id="Pranav">
            <div className="pfp" id="pranav-pfp"></div>
            {/* <img src={PranavPfp} className="pfp" /> */}
            <div className="text">
              <p className="name">Pranav Gangumolu</p>
              <p id="title">Head of Logistics</p>
            </div>

            <div className="icons">
              <a href="https://www.instagram.com/theofficial_pranav/" target="_blank" rel="noreferrer">
                <input className="instagram" id="pranav-instagram" type="button"></input>
              </a>

              <a href="mailto:pranavgangumolu@gmail.com">
                <input className="gmail" id="pranav-gmail" type="button"></input>
              </a>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Team;
