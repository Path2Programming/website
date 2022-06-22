import React, { Component } from 'react'
import './footer.scss';
import '../images/logo.jpg';
import mail from '../images/footer-media-logos/mail.png';
import linkedin from '../images/footer-media-logos/linkedin.png';
import facebook from '../images/footer-media-logos/facebook.png';
import youtube from '../images/footer-media-logos/youtube.png';

{/* <ul className="list-unstyled">
                                <li>Contact Us:</li>
                                <li>aditya@path2programming.com</li>
                                <li>502-775-9203</li>
                            </ul> */}

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* COLUMN 1 */}
                        <div id="logo" className="col">
                            <div id="logo"></div>
                        </div>
                        {/* COLUMN 2 */}
                        <div id="pip-credit" className="col">
                            Photos Courtesy of <a href="https://parksinpicture.netlify.app/" target="_blank">Parks In Picture</a>
                        </div>
                        {/* COLUMN 3 */}
                        <div id="icon-col-flex">
                            <div id="icon-mail" className="row">
                                <a href="mailto:aditya@path2programming.com">
                                    <img className="icon" src={mail} alt="mail icon" />
                                </a>
                                <div>aditya@path2programming</div>
                            </div>
                            <div className="row">
                                <a href="https://www.linkedin.com/company/80497322/" target="_blank" >
                                    <img className="icon" src={linkedin} alt="linkedin icon" />
                                </a>
                                <a href="https://www.facebook.com/path2programming" target="_blank">
                                    <img className="icon" src={facebook} alt="facebook icon" />
                                </a>
                                <a href="youtube.com/channel/UC-bAIxpqhTpyHvkdCi1-_3g" target="_blank">
                                    <img className="icon" src={youtube} alt="youtube icon" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}

export default Footer
