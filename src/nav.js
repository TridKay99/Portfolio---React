import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import logo from './tridlogo.png'



function Nav() {



  return (
    <nav className="Nav">
      <div className="logo">
       <img className="logoimg" src={logo}/>
       </div>
      <div className="links">
        <ul className="navLinks">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link  to="/">
            <li>Home</li>
          </Link>
          <Link  to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
