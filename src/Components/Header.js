import React, { Component } from 'react';
import Navigation from './Navigation';
import MenuIcon from '../images/menu.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  state = {
    menuIsOpen: false
  }

  render() {

    const toggleMenu = () => {
      if (this.state.menuIsOpen) {
        this.setState({menuIsOpen: false})
      } else {
        this.setState({menuIsOpen: true})
      }
    }

    return (
  
      <div className="header">
        <Link to="/" className="header-link">
          <h1>Chris Carr Photography</h1>
        </Link>
        <img src={MenuIcon} 
          className="menu-icon" 
          alt="menu icon"
          onClick={toggleMenu}
        />
        <Navigation 
          menuIsOpen={this.state.menuIsOpen}
        />
      </div>
    )
  }
}
