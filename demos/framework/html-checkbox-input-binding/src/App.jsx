import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';

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
			    <div className="demo-description">Single checkbox, boolean value:</div>
			    <br/>
			    <input type="checkbox" smart-model="isChecked" />
			    <br/>
			    <br/>CheckBox's Value is: <span>{{isChecked}}</span>	
			</div>
		);
	}
}



export default App;
