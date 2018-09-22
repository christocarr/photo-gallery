import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  {
    src: require('../images/animals/coati/coati1920.jpg'),
    // srcSet: [
    // ],
    sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '0',
    alt: 'Coati climbing a palm tree'
  },
  {
    src: require('../images/animals/lizard/lizard1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 3.6,
    key: '1',
    alt: 'Sunbathing lizard'
  },
  {
    src: require('../images/animals/vulture/vulture1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 3,
    height: 4,
    key: '2',
    alt: 'Staring vulture'
  },  {
    src: require('../images/animals/rhino/rhino1920.jpg'),
    // srcSet: [
    // 
    // ],
    // sizes: ['(min-width: 480px) 50vw,(min-width:1024px) 33.3vw, 100vw'],
    width: 4,
    height: 3,
    key: '3',
    alt: 'Grazing rhino in Woburn Park'
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
        <div className="gallery-container">
          <h2>Animals</h2>
          <Gallery 
            photos={PHOTO_SET} 
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
          <div className="bottom-nav">
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

export default Animals;
