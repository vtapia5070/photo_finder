import React from 'react';
import TextField from '@material-ui/core/TextField';

import './TextInput.css';

const TextInput = (props) => {
  return (
    <div className="textInput">
      <TextField 
        autoFocus={true}
        margin="normal"
        value={props.value}
        onChange={props.onChange}
        label={props.label}
      />
    </div>
  )
};

export default TextInput;