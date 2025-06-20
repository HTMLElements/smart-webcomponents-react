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
			    <div className="demo-description">To add spacing between stacked items, use 'spacing' or 'spacing-#' where
			        # is from 2 to 6.</div>
			    <div className="smart-stack-layout spacing">
			        <Button  className="primary item">OK</Button>
			        <Button  className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 1</label>
			    <br/>
			    <div className="smart-stack-layout spacing-2">
			        <Button  className="primary item">OK</Button>
			        <Button  className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 2</label>
			    <br/>
			    <div className="smart-stack-layout spacing-3">
			        <Button  className="primary item">OK</Button>
			        <Button className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 3</label>
			    <br/>
			    <div className="smart-stack-layout spacing-4">
			        <Button className="primary item">OK</Button>
			        <Button className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 4</label>
			    <br/>
			    <div className="smart-stack-layout spacing-5">
			        <Button className="primary item">OK</Button>
			        <Button className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 5</label>
			    <br/>
			    <div className="smart-stack-layout spacing-6">
			        <Button className="primary item">OK</Button>
			        <Button className="secondary item">Cancel</Button>
			    </div>
			    <label>Stack Layout Spacing - 6</label>
			    <br/>
			</div>
		);
	}
}



export default App;
