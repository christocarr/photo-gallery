import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    // src: require('../images/')
  }
]

class Travel extends Component {

  state = {

  }
  
  render() {
    return (
      <Route path="/travel" render={() => (
        <div>
          <h2>Travel</h2>
          <Gallery photos={PHOTO_SET}/>
          <div>
            <Link to="/animals">
              <div className="animals">
                <h2>Animals</h2>
              </div>
            </Link>
            <Link to="/people">
              <div className="people">
                <h2>People</h2>
              </div>
            </Link>
            <Link to="/architecture">
              <div className="architecture">
                <h2>Architecture</h2>
              </div>
            </Link>
          </div>
        </div>
      )} />
    )
  }
}

export default Travel;