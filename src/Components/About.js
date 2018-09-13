import React from 'react';
import { Route } from 'react-router-dom';

const About = () => (
  <Route path="/about" render={() => (
    <div>
      <h2>About</h2>
    </div>
  )} />
);  

export default About;