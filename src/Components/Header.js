import React from 'react';
import Navigation from './Navigation';
import MenuIcon from '../images/menu.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link to="/" exact className="header-link">
      <h1>Chris Carr Photography</h1>
    </Link>
    <img src={MenuIcon} className="menu-icon" alt="menu icon"/>
    <Navigation />
  </div>
);

export default Header;