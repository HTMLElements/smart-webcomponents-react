import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <TextBox  selectAllOnFocus placeholder="smart Text Box"></TextBox>
			</div>
		);
	}
}



export default App;
