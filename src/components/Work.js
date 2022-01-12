import React, { Component } from 'react'
import fpa from '../images/fpa.png';
import vz from '../images/vz.png';
import { isMobile, isTablet } from 'react-device-detect';

export default class Work extends Component {
    render() {
        return (
            <div className="Main" id="Work">
                <div className="content">
                    <div className="work-content">
                        <img src={vz} id="image"></img>
                        <h1>Verizon, Piscataway, NJ</h1>
                        <h2>January 2021 - Present</h2>
                        <h3><i>UI/UX Developer</i></h3>
                        <ul>
                            <li>Fixing and providing solutions for user interface defects to improve the development of the website/application using React.js.</li>
                            <li>Assisting in regression testing and promoting bug fixes for each enterprise release to production website.</li>
                            <li>Identifying ways to advance and better the interface design using InVision.</li>
                            <li>Mentoring new hires, helping set up their local code repositories, and providing documentation to assist in
achieving UI goals.</li>
                            <li>Worked on 8 projects, 5 of which as UI lead (Confirmation page reconfiguration, PS5 launch, Esim Activation, Paypal Authentication, and 3dSecure).</li>
                        </ul>
                    </div>
                    {/* {isMobile && !isTablet && (<hr size="1" width="90%" color="#0d4db9"></hr>)} */}
                    <div className="work-content" id="content2">
                        <img src={fpa} id="image"></img>
                        <h1>French and Parrello Associates, Wall, NJ</h1>
                        <h2>June 2019 - August 2019</h2>
                        <h3><i>Technology Intern</i></h3>
                        <ul>
                            <li>Created and installed operating system images to restore computers and install Windows 10.</li>
                            <li>Installed and configured new software (Microsoft Office 365, Google Workspace/G Suite, Adobe, Autodesk,
AutoCAD).</li>
                            <li>Troubleshooted and effectively solved hardware and software problems with quick solutions, while researching,
analyzing, and documenting results.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}