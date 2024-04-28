import React from "react";
import navbarStyles from "../Navbar/Navbar.module.css";

function Button({ text }){
    return <button className={navbarStyles.feedback}>{ text }</button>
}

export default Button;