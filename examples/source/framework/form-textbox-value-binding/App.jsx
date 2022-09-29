import React from "react";
import ReactDOM from 'react-dom/client';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            message: "Hello World"
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">TextBox's value is data bound to the 'message' property. The SPAN tag's
			        text content is also automatically updated when the 'message' property
			        is changed.</div>
			    <br/>
			    <TextBox title={{message}} smart-model="message" id="textBox1"></TextBox>
			    <br/>	<span>{{message}}</span>
			</div>
		);
	}
}



export default App;
