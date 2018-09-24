import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render () {

    const menuVis = this.props.menuIsOpen ? 'show' : 'hide';

    return (
      <div className={`navigation ${menuVis}`}>
        <ul>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    )
  }
}

