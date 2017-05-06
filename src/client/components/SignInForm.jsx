import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogInForm from './Login';
import SignUpForm from './Register';


function SignInForm({ path }) {
  return (
    <div className="full-width padding--top-15 flex-parent global-padding flex-align-start flex-justify-center">
      {path === '/login' ? <LogInForm /> : <SignUpForm />}
    </div>
  );
}

export default SignInForm;

