import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: require('../images/cat1.jpg')
  }
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
        </div>
      )} />
    )
  }
}

export default Animals;
