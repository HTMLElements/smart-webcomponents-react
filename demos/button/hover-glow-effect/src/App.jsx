import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <label>Hover Glow Effect</label>
			    <div className="button-demo hover-glow-effect">
			        <div className="demo-buttons-group">
			            <Button  className="glow-on-hover">Hover me, then click me!</Button>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
