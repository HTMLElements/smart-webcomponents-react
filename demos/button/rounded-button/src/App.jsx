import 'smart-webcomponents-react/source/styles/smart.default.css';
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
			    <div className="button-demo rounded-button">
			        <label>Rounded Button</label>
			        <div className="demo-buttons-group">
			            <Button  className="button">Hover me</Button>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
