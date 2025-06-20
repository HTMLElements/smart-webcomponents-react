import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            picked: 'One'
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Radio buttons binding.</div>
			    <RadioButton  type="radio"
			    id="one" value="One" smart-model="picked">
			        <label for="one">One</label>
			    </RadioButton>
			    <RadioButton  type="radio" id="two" value="Two" smart-model="picked">
			        <label for="two">Two</label>
			    </RadioButton>
			    <RadioButton  type="radio" id="three" value="Three"
			    smart-model="picked">
			        <label for="three">Three</label>
			    </RadioButton>
			    <br>Picked: <span>{{ picked }}</span>
			</div>
		);
	}
}



export default App;
