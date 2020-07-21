import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';	// import template
import './hoc/Layout/layout.css';	// import general stylesheet


class Routes extends Component {
	render () {
		return (
			<Layout>
				<Switch>
					<Route path="/" exact component={Home}/>
				</Switch>
			</Layout>
		) 
	}
}

export default Routes;
