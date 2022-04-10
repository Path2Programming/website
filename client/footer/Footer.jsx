import React, { Component } from 'react'
import './footer.scss';
import '../images/logo.jpg';

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* COLUMN 1 */}
                        <div className="col">
                            <div id="logo"></div>
                        </div>
                        {/* COLUMN 2 */}
                        <div className="col">
                            <ul className="list-unstyled">
                                <li>Contact Us:</li>
                                <li>aditya@path2programming.com</li>
                                <li>502-775-9203</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer
