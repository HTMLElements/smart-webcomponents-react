import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
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
			    <div className="demo-description">Using a single set of .col-sm-* classes, you can create a basic grid system
			        that starts out stacked before becoming horizontal with at the small breakpoint
			        (sm).</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-sm-4">1 of 3</div>
			            <div className="col-sm-4">2 of 3</div>
			            <div className="col-sm-4">3 of 3</div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
