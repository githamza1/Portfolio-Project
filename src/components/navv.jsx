import React, {useState} from "react";
import { Link, NavLink } from 'react-router-dom'

import "../styles.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav>
      <ul className="submenu" id="submenu">
        <li><NavLink to="/" className="submenu-item">Startsida</NavLink></li>
        <li><NavLink to="/cv" className="submenu-item">CV</NavLink></li>
        <li className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
      >
        <NavLink to="/projects" className="submenu-item">Project</NavLink>
        {dropdown && (
          <ul className="dropdown-menu"> 
            <li><NavLink to="/projects" className="submenu-item">Projects</NavLink></li>
            <li><NavLink to="/portfolie" className="submenu-item">Portfolio</NavLink></li>
          </ul>
        )}
      </li>
        <li><NavLink to="/about" className="submenu-item">About me</NavLink></li>
        <li><NavLink to="/contact" className="submenu-item">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;