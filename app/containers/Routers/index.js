/**
 *
 * Router.js

 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import Kit from '../../containers/Kit';
import Page404 from '../Page404';
import SnappLayout from '../../components/snappLayout';

function App() {
	return (
		<SnappLayout>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/kit" component={Kit} />
				<Route component={Page404} />
			</Switch>
		</SnappLayout>
	);
}

export default App;
