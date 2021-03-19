import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Animals from './Animals';
import Travel from './Travel';
import People from './People';
import About from './About';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/animals" component={Animals}></Route>
        <Route path="/people" component={People}></Route>
        <Route path="/travel" component={Travel}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </main>
  );
}

export default Main;
