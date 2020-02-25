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
    <div>
      <h1>Welcome to RegisterForm</h1>
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
              <label>Username</label>
              <Field name="username" validate={validateUsername} />
              {errors.username && touched.username && errors.username}
              <br />
              <label>Email</label>
              <Field name="email" validate={validateEmail} />
              {errors.email && touched.email && errors.email}
              <br />
              <label>Phone number</label>
              <Field name="phonenumber" validate={validatePhonenumber} />
              {errors.phonenumber && touched.phonenumber && errors.phonenumber}
              <br />
              <button type="submit" disabled={isSubmitting}>Submit form</button>
              <h3>{isSubmitting ? 'Sending form' : 'Pending to send'}</h3>
            </Form>
          )}
      </Formik>
      <Link to="/">Return to main menu</Link>
    </div>
  )
}

export default RegisterForm;