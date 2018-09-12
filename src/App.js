import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="animals">
          <h2>Animals</h2>
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
        <Footer />
      </div>
    );
  }
}

export default App;
