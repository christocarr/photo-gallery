import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: require('../images/cat1.jpg'),
  }
];

const Animals = () => (
  <div>
    <Gallery photos={PHOTO_SET}/>
  </div>
)

export default Animals;