import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogInForm from './Login';
import SignUpForm from './Register';


function SignInForm({ path }) {
  let signupmarkup;
  let loginmarkup;

  if (path === '/signup') {
    signupmarkup = <SignUpForm />
  } else {
    signupmarkup = <Link to="/signup" className="btn--primary--inverse margin--top-3">Create Account</Link>;
    loginmarkup = (
      <div className="signin-section flex-parent flex-col flex-justify-between">
        <h2 className="underline-header">Your Account</h2>
        <LogInForm />
      </div>
    )
  }

  return (
    <div className="wrap flex-parent flex-align-center">
      <div className="signin flex-grow-1">
        {loginmarkup}

        <div className="signin-section flex-parent">
          <div className="signin-create flex-parent flex-grow-1 flex-col flex-justify-between">
            <div>
              <h2 className="underline-header">Create Account</h2>
              <p>Create an account and you will be able to save your favorite rugs and view them later! You can also save your address for quicker checkout. We'll send you the
              occasional promo code - or cool update. We will never spam you, or sell your data.</p>
            </div>
            {signupmarkup}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

