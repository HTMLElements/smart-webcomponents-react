import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	init() {
	
	
	    const stackPanel = document.querySelector('.smart-stack-layout');
	    const app = new smartApp({
	        data: {
	            stretch: true,
	            verticalStretch: false,
	            orientation: 'horizontal'
	        }
	    });
	    app.notify(function(changes) {
	        if (changes.propertyName === 'stretch') {
	            if (changes.newValue) {
	                stackPanel.classList.add('stretch');
	            } else {
	                stackPanel.classList.remove('stretch');
	            }
	        }
	        if (changes.propertyName === 'verticalStretch') {
	            if (changes.newValue) {
	                stackPanel.classList.add('vertical-stretch');
	            } else {
	                stackPanel.classList.remove('vertical-stretch');
	            }
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
			    <div className="smart-stack-layout stretch">
			        <Button  className="primary item">OK</Button>
			        <Button  className="secondary item flex-2">Cancel</Button>
			    </div>
			    <div className="options">
			        <div className="caption">Stretch</div>
			        <div className="option">
			            <CheckBox  smart-model="stretch" checked>Horizontal</CheckBox>
			            <br/>
			            <CheckBox  smart-model="verticalStretch">Vertical</CheckBox>
			        </div>
			        <div className="caption">Orientation</div>
			        <div className="option">
			            <RadioButton  value="horizontal" smart-model="orientation"
			            checked>Horizontal</RadioButton>
			            <br/>
			            <RadioButton  value="vertical" smart-model="orientation">Vertical</RadioButton>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
