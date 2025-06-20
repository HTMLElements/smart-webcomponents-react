import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { ProgressWindow } from 'smart-webcomponents-react/progresswindow';
import { PromptWindow } from 'smart-webcomponents-react/promptwindow';
import { AlertWindow } from 'smart-webcomponents-react/alertwindow';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<div> 
			    <AlertWindow opened  label="Alert Window" >Operation Successful !</AlertWindow>
			    <ProgressWindow opened
			    label="Progress Window" max={50} >Loading...</ProgressWindow>
			    <PromptWindow opened label="Prompt Window" prompt-label="Enter your name:"
			    ></PromptWindow>
			</div>
		);
	}
}



export default App;
