import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  {
    src: require('../images/people/mel/pregnant1920.jpg'),
    // srcSet: [
    //   require('images/people/mel/pregnant320.jpg 320w'),
    //   '../images/people/mel/pregnant640.jpg 640w',
    //   '../images/people/mel/pregnant1180.jpg 1180w',
    //   '../images/people/mel/pregnant1920.jpg 1920w'
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '0'
  },
  {
    src: require('../images/people/ellie/ellie1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4.3,
    key: '1'
  },
  {
    src: require('../images/people/bee/bee1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 3,
    key: '1'
  },
]


class People extends Component {

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
      <Route path="/people" render={() => (
        <div className="gallery-container">
          <h2>People</h2>
          <Gallery photos={PHOTO_SET}
           onClick={this.openLightbox}
           direction='row'
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
          </div>
        </div>
      )} />
    )
  }
}

export default People;