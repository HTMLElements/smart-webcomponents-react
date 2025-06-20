import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            selected: ['A']
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">DropDownList (bound to Array)</div>
			    <br/>
			    <DropDownList  selection-mode="checkBox" smart-model="selected">
			        <ListItem value="A">A</ListItem>
			        <ListItem value="B">B</ListItem>
			        <ListItem value="C">C</ListItem>
			    </DropDownList>
			    <br/>
			    <br/>Selected: <span>{{ selected }}</span>
			</div>
		);
	}
}



export default App;
