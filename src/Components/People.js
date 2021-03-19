import React from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import { peoplePhotos } from '../images/people/people';

function People() {
  return (
    <Route
      path="/people"
      render={() => (
        <div>
          <div className="gallery-container">
            <h2 className="gallery-heading">People</h2>
            <Gallery
              photos={peoplePhotos}
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
            <Link to="/travel">
              <div className="travel">
                <h2>Travel</h2>
              </div>
            </Link>
            <Link to="/animals">
              <div className="animals">
                <h2>Animals</h2>
              </div>
            </Link>
          </div>
        </div>
      )}
    />
  );
}

export default People;
