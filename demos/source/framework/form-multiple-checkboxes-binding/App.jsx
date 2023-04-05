import React from "react";
import ReactDOM from 'react-dom/client';
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	init() {
	
	    import {
	        App
	    } from "../../../source/smart.core.js"
	
	    const app = new App({
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
			        <CheckBox  type="checkbox" id="peter" value="Peter" smart-model="checkedNames">
			            <label for="jack">Peter</label>
			        </CheckBox>
			        <CheckBox  type="checkbox" id="john" value="Nancy" smart-model="checkedNames">
			            <label for="nancy">Nancy</label>
			        </CheckBox>
			        <CheckBox type="checkbox" id="anthony" value="Anthony"
			        smart-model="checkedNames">
			            <label for="anthony">Anthony</label>
			        </CheckBox>
			        <br> <span>Checked names: {{ checkedNames }}</span>
			    </div>
			</div>
		);
	}
}



export default App;
