import React from 'react';
import '../App.css';

const Footer = (props) => {

    let {
        text
    } = props;
    return (
        <div className="footer">
            {text}
        </div>
    );
}

export default Footer;