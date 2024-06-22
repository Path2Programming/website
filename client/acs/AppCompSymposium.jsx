import React from 'react';
import './acs.scss';
import Agenda from '../files/CEDAR-AppalachianComputingSymposium-AGENDA.pdf';
import MTPic from '../images/MichaelTPic.jpeg';
import CbumPic from '../images/CodyBumgPic.jpeg';
import MWPic from '../images/WinstanleyPic.jpeg';
import HCGPic from '../images/HenryCGPic.jpeg';


function Acs() {
    const speakers = [
        {
            name: 'Michael Taylor',
            description: 'Instructor for the introductory computer science series at CMU. Awarded the Herbert A. Simon Award for Teaching Excellence in Computer Science. His work focuses on robotics with a strong background in electrical and computer engineering. (TOPIC: Robotics and how to engage in self-directed projects to learn about programming and computer science)',
            image: MTPic

        },
        {
            name: 'Melissa Winstanley',
            description: 'Lecturer in the Computer Science department, teaching upper-level courses such as Software Design for Data Scientists and Data Structures & Parallelism. Winstanley also worked as a Senior Software Engineer for Convoy, and currently works at Snowflake. (TOPIC:Working in industry, and understanding the possibilities with software design)',
            image: MWPic
        },
        {
            name: 'Cody Bumgardner',
            description: 'Assistant professor at the University of Kentucky. Research Areas: Networking, Systems, Cyber Security, Computational Biology, Bioinformatics, and Medical Imaging. (TOPIC: Applying artificial intelligence to medicine and exploring the intersection that computer science has with the medical industry)',
            image: CbumPic
        },
        {
            name: 'Henry Corrigan-Gibbs',
            description: 'Assistant Professor in the Massachusetts Institute of Technology`s Electrical Engineering and Computer Science department, specializing in computer security, cryptography, and computer systems. (TOPIC: Research in security and cryptography in computer systems)',
            image: HCGPic
        },
    ];
    return (
        <div>
            <h1 className="acstitle">Appalachian Computing Symposium</h1>
            <div id="info-container">
                <div id="what-is-acs-container">
                    <div id="spacer">
                        <h2 className="acs-sub-title">What is the ACS?</h2>
                    </div>
                    <p id='text'>This exciting initiative is a conference aimed at bridging the gap
                        between urban and rural computer science education! Organized by Adi Gollamudi in collaboration
                        with Bitsource and Cedar Inc., this event invites professors from around the country to spend a few days
                        in Eastern Kentucky, showcasing their work and passions with the youth and educators of Eastern Kentucky
                        from local high schools and community colleges. Our goals are to: Inspire students with cutting-edge research
                        and CS career opportunities, foster connections between academia and rural communities and
                        contribute to the advancement of STEM education in Appalachia.</p>
                </div>

                <div id="speaker-container">
                    <h2 className="acs-sub-title">Speakers</h2>
                    {speakers.map((speaker, index) => (
                        <div key={index} className="speaker">

                            <div className="speaker-info">
                                <h3 className="speaker-name">{speaker.name}</h3>
                                <p className="speaker-description">{speaker.description}</p>
                            </div>
                            <div className="speaker-image-div">
                                <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                            </div>
                        </div>
                    ))}
                </div>
                <a id="download-button" href={Agenda} download="ACSAgenda">Download the agenda for the event by clicking here! Register below</a>
            </div>
            <iframe title="myForm" id="acs-google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdMq9gGGriUa_4yckAw9Jb7QKRmJ0BZNFzDkhF5AFkrv-uL3A/viewform?embedded=true">Loading…</iframe>

        </div>

    )

}


export default Acs;