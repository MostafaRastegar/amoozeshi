/**
 *
 * Router.js

 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Kit from '../Kit';
import CoursePage from '../CoursePage';
import AuthenticationPage from '../AuthenticationPage';
import VerifyCode from '../VerifyCodePage';
import Register from '../RegisterPage';
import Profile from '../ProfilePage/mainPage';
import Page404 from '../Page404';
import SnappLayout from '../../components/snappLayout';

function App() {
  return (
    <SnappLayout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/kit" component={Kit} />
        <Route exact path="/course" component={CoursePage} />
        <Route exact path="/authentication" component={AuthenticationPage} />
        <Route exact path="/verify-code" component={VerifyCode} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route component={Page404} />
      </Switch>
    </SnappLayout>
  );
}

export default App;
