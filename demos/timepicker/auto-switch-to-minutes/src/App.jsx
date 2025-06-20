import 'smart-webcomponents-react/source/styles/smart.default.css';
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
				<p>Select hour and the view will be switched to minutes view</p>
				<br />
				<TimePicker autoSwitchToMinutes></TimePicker>
			</div>
		);
	}
}



export default App;
