import React, { Component } from 'react';
import TopNav from './Components/TopNav/TopNav';
import Search from './Search/Search';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import Pagination from './Pagination/Pagination';
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
      currentPage: 1,
      currentQuery: '',
      searchResults: [],
      totalPages: 0
    };
  }

  searchByQuery = (query, page = this.state.currentPage) => {
    this.setState({
      request: {
        pending: true,
        success: false,
        failure: false,
      },
      ...this.state
    });

    api.searchPhotosByQuery(query, page)
      .then(res => {
        this.setState({
          request: {
            success: true,
            pending: false,
            failure: false
          },
          searchResults: res.results,
          currentQuery: query,
          currentPage: page,
          totalPages: res.total_pages
        })
      })
      .catch(err => {
        console.log('error:', err);
      });
  }

  handlePageChange = (pageNumber) => () => {
    this.searchByQuery(this.state.currentQuery, pageNumber);
    // TODO: use polyfill to animate smooth scrool 
    // to top ofPhotoGrid container
    window.scrollTo(0, 0);
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
            <div className="photosContainer">
              <PhotoGrid photos={this.state.searchResults} />
              <Pagination 
                currentPage={this.state.currentPage} 
                totalPages={this.state.totalPages} 
                handleClick={this.handlePageChange}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
