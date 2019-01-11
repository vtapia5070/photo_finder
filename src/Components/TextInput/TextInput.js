import React from 'react';
import Input from '@material-ui/core/Input';

import './TextInput.css';

const TextInput = (props) => {
  return (
    <div className="textInput">
      <Input 
        autoFocus={true}
        // margin="normal"
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        endAdornment={props.endadornment}
      />
    </div>
  )
};

export default TextInput;