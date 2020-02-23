import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <div>
      <h1>Jorge Iván Villay Játiva</h1>
      <ul>
        <li><Link to="/focusable-input">Focusable Text Input</Link></li>
        {/* Pending: Change the candidates number */}
        <li><Link to="/voting-list/0">Voting List</Link></li>
        <li><Link to="/register-form">Register Form</Link></li>
      </ul>
    </div>
  )
}

export default MainNavigation;