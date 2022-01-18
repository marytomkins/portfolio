import React, { Component } from 'react'
import { isMobile } from 'react-device-detect';
import me from '../images/me.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import github from '../images/github.png';
import resume from '../images/resume.png';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
    }

    render() {
        return (
            <div className="Main" id="Home">
                <div className="content">
                    <div className="about-content">
                        <img src={me} id="image"></img>
                        <div className="about-txt">
                            <h1>Hi, I'm Mary Tomkins</h1>
                            <h2>I am a software engineer, specializing in UI development, with a passion for graphic design.</h2>
                        </div>
                        {isMobile && (
                        <div className="contact-images">
                            <a href="https://drive.google.com/file/d/1QD6eYjCbpMllfMDfXSlDvzWfLPhVOSHl/view?usp=sharing" target="_blank">
                                <img src={resume} id="resume"></img>
                            </a>
                            <a href="mailto:maryctomkins@gmail.com" target="_blank">
                                <img src={email} id="email"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/mary-tomkins-90b37a174/" target="_blank">
                                <img src={linkedin}></img>
                            </a>
                            <a href="https://github.com/marytomkins" target="_blank">
                                <img src={github} id="git"></img>
                            </a>
                        </div>)}
                    </div>
                    {!isMobile && (
                        <div className="contact-images">
                            <a href="https://drive.google.com/file/d/1QD6eYjCbpMllfMDfXSlDvzWfLPhVOSHl/view?usp=sharing" target="_blank">
                                <img src={resume} id="resume"></img>
                            </a>
                            <a href="mailto:maryctomkins@gmail.com" target="_blank">
                                <img src={email} id="email"></img>
                            </a>
                            <a href="https://www.linkedin.com/in/mary-tomkins-90b37a174/" target="_blank">
                                <img src={linkedin}></img>
                            </a>
                            <a href="https://github.com/marytomkins" target="_blank">
                                <img src={github} id="git"></img>
                            </a>
                        </div>)}
                </div>
            </div>
        )
    }
}