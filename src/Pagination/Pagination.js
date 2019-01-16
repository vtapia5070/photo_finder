import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import './Pagination.css';


class Pagination extends Component {
  
  renderPaginationNumbers () {
    const { currentPage, totalPages, handleClick } = this.props;
    let prevCounter = currentPage;
    let nums = [];
    
    while (prevCounter > 0) {
      nums.unshift(
        <div
          key={prevCounter}
          className={classnames('number', {active: prevCounter === currentPage})}
          onClick={handleClick(prevCounter)}
        >
          {prevCounter}
        </div>
      );
      prevCounter--;
    }
  
    let nextCounter = currentPage + 1;
    
    while (nextCounter < currentPage + 3 && nextCounter < totalPages) {
      nums.push(
        <div
          className="number"
          key={nextCounter}
          onClick={handleClick(nextCounter)}
        >
          {nextCounter}
        </div>
      );
      nextCounter++;
    }

    return nums;
  }

  render () {
    const { currentPage, totalPages, handleClick } = this.props;
  
    return (
      <footer className="paginationContainer">
        <IconButton
          aria-label="Navigate"
          onClick={handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          role="button"
        >
          <Icon><ChevronLeft /></Icon>
        </IconButton>
        {this.renderPaginationNumbers()}
        <span className="ellipsis">...</span>
        <div 
          className="number"
          onClick={handleClick(totalPages)} 
        >
          {totalPages}
        </div>
        <IconButton
          aria-label="Navigate"
          onClick={handleClick(currentPage+1)}
          disabled={currentPage === totalPages}
          role="button"
        >
          <Icon><ChevronRight /></Icon>
        </IconButton>
      </footer>
    );
  }
};

export default Pagination;