import React, { Component } from 'react';
import logo from './logo.svg';
import * as api from './api';

import './App.css';

class App extends Component {
  componentDidMount () {
    api.searchPhotosByQuery('trees')
    .then(res => {
      console.log('res:', res);
    })
    .catch(err => {
      console.log('error:', err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
