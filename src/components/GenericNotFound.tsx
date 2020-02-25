import React from 'react';
import { Link } from 'react-router-dom';

function GenericNotFound() {
  return (
    <div className="container-fluid pt-4 pb-4">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card text-center">
            <div className="card-header">
              <h5 className="card-title mb-0">React coding examples</h5>
            </div>
            <div className="card-body pr-5 pl-5 pt-4 pb-3">
              <h3>Page not found :(</h3>
              <ul className="no-bullet-list p-0 m-0 mt-4">
                <li>
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

export default GenericNotFound;