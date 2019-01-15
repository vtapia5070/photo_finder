import React from 'react';
import classnames from 'classnames';

import './Card.css';

const Card = (props) => {
  return (
    <div className={classnames('card', props.classes)}>
      {props.overlay && (
        <div className="overlay">
          <div className="description">{props.overlay.description}</div>
          <div className="name">by {props.overlay.name}</div>
        </div>
      )}
      {props.children}
    </div>
  )
};

export default Card;