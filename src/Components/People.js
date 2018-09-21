import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: '../images/people/mel/pregnant1920.jpg',
    srcSet: [
      // 'images/people/mel/pregnant320 320w',
      // 'images/people/mel/pregnant640 640w',
      // 'images/people/mel/pregnant1180 1180w',
      // 'images/people/mel/pregnant1920 1920w',
    ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '0'
  }
]

class People extends Component {

  state = {

  }
  
  render() {
    return (
      <Route path="/people" render={() => (
        <div>
          <h2>People</h2>
          <Gallery photos={PHOTO_SET}/>
          <div>
            <Link to="/animals">
              <div className="animals">
                <h2>Travel</h2>
              </div>
            </Link>
            <Link to="/animals">
              <div className="animals">
                <h2>Animals</h2>
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

export default People;