import React, { Component } from 'react'
import unit from '../images/unit.JPG';
import photo from '../images/photo.JPG';
import auction from '../images/auction.JPG';

export default class Projects extends Component {
    render() {
        return (
            <div className="Main" id="Projects">
                <div className="content">
                    <div className="projects-content" id="unit">
                        <img src={unit} id="image"></img>
                        <h1>Unit Converter Website</h1>
                        <h2>Simple unit converter to convert length, weight, time, and temperature measurements.</h2>
                        <h3>(HTML, CSS, and Javascript/jQuery)</h3>
                    </div>
                    <div className="projects-content" id="photo">
                        <img src={photo} id="image"></img>
                        <h1>Photo Library Application</h1>
                        <h2>Android application that allows a user to create albums and upload, tag, and caption photos.</h2>
                        <h3>(Android Studio, Java and XML)</h3>
                    </div>
                    <div className="projects-content" id="auction">
                        <img src={auction} id="image"></img>
                        <h1>Online Auction Website</h1>
                        <h2>An online auction system where users could log in and buy and sell items.</h2>
                        <h3>(HTML, Java, SQL, and JavaServer Pages using Apache Tomcat, Eclipse, and MySQL Workbench)</h3>
                    </div>
                </div>
            </div>
        )
    }
}