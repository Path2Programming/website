import React from 'react';
import './acs.scss';
import Agenda from '../files/CEDAR-AppalachianComputingSymposium-AGENDA.pdf';


function Acs() {
    return (
        <div>
            <h1 className="acstitle">Appalachian Computing Symposium</h1>
            <div id="info-container">
                <div id="what-is-acs-container">
                    <div id="spacer">
                        <h2 className="acs-sub-title" id="what-acs-title">What is the ACS?</h2>
                    </div>
                    <p id='text'>This exciting initiative is a conference aimed at bridging the gap
                        between urban and rural computer science education! Organized by Adi Gollamudi in collaboration
                        with Bitsource and Cedar Inc., this event invites professors from around the country to spend a few days
                        in Eastern Kentucky, showcasing their work and passions with the youth and educators of Eastern Kentucky
                        from local high schools and community colleges.</p>
                </div>

                <div id="speaker-container">
                    <h2 className="acs-sub-title">Speakers</h2>
                </div>

                {/* <a id="download-button" href={Agenda} download="ACSAgenda">Download the agenda for the event here!</a> */}
            </div>
            <iframe title="myForm" id="acs-google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdMq9gGGriUa_4yckAw9Jb7QKRmJ0BZNFzDkhF5AFkrv-uL3A/viewform?embedded=true">Loading…</iframe>

        </div>

    )

}


export default Acs;