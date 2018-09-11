import React from 'react';
import Animals from './Animals';

const Home = () => (
  <div className="home-page">
    <div className="animals">
      <h2>Animals</h2>
      <Animals />
    </div>
    <div className="travel">
      <h2>Travel</h2>
    </div>
    <div className="people">
      <h2>People</h2>
    </div>
    <div className="architecture">
      <h2>Architecture</h2>
    </div>
  </div>
)

export default Home;