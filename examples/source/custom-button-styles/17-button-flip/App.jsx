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
			    <div className="button-demo button-flip">
			        <label>Button Flip</label>
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
