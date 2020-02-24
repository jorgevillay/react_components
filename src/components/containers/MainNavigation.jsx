import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  const [state, setState] = useState({
    focused: false
  })
  const handleChange = event => {
    const { checked } = event.target;
    setState({
      focused: checked
    })
  }
  return (
    <div>
      <h1>Jorge Iván Villay Játiva</h1>
      <ul>
        <li>
          <input type="checkbox" name="focused" checked={state.focused} onChange={handleChange} />
          <label>¿Initially focused input?</label>
          <br />
          <Link to={{ pathname: '/focusable-input', state: { focused: state.focused } }}>Focusable Text Input</Link>
        </li>
        {/* Pending: Change the candidates number */}
        <li><Link to="/voting-list/0">Voting List</Link></li>
        <li><Link to="/register-form">Register Form</Link></li>
      </ul>
    </div>
  )
}

export default MainNavigation;