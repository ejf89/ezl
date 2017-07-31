import React from 'react';
import { Link  } from 'react-router-dom';

const NavBar = ({style, title}) => (
  <div>
    <nav className={`navbar navbar-fixed-top`}>
          <ul className="nav">
              <li><Link  className="nav-link" to="/studio">Studio</Link></li>
              <li><Link className="nav-link" to="/Label">Label</Link></li>
              <li><Link className="nav-link middle"  to="/Producers">Producers</Link></li>
              <li><Link className="nav-link" to="/Info">Info</Link></li>
              <li><Link className="nav-link" to="/Management">Management</Link></li>
          </ul>


    </nav>
  </div>
)

export default NavBar;
