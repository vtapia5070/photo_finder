import React from 'react';
import classnames from 'classnames';

import './Card.css';

const Card = (props) => {
  return (
    <div className={classnames('card', props.classes)}>
      {props.children}
    </div>
  )
};

export default Card;