import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <MultilineTextBox placeholder="Enter Text" autoExpand></MultilineTextBox>
			</div>
		);
	}
}



export default App;
