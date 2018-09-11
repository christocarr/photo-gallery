import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import Header from './components/Header';
import Footer from './components/Footer';

const PHOTO_SET = [
  {
    src: require('./images/cat1.jpg'),
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery photos={PHOTO_SET}/>
        <Footer />
      </div>
    );
  }
}

export default App;
