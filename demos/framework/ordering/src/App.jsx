import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Use .order- classes for controlling the visual order of your content</div>
			    <div
			    className="Grid-layout no-gaps">
			        <div className="row">
			            <div className="col-sm-4">1 of 3</div>
			            <div className="col-sm-4 order-0">2 of 3</div>
			            <div className="col-sm-4">3 of 3</div>
			        </div>
			</div>
			</div>
		);
	}
}



export default App;
