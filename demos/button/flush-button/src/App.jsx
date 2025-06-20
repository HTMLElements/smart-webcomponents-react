import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<label>Flush button</label>

				<div className="button-demo flush-button">
					<div className="demo-buttons-group">
						<Button className="flush-btn">
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
