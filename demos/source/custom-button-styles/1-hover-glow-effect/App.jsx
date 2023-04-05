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
			    <div className="button-demo hover-glow-effect">
			        <label>Hover Glow Effect</label>
			        <div className="demo-buttons-group">
			            <Button className="glow-on-hover">Hover me, then click me!</Button>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
