import React from "react";
import picture from "../img/picture.png";
import button from "../img/Button.png";
import button2 from "../img/Button2.png";
import '../index.css';

function Info() {
    return (
        <div className="info">
            <img className="picture" src={picture} alt="Laura's profile pic"/>
            <h1 className="name">Laura Smith</h1>
            <h4 className="job">Frontend Developer</h4>
            <small className="website">laurasmith.website</small>
            <img className="mailbutton" src={button} alt="Button to send an email to Laura" />
            <img className="mailbutton2"src={button2} alt="Button to go to Laura's LinkedIn profile" />
        </div>
    )
}

export default Info