import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: require('../images/cat1.jpg')
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
        </div>
      )} />
    )
  }
}

export default People;