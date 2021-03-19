import React from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import { travelPhotos } from '../images/travel/travel';
// import Lightbox from 'react-images';

function Travel() {
  // //when the a gallery mounts disable scroll on body
  // componentDidMount() {
  //   document.body.classList.remove('scroll');
  //   window.scrollTo(0, 0);
  // }
  // //when the a gallery unmounts enable scroll on body
  // componentWillUnmount() {
  //   document.body.classList.add('scroll');
  // }

  // openLightbox = (ev, obj) => {
  //   this.setState({
  //     currentImage: obj.index,
  //     lightboxIsOpen: true,
  //   });
  // }
  // closeLightbox = () => {
  //   this.setState({
  //     currentImage: 0,
  //     lightboxIsOpen: false,
  //   });
  // }
  // gotoPrevious = () => {
  //   this.setState({
  //     currentImage: this.state.currentImage - 1,
  //   });
  // }
  // gotoNext = () => {
  //   this.setState({
  //     currentImage: this.state.currentImage + 1,
  //   });
  // }
  return (
    <Route
      path="/travel"
      render={() => (
        <div>
          <div className="gallery-container">
            <h2 className="gallery-heading">Travel</h2>
            <Gallery
              photos={travelPhotos}
              // onClick={this.openLightbox}
              direction="row"
            />
            {/* <Lightbox images={PHOTO_SET}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            /> */}
          </div>
          <div className="bottom-nav">
            <Link to="/animals">
              <div className="animals">
                <h2>Animals</h2>
              </div>
            </Link>
            <Link to="/people">
              <div className="people">
                <h2>People</h2>
              </div>
            </Link>
          </div>
        </div>
      )}
    />
  );
}

export default Travel;
