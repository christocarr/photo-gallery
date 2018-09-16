import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: require('../images/animals/cat1.jpg'),
    width: 3,
    height: 2
  },
  {
    src: require('../images/animals/baboon.jpg'),
    width: 3,
    height: 2
  },
  {
    src: require('../images/animals/cheetah.jpg'),
    width: 2,
    height: 1
  },
  {
    src: require('../images/animals/koala.jpg')
  },
  {
    src: require('../images/animals/toucan.jpg')
  },
]

class Animals extends Component {

  state = {

  }
  
  render() {
    return (
      <Route path="/animals" render={() => (
        <div>
          <h2>Animals</h2>
          <Gallery photos={PHOTO_SET}/>
          <div>
            <Link to="/travel">
              <div className="travel">
                <h2>Travel</h2>
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

export default Animals;
