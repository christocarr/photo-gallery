import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

class Animals extends Component {

 componentDidMount() {
  const PHOTO_SET = [
    {
      src: require('../images/cat1.jpg'),
    }
  ];
 }
  
  render() {
    return (
      <Route path="/animals" render={() => (
        <div>
          <Gallery photos={PHOTO_SET}/>
        </div>
      )} />
    )
  }
}

export default Animals;
