import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            counter: 0,
	            click: function(event) {
	                this.counter++;
	            }
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Click the Button to increase the 'counter'.</div>
			    <Button 
			    (click)="click()">Count: <span>{{counter}}</span>
			    </Button>
			</div>
		);
	}
}



export default App;
