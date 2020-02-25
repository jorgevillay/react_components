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
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card text-center">
            <div className="card-header">
              <h5 className="card-title mb-0">React coding examples</h5>
            </div>
            <div className="card-body p-5">
              <h3>Focusable text input</h3>
              <ul className="no-bullet-list p-0 m-0 mt-5">
                <li>
                  <div className="row">
                    <div className="col-sm-5 offset-sm-1">
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name="focused" checked={state.focused} onChange={handleChange} />
                        <label className="form-check-label">{props.location.state.focused ? '¿Is still focused?' : '¿Is focused?'}</label>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <TextInput ref={focusedInput} />
                    </div>
                  </div>
                </li>
                <hr />
                <li className="mt-4">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                      <button type="button" className="btn btn-link">
                        <Link to="/">Return to main menu</Link>
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

export default FocusableTextInput;