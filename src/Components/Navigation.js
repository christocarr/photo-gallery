import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ menuIsOpen, toggleMenu }) {
  const menuVis = menuIsOpen ? 'show' : 'hide';

  return (
    <div className={`navigation ${menuVis}`} onClick={toggleMenu}>
      <ul>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/animals">Animals</Link>
        </li>
        <li className="nav-link">
          <Link to="/travel">Travel</Link>
        </li>
        <li className="nav-link">
          <Link to="/people">People</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
