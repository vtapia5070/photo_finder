import React, { Component } from 'react';
import TopNav from './Components/TopNav/TopNav';
import Search from './Search/Search';
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
          <TopNav />
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
