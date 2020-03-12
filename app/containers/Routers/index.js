/**
 *
 * Router.js

 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import Kit from '../../containers/Kit';
import CoursePage from '../../containers/CoursePage';
import AuthenticationPage from '../../containers/AuthenticationPage';
import VerifyCode from '../../containers/VerifyCodePage';
import Register from '../../containers/RegisterPage';
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
				<Route component={Page404} />
			</Switch>
		</SnappLayout>
	);
}

export default App;
