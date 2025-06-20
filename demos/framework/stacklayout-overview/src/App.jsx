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
	            horizontalAlignment: 'left',
	            verticalAlignment: 'top',
	            orientation: 'horizontal'
	        }
	    });
	    app.notify(function(changes) {
	        if (changes.propertyName === 'horizontalAlignment') {
	            stackPanel.classList.remove('left', 'right', 'center');
	        }
	        if (changes.propertyName === 'verticalAlignment') {
	            stackPanel.classList.remove('top', 'bottom', 'middle');
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
			    <div className="demo-description">StackLayout organizes views in a one-dimensional line ("stack"), either
			        horizontally or vertically. Views in a StackLayout can be sized based on
			        the space in the layout using layout options. Positioning is determined
			        by the order views were added to the layout and the layout options of the
			        views.</div>
			    <div className="smart-stack-layout">
			        <Button  className="primary item">OK</Button>
			        <Button  className="secondary item">Cancel</Button>
			    </div>
			    <div className="options">
			        <div className="caption">Settings</div>
			        <div className="option">
			            <RadioButton  value="left" smart-model="horizontalAlignment"
			            checked>Left</RadioButton>
			            <br/>
			            <RadioButton  value="center" smart-model="horizontalAlignment">Center</RadioButton>
			            <br/>
			            <RadioButton  value="right" smart-model="horizontalAlignment">Right</RadioButton>
			        </div>
			        <div className="option">
			            <RadioButton  value="top" smart-model="verticalAlignment"
			            checked>Top</RadioButton>
			            <br/>
			            <RadioButton value="middle" smart-model="verticalAlignment">Middle</RadioButton>
			            <br/>
			            <RadioButton  value="bottom" smart-model="verticalAlignment">Bottom</RadioButton>
			        </div>
			        <div className="option">
			            <RadioButton value="horizontal" smart-model="orientation"
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
