import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleChange(event) {
		this.log.current.innerHTML = event.detail.value.toString();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Calendar onChange={this.handleChange.bind(this)} id="calendar"></Calendar>
				<div>
					<h3>Event Log:</h3>
					<div ref={this.log} id="eventLog"></div>
				</div>
			</div>
		);
	}
}



export default App;
