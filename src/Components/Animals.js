import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

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
    src: require('../images/animals/koala.jpg'),
    width: 2,
    height: 1
  },
  {
    src: require('../images/animals/toucan.jpg'),
    width: 2,
    height: 1
  },
]

class Animals extends Component {

  state = {
    currentImage: 0
  }

  openLightbox = (ev, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  } 
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  
  render() {
    return (
      <Route path="/animals" render={() => (
        <div>
          <h2>Animals</h2>
          <Gallery 
            photos={PHOTO_SET} 
            onClick={this.openLightbox}
          />
          <Lightbox images={PHOTO_SET}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
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
