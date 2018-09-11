import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
