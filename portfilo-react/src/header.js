import React from "react";
import Mypicture from "./images/picture.jpeg";

export const Header = () => {
 return (
    <div className="header-container">
        <img src={Mypicture} alt="my picture"/>
        <h1>Suraj Kumar Manna</h1>
        <div className="contact-details">
           <b>surajkumarmanna2000@gmail.com</b>
           <br/>
           <span>Ph no.-9093651940</span>
        </div>
    </div>
 );
};
