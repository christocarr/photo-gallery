import React from 'react';
import { Route } from 'react-router-dom';

function About() {
  // //when the a gallery mounts disable scroll on body
  // componentDidMount() {
  //   document.body.classList.remove('scroll');
  //   window.scrollTo(0, 0);
  // }
  // //when the a gallery unmounts enable scroll on body
  // componentWillUnmount() {
  //   document.body.classList.add('scroll');
  // }

  return (
    <Route
      path="/about"
      render={() => (
        <div className="about-container">
          <h2>About Chris</h2>
          <p>
            Welcome to my photography portfolio. The photos shown in the
            galleries is the result of the passion I have for photography.
          </p>

          <p>
            This website isn't just about photography it's also about my journey
            becoming a web developer - a demonstration of the skills I learnt
            over the years. Being an aspiring front end web developer I thought
            it was the right time to spruce up my old photography site.{' '}
          </p>
          <p>
            I'm always looking for volunteering opportunities in photography and
            front end web development. So, get in touch if you would like to
            work with me.
          </p>
          <div className="icon-set">
            <a href="https://www.instagram.com/christocarrgrapher/">
              <img
                src={require('../images/ig-glyph-fill.png')}
                alt="instagram logo"
                width="60px"
                height="60px"
              ></img>
            </a>
            <a href="https://twitter.com/ChrisofCarr?lang=en">
              <img
                src={require('../images/twitter-logo.png')}
                alt="twitter logo"
                width="40px"
                height="40px"
              ></img>
            </a>
          </div>
        </div>
      )}
    />
  );
}
export default About;
