import React from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import { animalPhotos } from '../images/animals/animals';

function Animals() {
  return (
    <Route
      path="/animals"
      render={() => (
        <div>
          <div className="gallery-container">
            <h2 className="gallery-heading">Animals</h2>
            <Gallery photos={animalPhotos} direction="row" />
          </div>
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
      )}
    />
  );
}

export default Animals;
