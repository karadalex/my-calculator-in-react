import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Calculator from '../calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;
