import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Success is no accident. 
          It is hard work, perseverance, 
          learning, studying, sacrifice and most of all, 
          love of what you are doing or learning to do. Pele

        </p>
      </div>
    );
  }
}

export default App;
