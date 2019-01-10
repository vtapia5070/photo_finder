import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Search as SearchIcon } from '@material-ui/icons'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextInput from '../Components/TextInput/TextInput';

import './Search.css';

class Search extends Component {
  constructor () {
    super();
    this.state = {
      value: ''
    };
  }

  handleSearch = (event) => {
    // TODO
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <div className="wrapper">
        <div className="searchContainer">
          <TextInput
            onChange={this.handleChange}
            value={this.state.value}
            label="Search"
            endAdornment={
              <InputAdornment position="end">
                <IconButton color="primary" aria-label="Search" onClick={this.handleSearch}>
                  <Icon><SearchIcon /></Icon>
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>
    );
  }

};

export default Search;