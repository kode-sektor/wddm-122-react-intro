import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';	// load the links

// <BrowserRouter> makes the routes work. Simply wrap around the 
// links like HTML
const App = () => {
	return (
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	)
}

ReactDOM.render(
    <React.StrictMode>
    	<App />
    </React.StrictMode>,
    document.getElementById('root')
);
	


