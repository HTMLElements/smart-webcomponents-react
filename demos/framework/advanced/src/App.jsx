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
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col">Header</div>
			        </div>
			        <div className="row">
			            <div className="col-sm-4">Side Bar</div>
			            <div className="col-sm-8">Content. Grid system with 3 rows. The Header and Footer are with 100px
			                height. The Content and Side Bar fill the rest of the remaining space.
			                The Side Bar and Content sre stacked on small device screen.</div>
			        </div>
			        <div className="row">
			            <div className="col">Footer</div>
			        </div>
			    </div>
		);
	}
}



export default App;
