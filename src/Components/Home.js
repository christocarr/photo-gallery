import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => (
	<Route path="/" exact render={() => (
		<div className="category-container">
			<Link to="/animals" className="category">
				<div className="home-image-container animal-img"></div>
				<h2 className="category-heading">Animals</h2>
			</Link>
			<Link to="/travel" className="category">
				<div className="home-image-container travel-img"></div>
				<h2 className="category-heading">Travel</h2>
			</Link>
			<Link to="/people" className="category">
			    <div className="home-image-container people-img"></div>
				<h2 className="category-heading">People</h2>
			</Link>
		</div>
	)} />
);  

export default Home;