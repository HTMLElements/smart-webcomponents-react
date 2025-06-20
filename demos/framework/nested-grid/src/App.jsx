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
			    <div className="Grid-layout">
			        <div className="row">
			            <div className="col">A</div>
			        </div>
			        <div className="row">
			            <div className="col-sm-4">B</div>
			            <div className="col-sm-8 clearstyle">
			                <div className="Grid-layout">
			                    <div className="row">
			                        <div className="col-sm-4">D</div>
			                        <div className="col-sm-4">E</div>
			                        <div className="col-sm-4">F</div>
			                    </div>
			                    <div className="row">
			                        <div className="col-sm-4">O</div>
			                        <div className="col-sm-4">P</div>
			                        <div className="col-sm-4">Q</div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col">C</div>
			        </div>
			    </div>
		);
	}
}



export default App;
