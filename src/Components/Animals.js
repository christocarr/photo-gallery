import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import { animalPhotos } from '../images/animals/animals';
import { Image, CloudinaryContext } from 'cloudinary-react';
// import Lightbox from 'react-images';

function Animals() {
  const [imagesArr, setImagesArr] = useState();

  const cloudName = 'dj8f8oujf';

  useEffect(async () => {
    const cloudName = 'dj8f8oujf';
    try {
      const res = await fetch(
        `https://res.cloudinary.com/${cloudName}/image/list/plants.json`
      );
      const data = await res.json();
      setImagesArr(data.resources);
    } catch (err) {
      console.error(err);
    }
    console.log(imagesArr[0].public_id);
  }, []);

  // //when the a gallery mounts disable scroll on body
  // componentDidMount() {
  //   document.body.classList.remove('scroll');
  //   window.scrollTo(0, 0);
  // }
  // //when the a gallery unmounts enable scroll on body
  // componentWillUnmount() {
  //   document.body.classList.add('scroll');
  // }

  // state = {
  //   currentImage: 0,
  // };

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
      path="/animals"
      render={() => (
        <div>
          <div className="gallery-container">
            <h2 className="gallery-heading">Animals</h2>
            <Gallery
              photos={animalPhotos}
              // onClick={this.openLightbox}
              direction="row"
            />
            <CloudinaryContext cloudName="dj8f8oujf">
              <Image publicId={imagesArr[0].public_id} />
            </CloudinaryContext>
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
