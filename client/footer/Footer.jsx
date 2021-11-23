import React, { Component } from 'react'
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* COLUMN 1 */}
                        <div className="col">
                            <ul className="list-unstyled">
                                <h4>Questions? Please contact:</h4>
                                <li>aditya@path2programming.com</li>
                                <li>502-775-9203</li>
                                <li>look on the website more</li>
                            </ul>
                        </div>
                        {/* COLUMN 2 */}
                        <div className="col">
                            <ul className="list-unstyled">
                                <h4>Column 2</h4>
                                <li>testing</li>
                                <li>i'm so good at this</li>
                                <li>item 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
