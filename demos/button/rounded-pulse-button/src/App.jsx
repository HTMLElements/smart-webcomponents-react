import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo rounded-pulse-button">
			        <label>Rounded Pulse Button</label>
			        <div className="demo-buttons-group">
			            <div className="text-box">
			                <Button  className="Button-element btn btn-white btn-animate">click me</Button>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
