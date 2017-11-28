import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogInForm from './Login';
import SignUpForm from './Register';


function SignInForm({ path }) {
  let signupmarkup;
  let loginmarkup;

  const isSignUp = path === '/signup';

  if (isSignUp) {
    signupmarkup = <SignUpForm />;
  } else {
    signupmarkup = <Link to="/signup" className="btn--primary--inverse margin--top-3">Create Account</Link>;
    loginmarkup = (
      <div className="signin-section flex-parent flex-col flex-justify-between">
        <h2 className="underline-header">Login</h2>
        <LogInForm />
      </div>
    )
  }

  return (
    <div className="wrap">
      {!isSignUp && (
        <div className="margin--bottom-10">
          <h1>Welcome back!</h1>
          <h2>It’s always nice to see an old friend.</h2>
        </div>
      )}
      <div className="flex-parent flex-align-center">
        <div className="signin flex-grow-1">
          {loginmarkup}
          {isSignUp && (
            <div className="margin--bottom-5">
              <h1>Don’t be sheepish</h1>
              <h2>Shopping is easier when you create an account</h2>
            </div>
          )}
          <div className="signin-section flex-parent">
            <div className="signin-create flex-parent flex-grow-1 flex-col flex-justify-between">
              <div>
                <h2 className="underline-header">Create an account</h2>
                <p>Make shopping easier. Save your faves and view them later—and speed up checkout when you’ve found the rug of your dreams. We’ll never spam you or sell your data. What we will do is send you the occasional awesome promo code or cool update.</p>
              </div>
              {signupmarkup}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

