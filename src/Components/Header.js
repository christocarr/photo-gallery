import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MenuIcon from '../images/menu.svg';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <Link to="/" className="header-link">
        <h1>Chris Carr Photography</h1>
      </Link>
      <img
        src={MenuIcon}
        className="menu-icon"
        alt="menu icon"
        onClick={toggleMenu}
      />
      <Navigation menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      <nav className="large-nav">
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="nav-link">
              <Link to="/animals">Animals</Link>
            </li>
            <li className="nav-link">
              <Link to="/travel">Travel</Link>
            </li>
            <li className="nav-link">
              <Link to="/people">People</Link>
            </li> */}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
