import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Home from './Home';
import Animals from './Animals';
import Travel from './Travel';
import People from './People';
import Architecture from './Architecture';

const Main = () => (
	<Switch>
		<Route exact path="/" component={Home}></Route>
		<Route exact path="/animals" component={Animals}></Route>
		<Route exact path="/people" component={People}></Route>
		<Route exact path="/travel" component={Travel}></Route>
		<Route exact path="/architecture" component={Architecture}></Route>
	</Switch>
)

export default Main;