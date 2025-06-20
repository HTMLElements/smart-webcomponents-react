import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            selected: ''
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Single Select, smart-model="selected"</div>
			    <br/>
			    <select smart-model="selected">
			        <option disabled value="">Please select one</option>
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
