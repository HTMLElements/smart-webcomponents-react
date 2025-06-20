import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	
	    const app = new window.Smart.App({
	        data: {
	            firstName: 'test',
	            items: ['item2']
	        }
	    });
	    // app.data.items = ['item1'];
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div id="form">First Name: <span>{{firstName}}</span>
			        <br />Last Name: <span>{{lastName}}</span>
			        <br /> <span>{{items.0}}</span>
			    </div>
			</div>
		);
	}
}



export default App;
