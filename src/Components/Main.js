import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Home from './Home';
import Animals from './Animals';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Home}></Route>
		<Route exact path="/animals" component={Animals}></Route>
	</Switch>
)

export default Main;