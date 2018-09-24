import React from 'react';
import { Route } from 'react-router-dom';

const About = () => (
  <Route path="/about" render={() => (
    <div className="gallery-container">
      <h2>About</h2>
      <p>Exercitation occaecat eu dolor duis duis mollit exercitation ullamco voluptate sint sit eu anim do. Occaecat dolor ad labore deserunt tempor minim ad ex cillum enim reprehenderit occaecat deserunt. Magna veniam ipsum dolore labore voluptate magna eu velit labore est. Sint magna labore aliqua ullamco anim irure enim nostrud in tempor exercitation aliquip. Fugiat sint anim qui esse velit aute mollit nulla sint non. Commodo quis nostrud velit reprehenderit culpa. Deserunt et nulla commodo mollit nisi reprehenderit irure tempor adipisicing do.</p>
      <p>Elit ipsum ea exercitation proident aute reprehenderit labore. Occaecat aute ea non adipisicing culpa duis ipsum esse. Laboris Lorem aliquip qui est ut eu mollit proident elit quis est. Dolor amet sint duis elit proident consequat laborum. Pariatur dolore qui Lorem ut.</p>
    </div>
  )} />
);  

export default About;