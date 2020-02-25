import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

const validateUsername = (value) => {
  let error;
  if (!value) error = 'The username is required';
  else if (/[^a-zA-Z0-9_]/i.test(value)) error = 'The username does not have a valid format';
  else if (value.length < 4) error = 'The username must be at least 4 characters long';
  else if (value.length > 20) error = 'The username must be at most 20 characters long';
  return error
}

const validateEmail = (value) => {
  let error;
  if (!value) error = 'The email address is required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) error = 'The email address does not have a valid format';
  return error
}

const validatePhonenumber = (value) => {
  let error;
  if (!value) error = 'The phone number is required';
  else if (/[^0-9]/i.test(value)) error = 'The phone number does not have a valid format';
  else if (value.substring(0, 3) < 300 || value.substring(0, 3) > 320) error = 'The phone number must start with a number between 300 and 320';
  else if (value.length !== 10) error = 'The phone number must be 10 characters long';
  return error
}

function RegisterForm() {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card text-center">
            <div className="card-header">
              <h5 className="card-title mb-0">React coding examples</h5>
            </div>
            <div className="card-body p-5">
              <h3>Register form</h3>
              <ul className="no-bullet-list p-0 m-0 mt-5">
                <li>
                  <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                      <Formik
                        initialValues={{ username: '', email: '', phonenumber: '' }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          setTimeout(() => {
                            setSubmitting(false);
                            resetForm({});
                          }, 1500)
                        }}
                      >
                        {({
                          errors,
                          touched,
                          handleSubmit,
                          isSubmitting
                        }) => (
                            <Form onSubmit={handleSubmit}>
                              <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Username</label>
                                <div className="col-sm-8">
                                  <Field className={(errors.username && touched.username) ? 'form-control is-invalid' : 'form-control '} name="username" validate={validateUsername} />
                                </div>
                                <div className="col-sm-8 offset-sm-4">
                                  <small className="text-danger">
                                    {errors.username && touched.username && errors.username}
                                  </small>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-8">
                                  <Field className={(errors.email && touched.email) ? 'form-control is-invalid' : 'form-control '} name="email" validate={validateEmail} />
                                </div>
                                <div className="col-sm-8 offset-sm-4">
                                  <small className="text-danger">
                                    {errors.email && touched.email && errors.email}
                                  </small>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Phone number</label>
                                <div className="col-sm-8">
                                  <Field className={(errors.phonenumber && touched.phonenumber) ? 'form-control is-invalid' : 'form-control '} name="phonenumber" validate={validatePhonenumber} />
                                </div>
                                <div className="col-sm-8 offset-sm-4">
                                  <small className="text-danger">
                                    {errors.phonenumber && touched.phonenumber && errors.phonenumber}
                                  </small>
                                </div>
                              </div>
                              <button type="submit" className="btn btn-primary mt-2" disabled={isSubmitting}>Submit form</button>
                              <h5 className={isSubmitting ? 'text-info mt-3' : 'text-warning mt-3'}>{isSubmitting ? 'Sending form' : 'Pending to send'}</h5>
                            </Form>
                          )}
                      </Formik>
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

export default RegisterForm;