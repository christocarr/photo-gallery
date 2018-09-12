import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => (
    <Route path="/" exact render={() => (
        <div>
            <Link to="/animals">
                <div className="animals">
                <h2>Animals</h2>
                </div>
            </Link>
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
            <Link to="/architecture">
                <div className="architecture">
                <h2>Architecture</h2>
                </div>
            </Link>
        </div>
    )} />
);  

export default Home;