import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { WaitWindow } from 'smart-webcomponents-react/waitwindow';

class App extends React.Component {

	constructor(p) {
		super(p);

		this.button = React.createRef();
		this.waitWindow = React.createRef();
	}
	
	handleEvent(event) {
	    if (this.waitWindow.current.opened) {
			return;
		}
		this.waitWindow.current.open();
		setTimeout(() => {
			this.waitWindow.current.close();
		}, 2500);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="options">
			        <div className="option">
			            <Button ref={this.button} onClick={this.handleEvent.bind(this)} id="openButton">Open</Button>
			        </div>
			    </div>
			    <WaitWindow opened ref={this.waitWindow} label="Wait Window" modal></WaitWindow>
			</div>
		);
	}
}



export default App;
