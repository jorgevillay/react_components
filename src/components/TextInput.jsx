import React from 'react';

const TextInput = React.forwardRef((props, ref) => (
  <input type="text" className="form-control" ref={ref} />
));

export default TextInput;