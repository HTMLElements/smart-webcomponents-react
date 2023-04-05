import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.button = React.createRef();
		this.log = React.createRef();
	}

	handleClick() {
		const button = this.button.current;

		button.disabled = true;
		this.log.current.innerHTML = "Disabled: " + button.nativeElement.getAttribute("disabled");
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Button ref={this.button} id="button" onClick={this.handleClick.bind(this)}>Click Me</Button>
				<br />
				<br />
				<div ref={this.log} id="log">Disabled: false</div>
			</div>
		);
	}
}



export default App;
