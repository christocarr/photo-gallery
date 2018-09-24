import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MenuIcon from '../images/menu.svg';

export default class Header extends Component {

  state = {
    menuIsOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }
  
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-link">
          <h1>Chris Carr Photography</h1>
        </Link>
        <img src={MenuIcon} 
          className="menu-icon" 
          alt="menu icon"
          onClick={this.toggleMenu}
        />
        <Navigation 
          menuIsOpen={this.state.menuIsOpen}
        />
      </div>
    )
  }
}
