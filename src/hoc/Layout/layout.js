import React, {Component} from 'react';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


class Layout extends Component {

	render () {
		return (
			<div>
				{/*Call header*/}
				<Header/>

				{this.props.children}	{/*body children like Handlebars*/}

				<Footer/>
			</div>
		)
	}

}

export default Layout;


