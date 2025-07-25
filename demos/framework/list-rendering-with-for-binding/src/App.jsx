import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">List Rendering with Data Binding</div>
			    <ul smart-for="items">
			        <li>{{item}}</li>
			    </ul>
			</div>
		);
	}
}



export default App;
