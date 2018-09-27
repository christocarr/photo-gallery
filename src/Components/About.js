import React from 'react';
import { Route } from 'react-router-dom';

const About = () => (
  <Route path="/about" render={() => (
    <div className="about-container">
      <h2>About</h2>
      <p>The photos shown on this website is the result of the passion I have for photography,  and travelling I did over the past decade or so. Born and raised in South Africa I came to the UK looking for better opportunities and a better quality of life. Long story short I worked, saved my hard earned money and did some travelling for a few years.</p>
      <p>I tried to start a photography business doing, portraits for individuals and groups like family but found the market very saturated and it was tough getting it off the ground.  To showcase  my work I built my first website www.christophercarrphotography.co.uk being the first website i built is was not and easy process but it was very enjoyable. Seeing the finished product gave me huge sense of achievement.</p>
      <p>This new website isn't just about photography but also of web development - a demonstration of the skills I learnt over the years. Being a self taught front end web developer </p>
    </div>
  )} />
);  

export default About;