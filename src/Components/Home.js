import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => (
	<Route path="/" exact render={() => (
		<div className="category-container">
			<Link to="/animals" className="animals category">
				<h2>Animals</h2>
			</Link>
			<Link to="/travel" className="category">
				<div className="travel">
					<h2>Travel</h2>
				</div>
			</Link>
			<Link to="/people" className="category">
				<div className="people">
					<h2>People</h2>
				</div>
			</Link>
		</div>
	)} />
);  

export default Home;