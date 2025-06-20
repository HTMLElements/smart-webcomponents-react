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
			    <div className="demo-description">Equal-width columns.</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-6">1 of 2</div>
			            <div className="col-6">2 of 2</div>
			        </div>
			        <div className="row">
			            <div className="col-4">1 of 3</div>
			            <div className="col-4">2 of 3</div>
			            <div className="col-4">3 of 3</div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
