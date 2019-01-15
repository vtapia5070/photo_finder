import React, { Component } from 'react';
import TopNav from './Components/TopNav/TopNav';
import Search from './Search/Search';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import * as api from './api';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      request: {
        pending: false,
        success: false,
        failure: false,
      },
      searchResults: [],
    };
  }

  searchByQuery = (query) => {
    this.setState({
      request: {
        ...this.state.request,
        pending: true,
      },
      ...this.state
    });

    api.searchPhotosByQuery(query)
      .then(res => {
        this.setState({
          request: {
            success: true,
            pending: false,
            failure: false
          },
          searchResults: res.results,
        })
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
        <Search 
          handleSearch={this.searchByQuery} 
          isCollapsed={!!this.state.searchResults.length}
        />
        {
          this.state.searchResults.length > 0 && (
            <PhotoGrid photos={this.state.searchResults} />
          )
        }
      </div>
    );
  }
}

export default App;
