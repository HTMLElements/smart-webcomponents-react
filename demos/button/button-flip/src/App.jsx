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
			    <label>Button Flip. Hover the Button to Flip it</label>
			    <div className="button-demo button-flip">
			        <div className="demo-buttons-group">
			            <Button  className="flip-btn"> <a href="javascript:void(0)" className="btn-flip" data-back="Back" data-front="Front"></a>
			            </Button>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
