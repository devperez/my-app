import React from "react";
import Twitter from "../img/Twitter.png";
import Facebook from "../img/Facebook.png";
import Instagram from "../img/Instagram.png";
import Github from "../img/GitHub.png";

function Footer() {
    return (
        <div className="footer">
            <img className="icon" src={Twitter} alt="link to Laura's twitter" />
            <img className="icon" src={Facebook} alt="link to Laura's facebook" />
            <img className="icon" src={Instagram} alt="link to Laura's instagram" />
            <img className="icon" src={Github} alt="link to Laura's github" />
        </div>
    )
}

export default Footer