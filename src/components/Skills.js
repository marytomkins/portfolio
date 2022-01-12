import React, { Component } from 'react'
import coding from '../images/coding.png';
import software from '../images/software.png';


export default class Skills extends Component {
    render() {
        return (
            <div className="Main" id="Skills">
                <div className="content">
                    <div className="skills-content">
                        <img src={coding} id="image"></img>
                        <h1>Programming</h1>
                        <h2>Java, React.js, C, Python, SQL/MySQL, HTML, CSS, JavaScript, jQuery, JSON, PHP, XML, Matlab</h2>
                    </div>
                    <div className="skills-content" id="content2">
                        <img src={software} id="image"></img>
                        <h1>Software</h1>
                        <h2>Visual Studio Code, Eclipse, Git Bash, Gitlab, Invision, Windows, iOS/macOS, Android, Linux</h2>  
                    </div>
                </div>
            </div>
        )
    }
}