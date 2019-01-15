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
              overlay={{
                description: photo.description,
                name: `${photo.user.first_name} ${photo.user.last_name}`
              }}
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