import React, { useState, forwardRef } from 'react';
import '../App.css';

const AboutSquare = forwardRef((props, ref) => {

    const [clicked, showMore] = useState(false)
    let {
        id,
        logoSrc,
        title,
        description,
        showMoreText,
        showLessText
    } = props;
    return (
        <div className="square" id={id} ref={ref} style={{ background: "#CEEEFF", color: "#356B89", border: "1px solid #356B89", boxShadow: "4px 4px 10px 0px rgba(53, 107, 137, 0.50)" }}>
            <div className="about-container">
                <div className="center-logo">
                    <img src={logoSrc} alt="logo" className="logo-pic"></img>
                </div>
                <div className="center-title">
                    {title}
                </div>
            </div>
        </div>
    );
});

export default AboutSquare;