import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: require('../images/cat1.jpg')
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
        </div>
      )} />
    )
  }
}

export default Travel;