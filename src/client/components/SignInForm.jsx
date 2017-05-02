import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function LogInForm() {
  return (
    <div className="flex-parent flex-col flex-align-center flex-justify-start full-width">
      <h2 className="margin--bottom-7">Enter Your Credentials</h2>
      <form className="form">
        <div className="form-group">
          <div className="form-component">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="form-component margin--top-3">
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
        <div className="form-content">
          <button className="btn btn--first">Log In</button>
          <div className="margin--top-3"><span>{'Don\'t have an account?'} <Link to="/register">Register now</Link>.</span></div>
        </div>
      </form>
    </div>
  );
}

function SignInForm({ path }) {
  return (
    <div className="full-width full-height flex-parent global-padding flex-align-center flex-justify-center">
      {path === '/login' ? <LogInForm /> : <div />}
    </div>
  );
}

export default SignInForm;

