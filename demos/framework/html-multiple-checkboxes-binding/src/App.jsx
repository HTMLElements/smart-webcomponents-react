import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        id: 'app',
	        data: {
	            checkedNames: ['Peter']
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Multiple checkboxes, bound to the same Array:</div>
			    <br/>
			    <div id='app'>
			        <input type="checkbox" id="peter" value="Peter" smart-model="checkedNames">
			        <label for="jack">Peter</label>
			        <input type="checkbox" id="john" value="Nancy" smart-model="checkedNames">
			        <label for="nancy">Nancy</label>
			        <input type="checkbox" id="anthony" value="Anthony" smart-model="checkedNames">
			        <label for="anthony">Anthony</label>
			        <br> <span>Checked names: {{ checkedNames }}</span>
			    </div>
			</div>
		);
	}
}



export default App;
