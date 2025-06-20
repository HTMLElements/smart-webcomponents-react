import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { MultiSplitButton, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multisplitbutton';

class App extends React.Component {

	buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MultiSplitButton buttonsDataSource={this.buttonsDataSource} id="multiSplitButton"></MultiSplitButton>
			</div>
		);
	}
}



export default App;
