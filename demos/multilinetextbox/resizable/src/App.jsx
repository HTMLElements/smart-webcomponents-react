import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<MultilineTextBox enterKeyBehavior="newLine" selectAllOnFocus resizable placeholder="smart Text Area"></MultilineTextBox>
			</div>
		);
	}
}



export default App;
