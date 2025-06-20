import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
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
			    <Button  className="primary large"><i className="material-icons">&#xE53F;</i> Attractions</Button>
			    <Button 
			    className="secondary"><i className="material-icons">&#xE53F;</i> Attractions</Button>
			    <Button 
			    className="success small"><i className="material-icons">&#xE53F;</i> Attractions</Button>
			    <Button 
			    className="very-small"><i className="material-icons">&#xE53F;</i> Attractions</Button>
			</div>
		);
	}
}



export default App;
