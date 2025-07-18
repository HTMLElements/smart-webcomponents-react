import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            selected: ['A']
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Multiple select (bound to Array)</div>
			    <br/>
			    <select smart-model="selected" multiple>
			        <option disabled value="">Please select one or multiple</option>
			        <option>A</option>
			        <option>B</option>
			        <option>C</option>
			    </select>
			    <br/>
			    <br/>Selected: <span>{{ selected }}</span>
			</div>
		);
	}
}



export default App;
