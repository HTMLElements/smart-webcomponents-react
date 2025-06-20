import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	init() {
	
	
	    const stackPanel = document.querySelector('.smart-stack-layout');
	    const app = new smartApp({
	        data: {
	            spacing: 'space-between',
	            orientation: 'horizontal'
	        }
	    });
	    app.notify(function(changes) {
	        if (changes.propertyName === 'spacing') {
	            stackPanel.classList.remove('space-between', 'space-around', 'space-evenly');
	        }
	        if (changes.propertyName === 'orientation') {
	            stackPanel.classList.remove('vertical');
	        }
	        stackPanel.classList.add(changes.newValue);
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description"></div>
			    <div className="smart-stack-layout space-between">
			        <Button  className="primary item">A</Button>
			        <Button  className="secondary item">B</Button>
			        <Button  className="primary item">C</Button>
			        <Button  className="secondary item">D</Button>
			    </div>
			    <div className="options">
			        <div className="caption">Settings</div>
			        <div className="option">
			            <RadioButton  checked value="space-between" smart-model="spacing"
			            checked>Space Between</RadioButton>
			            <br/>
			            <RadioButton  value="space-evenly" smart-model="spacing">Space Evenly</RadioButton>
			            <br/>
			            <RadioButton  value="space-around" smart-model="spacing">Space Around</RadioButton>
			        </div>
			        <div className="option">
			            <RadioButton  value="horizontal" smart-model="orientation"
			            checked>Horizontal</RadioButton>
			            <br/>
			            <RadioButton value="vertical" smart-model="orientation">Vertical</RadioButton>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
