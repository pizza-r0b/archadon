import React from 'react';
import spriteSheet from 'Images/spritesheet.svg';
import Navigation from 'Components/Navigation';
import LoginForm from 'Components/LoginForm';
import { Switch, Route } from 'react-router-dom';

import '../../scss/styles.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact={true} path="/" render={() =>
            <div className="wrap">
              <div className="flex-col-break flex-parent">
                <div className="flex-1">
                  <h1>Welcome back</h1>
                  <h2 className="font-color--lighter">Let's sell together</h2>
                  <p className="margin--y-3">Sign in using your affiliate portal credentials.</p>
                  <p className="margin--y-3">Aren't part of our affiliate program yet? Fill out an application to begin the process today so you can join a growing community of rug distributors selling rugs on an established online platform.</p>
                  <p className="margin--y-3">Need help? Email us at <strong>affiliates@archadon.com</strong></p>
                </div>
                <div className="login-wrap flex-col-break--m">
                  <LoginForm />
                </div>
              </div>
            </div>
          } />
        </Switch>
        <div dangerouslySetInnerHTML={{ __html: spriteSheet }} />
      </div>
    );
  }
}

export default App;
