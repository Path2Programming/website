import React from 'react';
import './acs.scss';
import Agenda from '../images/ACSAgenda.jpeg';
import Flyer from '../images/P2PACSFlyer.jpeg';


function Acs() {
    return (
        <div>
            <img id="agenda" src={Agenda} />
            <img id="agenda" src={Flyer} />
            <iframe title="myForm" id="acs-google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdMq9gGGriUa_4yckAw9Jb7QKRmJ0BZNFzDkhF5AFkrv-uL3A/viewform?embedded=true">Loading…</iframe>

        </div>

    )

}


export default Acs;