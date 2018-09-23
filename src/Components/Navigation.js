import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  render () {

    const menuIsOpen = this.props;

    return (
      <div>   
        {menuIsOpen ? (
          <div className="menu-open">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="menu-closed">

          </div>
        )}
      </div>
    )
  }
}

