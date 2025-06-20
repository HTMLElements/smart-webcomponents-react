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
			    <div className="button-demo swipe-right-button">
			        <label>Swipe Right Button</label>
			        <div className="demo-buttons-group">
			            <div className="wrapper">
			                <Button  className="swipe-right-btn"> <a href="javascript:void(0);">
			
			                        <span>Hover Me!</span>
			
			                    </a>
			                </Button>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
