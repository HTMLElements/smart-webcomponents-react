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
			    <div className="demo-description">Positioning items which span more than one grid track.</div>
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col-sm-8">A</div>
			            <div span="2" className="col-sm-4">B</div>
			            <div className="col-sm-4">C</div>
			            <div className="col-sm-4">C</div>
			        </div>
			    </div>
			</div>
		);
	}
}



export default App;
