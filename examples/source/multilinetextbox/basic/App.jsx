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
				<MultilineTextBox enterKeyBehavior="newLine" selectAllOnFocus autoFocus placeholder="smart Text Area"></MultilineTextBox>
			</div>
		);
	}
}



export default App;
