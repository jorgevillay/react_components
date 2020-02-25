import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  const [state, setState] = useState({
    focused: false,
    candidates: ''
  })
  const handleChange = event => {
    const { name, type, value, checked } = event.target;
    setState(prev => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }
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
        <li>
          <input type="number" min="0" name="candidates" placeholder="Candidates to generate..." value={state.candidates} onChange={handleChange} />
          <br />
          <Link to={{ pathname: '/voting-list/' + state.candidates }} className={state.candidates === '' ? 'disabled-link' : 'false'}>Voting List</Link>
        </li>
        <li><Link to="/register-form">Register Form</Link></li>
      </ul>
    </div>
  )
}

export default MainNavigation;