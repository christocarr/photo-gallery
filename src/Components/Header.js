import React from 'react';
import Navigation from './Navigation';
import MenuIcon from '../images/menu.svg'

const Header = () => (
  <div className="header">
    <h1>Chris Carr Photography</h1>
    <img src={MenuIcon} height="25px" className="menu-icon" alt="menu icon"/>
    <Navigation />
  </div>
);

export default Header;