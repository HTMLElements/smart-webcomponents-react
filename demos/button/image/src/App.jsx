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
			    <Button  className="Button-large"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			    <Button 
			    className="Button"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			    <Button 
			    className="Button-small"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			    <Button 
			    className="Button-very-small"><span className="glyphicon glyphicon-ok"></span> OK</Button>
			</div>
		);
	}
}



export default App;
