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
			    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
			    rel="stylesheet">
			    <div className="button-demo flush-button">
			        <label>Flush button</label>
			        <div className="demo-buttons-group">
			            <Button style="--content: 'Hover me!';" className="flush-btn">
			                <div className="left"></div>Hover me!
			                <div className="right"></div>
			            </Button>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
