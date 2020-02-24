import React from 'react';

const TextInput = React.forwardRef((props, ref) => (
  <input type="text" ref={ref}></input>
));

export default TextInput;