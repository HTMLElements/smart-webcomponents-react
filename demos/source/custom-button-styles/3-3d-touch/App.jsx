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
			    <div className="button-demo threed-touch">
			        <label>3D Touch</label>
			        <br />
			        <div className="demo-buttons-group">
			            <div className="button">
			                <Button>Mobile First</Button>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
