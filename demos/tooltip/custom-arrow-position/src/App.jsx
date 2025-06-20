import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Button id="button">Button</Button>
			    <Tooltip id="tooltip" selector="button" arrow>This is a tooltip for smartButton</Tooltip>
			</div>
		);
	}
}



export default App;
