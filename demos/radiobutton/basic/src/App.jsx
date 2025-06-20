import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <RadioButton>Radio Button 1</RadioButton>
			    <RadioButton checked>Radio Button 2</RadioButton>
			</div>
		);
	}
}



export default App;
