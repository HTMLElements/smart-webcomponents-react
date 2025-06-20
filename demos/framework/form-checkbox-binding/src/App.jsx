import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            isChecked: true
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Our CheckBox Custom Element bound through smart-MODEL</div>
			    <br/>
			    <CheckBox  smart-model="isChecked">CheckBox</CheckBox>
			    <br/>
			    <br/>CheckBox's Value is: <span>{{isChecked}}</span>	
			</div>
		);
	}
}



export default App;
