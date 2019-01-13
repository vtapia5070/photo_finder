import React, { Component } from 'react';
import Card from '../Components/Card/Card';

import './PhotoGrid.css';

class PhotoGrid extends Component {

  render () {
    return (
      <div className="photoGridContainer">
        { 
          this.props.photos.map((photo, index) => (
            <Card 
              key={`${photo.id}_${index}`}
              classes="photo"
            >
              <img 
                src={photo.urls.thumb} 
                alt={photo.description}
              />
            </Card>
          ))
        }
      </div>
    );
  }
}

export default PhotoGrid;