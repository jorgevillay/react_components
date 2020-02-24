import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput';

function FocusableTextInput(props) {
  let focusedInput = React.createRef();
  const [state, setState] = useState({
    focused: props.location.state.focused
  })
  const handleChange = event => {
    const { checked } = event.target;
    setState({
      focused: checked
    })
  }
  useEffect(() => {
    state.focused && focusedInput.current.focus();
  })
  return (
    <div>
      <h1>Welcome to FocusableTextInput</h1>
      <input type="checkbox" name="focused" checked={state.focused} onChange={handleChange} />
      <label>{props.location.state.focused ? '¿Is still focused?' : '¿Is focused?'}</label>
      <br />
      <TextInput ref={focusedInput} />
      <br />
      <Link to="/">Return to main menu</Link>
    </div >
  )
}

export default FocusableTextInput;