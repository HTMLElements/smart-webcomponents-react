import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            details: {
	                subject: "About Transaction",
	                message: "Hey, Peter. Take a look at the items, I sent you earlier."
	            }
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">TextBox and MultilineTextBox are bound to sub properties.</div>
			    <br/>
			    <TextBox smart-model="details.subject" id="textBox1"></TextBox>
			    <br/>
			    <br/>
			    <MultilineTextBox smart-model="details.message"
			    id="textBox2"></MultilineTextBox>
			    <br/>	<span>{{details.subject}}</span>
			    <br/>	<span>{{details.message}}</span>
			</div>
		);
	}
}



export default App;
