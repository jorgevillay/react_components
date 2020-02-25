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
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card text-center">
            <div className="card-header">
              <h5 className="card-title mb-0">React coding examples</h5>
            </div>
            <div className="card-body p-5">
              <h3>Jorge Iván Villay Játiva</h3>
              <ul className="no-bullet-list p-0 m-0 mt-5">
                <li>
                  <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name="focused" checked={state.focused} onChange={handleChange} />
                        <label className="form-check-label">¿Initially focused input?</label>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <button type="button" className="btn btn-link p-0">
                        <Link to={{ pathname: '/focusable-input', state: { focused: state.focused } }}>Focusable Text Input</Link>
                      </button>
                    </div>
                  </div>
                </li>
                <hr />
                <li className="mt-4 mb-4">
                  <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                      <input type="number" className="form-control" min="0" name="candidates" placeholder="Candidates to generate..." value={state.candidates} onChange={handleChange} />
                    </div>
                    <div className="col-sm-5">
                      <button type="button" className={(state.candidates === '' || state.candidates === '0') ? 'btn btn-link disabled' : 'btn btn-link'}>
                        <Link to={{ pathname: '/voting-list/' + state.candidates }} >Voting List</Link>
                      </button>
                    </div>
                  </div>
                </li>
                <hr />
                <li className="mt-4">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                      <button type="button" className="btn btn-link">
                        <Link to="/register-form">Register Form</Link>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-footer text-muted">
              Developed using React and Formik
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNavigation;