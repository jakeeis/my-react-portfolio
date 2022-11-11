import React from 'react';
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Style from "../Header/header.css";


function Header () {
  return (
    <div>
      <header>
        <h1>Dana Golebiewski</h1>
      </header>
      <ul>
            <li>
                <a href={About}>About Me</a>
            </li>
            <li>
                <a href={Project}>Projects</a>
            </li>
            <li>
                <a href={Contact}>Contact Me</a>
            </li>
        </ul>
    </div>
    
  )
}

export default Header;