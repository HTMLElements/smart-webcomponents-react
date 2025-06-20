import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<TimePicker format="24-hour"></TimePicker>
			</div>
		);
	}
}



export default App;
