import React, { Component } from 'react'
import rutgers from '../images/rutgers.png';

export default class Academics extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }

    render() {
        return (
            <div className="Main" id="Academics">
                <div className="content">
                    <div className="about-content">
                        <img src={rutgers} id="image"></img>
                        <div className="about-txt">
                            <h1>Rutgers University</h1>
                            <h2>May 2020</h2>
                            <h2>Bachelor of Science, Computer Science</h2>
                            <h3>Relevant Coursework: Data Structures, Computer Architecture, Software Engineering, Internet Technologies, Systems Programming, Computer Algorithms, Database Management, Design of Operating Systems</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}